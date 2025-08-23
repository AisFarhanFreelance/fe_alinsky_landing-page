"use client";

import SearchBar from "@/components/ui/searchbar";

export default function TutorialTopBar() {
  return (
    <header className="flex w-full items-center justify-center px-4 py-3">
      <div className="flex flex-col items-center gap-6">
        <div className="text-center font-satoshi text-6xl font-bold text-alinsky-lavender-haze lg:text-5xl">
          What&apos;s on your mind?
        </div>

        <SearchBar onSearch={() => {}} />
      </div>
    </header>
  );
}
