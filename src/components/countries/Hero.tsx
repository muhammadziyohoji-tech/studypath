// src/components/RightShowcase  (UPDATED)
import Link from "next/link";
import RightShowcase from "@/components/ui/RightShowcase";

export default function Hero() {
  return (
    <header className="w-full border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h2 className="font-bold text-xl">StudyPath</h2>
          <nav className="hidden sm:flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/countries">Countries</Link>
            <Link href="/compare">Compare</Link>
            <Link href="/courses">courses</Link>
          </nav>
        </div>

        {/* Bu qism: menu o'ngida rasm showcase */}
        <RightShowcase />
      </div>
    </header>
  );
}