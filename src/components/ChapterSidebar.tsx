import { Link, useLocation } from "react-router-dom";
import { chapters } from "@/data/chapters";

const ChapterSidebar = () => {
  const location = useLocation();

  return (
    <aside className="hidden lg:block w-72 shrink-0">
      <div className="sticky top-8">
        <nav className="space-y-0">
          {chapters.map((chapter) => {
            const isActive = location.pathname === chapter.path;
            return (
              <Link
                key={chapter.id}
                to={chapter.path}
                className={`sidebar-link flex gap-4 ${isActive ? "active" : ""}`}
              >
                <img 
                  src={chapter.image} 
                  alt={chapter.title}
                  className="w-16 h-12 object-cover shrink-0"
                />
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">
                    {chapter.label}
                  </p>
                  <h4 className="font-serif text-sm font-medium leading-tight line-clamp-2">
                    {chapter.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                    {chapter.subtitle}
                  </p>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default ChapterSidebar;
