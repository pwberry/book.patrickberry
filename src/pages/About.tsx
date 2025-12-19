import { useSearchParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import SiteHeader from "@/components/SiteHeader";
import ChapterSidebar from "@/components/ChapterSidebar";
import ChapterFooter from "@/components/ChapterFooter";
import HighlightText from "@/components/HighlightText";
import heroImage from "@/assets/hero-about.jpg";
import { aboutPageContent } from "@/data/chapters";

const About = () => {
  const [searchParams] = useSearchParams();
  const highlightTerm = searchParams.get("highlight") || "";
  const contentRef = useRef<HTMLDivElement>(null);

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
  }, [highlightTerm]);

  // Split content into paragraphs
  const paragraphs = aboutPageContent.content.split(". ").reduce((acc: string[], sentence, index, arr) => {
    const paragraphIndex = Math.floor(index / 3);
    if (!acc[paragraphIndex]) {
      acc[paragraphIndex] = "";
    }
    acc[paragraphIndex] += sentence + (index < arr.length - 1 ? ". " : "");
    return acc;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-12">
          {/* Main Content */}
          <main className="flex-1 min-w-0 max-w-3xl">
            {/* Hero Image */}
            <div className="mb-8">
              <img 
                src={heroImage} 
                alt="Elegant study room with vintage books"
                className="w-full aspect-[16/10] object-cover"
              />
              {aboutPageContent.caption && (
                <p className="text-xs text-muted-foreground mt-2 italic">
                  <HighlightText text={aboutPageContent.caption} searchTerm={highlightTerm} />
                </p>
              )}
            </div>

            {/* Article Header */}
            <div className="mb-12">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                About
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6 text-balance">
                <HighlightText text={aboutPageContent.title} searchTerm={highlightTerm} />
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <HighlightText text={aboutPageContent.subtitle} searchTerm={highlightTerm} />
              </p>
              <p className="text-sm text-muted-foreground">
                By <span className="font-medium">KATE GUADAGNINO</span>
              </p>
            </div>

            {/* Article Body */}
            <article className="border-t border-border pt-8">
              <div className="prose-editorial" ref={contentRef}>
                {paragraphs.map((paragraph, index) => (
                  <p key={index}>
                    <HighlightText text={paragraph} searchTerm={highlightTerm} />
                  </p>
                ))}
              </div>
            </article>
          </main>

          {/* Sidebar */}
          <ChapterSidebar />
        </div>
      </div>

      <ChapterFooter />
    </div>
  );
};

export default About;
