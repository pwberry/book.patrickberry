import { useState, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { chapters, aboutPageContent } from "@/data/chapters";

interface SearchResult {
  slug: string;
  label: string;
  title: string;
  matchedText: string;
  matchType: "title" | "subtitle" | "content";
}

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Helper to find all occurrences and create snippets
const findAllMatches = (
  content: string,
  searchTerm: string,
  slug: string,
  label: string,
  title: string
): SearchResult[] => {
  const results: SearchResult[] = [];
  const contentLower = content.toLowerCase();
  const searchLower = searchTerm.toLowerCase();
  let startIndex = 0;

  while (true) {
    const matchIndex = contentLower.indexOf(searchLower, startIndex);
    if (matchIndex === -1) break;

    // Create snippet around match
    const snippetStart = Math.max(0, matchIndex - 30);
    const snippetEnd = Math.min(content.length, matchIndex + searchTerm.length + 50);
    const snippet =
      (snippetStart > 0 ? "..." : "") +
      content.slice(snippetStart, snippetEnd) +
      (snippetEnd < content.length ? "..." : "");

    results.push({
      slug,
      label,
      title,
      matchedText: snippet,
      matchType: "content",
    });

    startIndex = matchIndex + 1;
  }

  return results;
};

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredResults = useMemo(() => {
    if (!search.trim()) return [];

    const searchLower = search.toLowerCase();
    const results: SearchResult[] = [];

    // Search chapters
    chapters.forEach((chapter) => {
      // Check label (e.g., "CHAPTER 1", "INTRODUCTION")
      if (chapter.label.toLowerCase().includes(searchLower)) {
        results.push({
          slug: chapter.slug,
          label: chapter.label,
          title: chapter.title,
          matchedText: chapter.subtitle,
          matchType: "title",
        });
      }

      // Check title
      if (chapter.title.toLowerCase().includes(searchLower)) {
        results.push({
          slug: chapter.slug,
          label: chapter.label,
          title: chapter.title,
          matchedText: chapter.subtitle,
          matchType: "title",
        });
      }

      // Check subtitle
      if (chapter.subtitle.toLowerCase().includes(searchLower)) {
        results.push({
          slug: chapter.slug,
          label: chapter.label,
          title: chapter.title,
          matchedText: chapter.subtitle,
          matchType: "subtitle",
        });
      }

      // Find all content matches
      const contentMatches = findAllMatches(
        chapter.content,
        search,
        chapter.slug,
        chapter.label,
        chapter.title
      );
      results.push(...contentMatches);
    });

    // Search About page
    if (aboutPageContent.title.toLowerCase().includes(searchLower)) {
      results.push({
        slug: "about",
        label: "ABOUT",
        title: aboutPageContent.title,
        matchedText: aboutPageContent.subtitle,
        matchType: "title",
      });
    }

    if (aboutPageContent.subtitle.toLowerCase().includes(searchLower)) {
      results.push({
        slug: "about",
        label: "ABOUT",
        title: aboutPageContent.title,
        matchedText: aboutPageContent.subtitle,
        matchType: "subtitle",
      });
    }

    const aboutContentMatches = findAllMatches(
      aboutPageContent.content,
      search,
      "about",
      "ABOUT",
      aboutPageContent.title
    );
    results.push(...aboutContentMatches);

    return results;
  }, [search]);

  const handleSelect = (slug: string) => {
    // Pass search term as query param for highlighting
    const searchParam = search.trim() ? `?highlight=${encodeURIComponent(search.trim())}` : "";
    navigate(`/${slug}${searchParam}`);
    onOpenChange(false);
    setSearch("");
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput
        placeholder="Search the book..."
        value={search}
        onValueChange={setSearch}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {filteredResults.length > 0 && (
          <CommandGroup heading={`${filteredResults.length} result${filteredResults.length > 1 ? "s" : ""} found`}>
            {filteredResults.map((result, index) => (
              <CommandItem
                key={`${result.slug}-${result.matchType}-${index}`}
                onSelect={() => handleSelect(result.slug)}
                className="cursor-pointer py-3 px-3"
              >
                <div className="flex flex-col gap-1 w-full min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-muted-foreground">{result.label}</span>
                    <span className="text-xs px-1.5 py-0.5 bg-muted rounded">
                      {result.matchType}
                    </span>
                  </div>
                  <p className="font-serif font-medium text-sm truncate">{result.title}</p>
                  <p className="text-xs text-muted-foreground line-clamp-2 break-words">
                    {result.matchedText}
                  </p>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
        {!search.trim() && (
          <CommandGroup heading="Chapters">
            {chapters.map((chapter) => (
              <CommandItem
                key={chapter.slug}
                onSelect={() => handleSelect(chapter.slug)}
                className="cursor-pointer"
              >
                <div>
                  <p className="text-xs text-muted-foreground">{chapter.label}</p>
                  <p className="font-serif font-medium">{chapter.title}</p>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  );
};

export default SearchDialog;
