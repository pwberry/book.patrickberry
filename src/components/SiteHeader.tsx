import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Search } from "lucide-react";
import { chapters } from "@/data/chapters";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SearchDialog from "@/components/SearchDialog";

const SiteHeader = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const isAboutPage = location.pathname === "/" || location.pathname === "/about";
  const isChapterPage = !isAboutPage;

  return (
    <>
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="group flex-1 min-w-0">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
                Literacy and the Humanities after Prison
              </h1>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 shrink-0">
              <button
                onClick={() => setSearchOpen(true)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              <Link
                to="/about"
                className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                  isAboutPage ? "text-accent" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                About
              </Link>
              <Link
                to="/introduction"
                className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                  isChapterPage ? "text-accent" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Read
              </Link>
            </nav>

            {/* Mobile Menu */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <button className="p-2 -mr-2" aria-label="Open menu">
                    <Menu className="h-6 w-6" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 p-0">
                  <div className="p-6 border-b border-border">
                    <h2 className="font-serif text-lg font-medium">Menu</h2>
                  </div>
                  <nav className="p-4">
                    <Link
                      to="/about"
                      onClick={() => setOpen(false)}
                      className={`block py-3 px-2 text-sm font-medium uppercase tracking-wider border-b border-border ${
                        isAboutPage ? "text-accent" : "text-muted-foreground"
                      }`}
                    >
                      About
                    </Link>
                    <div className="mt-4">
                      <p className="px-2 text-xs uppercase tracking-wider text-muted-foreground mb-2">Chapters</p>
                      {chapters.map((chapter) => {
                        const isActive = location.pathname === chapter.path;
                        return (
                          <Link
                            key={chapter.id}
                            to={chapter.path}
                            onClick={() => setOpen(false)}
                            className={`block py-3 px-2 border-b border-border ${
                              isActive ? "text-accent" : "text-foreground"
                            }`}
                          >
                            <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">
                              {chapter.label}
                            </p>
                            <p className="font-serif text-sm font-medium leading-tight">
                              {chapter.title}
                            </p>
                          </Link>
                        );
                      })}
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
};

export default SiteHeader;
