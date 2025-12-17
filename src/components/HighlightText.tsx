import { useMemo } from "react";

interface HighlightTextProps {
  text: string;
  searchTerm: string;
  className?: string;
}

const HighlightText = ({ text, searchTerm, className = "" }: HighlightTextProps) => {
  const highlightedContent = useMemo(() => {
    if (!searchTerm.trim()) {
      return text;
    }

    const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) => {
      if (part.toLowerCase() === searchTerm.toLowerCase()) {
        return (
          <mark
            key={index}
            className="bg-yellow-300 text-foreground px-0.5 rounded-sm"
          >
            {part}
          </mark>
        );
      }
      return part;
    });
  }, [text, searchTerm]);

  return <span className={className}>{highlightedContent}</span>;
};

export default HighlightText;
