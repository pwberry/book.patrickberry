import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import ChapterLayout from "@/layouts/ChapterLayout";
import { chapters } from "@/data/chapters";
import HighlightText from "@/components/HighlightText";

const ChapterPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [searchParams] = useSearchParams();
  const highlightTerm = searchParams.get("highlight") || "";
  const contentRef = useRef<HTMLDivElement>(null);
  
  const chapter = chapters.find((c) => c.slug === slug);

  // Scroll to first highlight when page loads with highlight param
  useEffect(() => {
    if (highlightTerm && contentRef.current) {
      const firstMark = contentRef.current.querySelector("mark");
      if (firstMark) {
        setTimeout(() => {
          firstMark.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    }
  }, [highlightTerm, slug]);

  if (!chapter) {
    return (
      <ChapterLayout currentSlug={slug || ""}>
        <div className="text-center py-20">
          <h1 className="font-serif text-2xl">Chapter not found</h1>
        </div>
      </ChapterLayout>
    );
  }

  // Split content into paragraphs for rendering
  const paragraphs = chapter.content.split(". ").reduce((acc: string[], sentence, index, arr) => {
    // Group every 2-3 sentences into a paragraph
    const paragraphIndex = Math.floor(index / 3);
    if (!acc[paragraphIndex]) {
      acc[paragraphIndex] = "";
    }
    acc[paragraphIndex] += sentence + (index < arr.length - 1 ? ". " : "");
    return acc;
  }, []);

  return (
    <ChapterLayout currentSlug={chapter.slug}>
      {/* Chapter Header */}
      <header className="mb-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
          {chapter.label}
        </p>
        <h1 className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-4">
          <HighlightText text={chapter.title} searchTerm={highlightTerm} />
        </h1>
        <p className="text-lg text-muted-foreground">
          <HighlightText text={chapter.subtitle} searchTerm={highlightTerm} />
        </p>
        <p className="text-sm text-muted-foreground mt-4">
          author 1, author 2, author 3
        </p>
      </header>

      {/* Featured Image */}
      <figure className="mb-10">
        <img 
          src={chapter.image} 
          alt={chapter.title}
          className="w-full aspect-[4/3] object-cover"
        />
        <figcaption className="text-xs text-muted-foreground mt-2 italic">
          An artisan at the John Lobb workshop in Northampton, England, finishes the Lopez 75 by hand.
          <span className="not-italic ml-1">Photo: Harriet Ellis</span>
        </figcaption>
      </figure>

      {/* Chapter Content */}
      <article className="border-t border-border pt-8">
        <div className="prose-editorial" ref={contentRef}>
          {paragraphs.map((paragraph, index) => (
            <p key={index}>
              <HighlightText text={paragraph} searchTerm={highlightTerm} />
            </p>
          ))}
        </div>
      </article>
    </ChapterLayout>
  );
};

export default ChapterPage;
