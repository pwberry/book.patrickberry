import { ReactNode } from "react";
import SiteHeader from "@/components/SiteHeader";
import ChapterSidebar from "@/components/ChapterSidebar";
import ChapterFooter from "@/components/ChapterFooter";

interface ChapterLayoutProps {
  children: ReactNode;
  currentSlug: string;
}

const ChapterLayout = ({ children, currentSlug }: ChapterLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-12">
          <main className="flex-1 min-w-0 max-w-3xl">
            {children}
          </main>
          <ChapterSidebar />
        </div>
      </div>
      <ChapterFooter currentSlug={currentSlug} />
    </div>
  );
};

export default ChapterLayout;
