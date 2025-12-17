import { Link } from "react-router-dom";
import { chapters } from "@/data/chapters";

interface ChapterFooterProps {
  currentSlug?: string;
}

const ChapterFooter = ({ currentSlug }: ChapterFooterProps) => {
  return (
    <footer className="border-t border-border mt-16 pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="font-serif text-xl font-medium mb-8">Continue Reading</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {chapters.map((chapter) => {
            const isCurrent = chapter.slug === currentSlug;
            return (
              <Link
                key={chapter.id}
                to={chapter.path}
                className={`chapter-card group ${isCurrent ? "ring-2 ring-accent" : ""}`}
              >
                <img 
                  src={chapter.image} 
                  alt={chapter.title}
                  className="aspect-[4/3] w-full object-cover mb-3"
                />
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                  {chapter.label}
                </p>
                <h4 className="font-serif text-sm font-medium leading-tight group-hover:text-accent transition-colors">
                  {chapter.title}
                </h4>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                  {chapter.subtitle}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default ChapterFooter;
