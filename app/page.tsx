import { Work } from "@/components/sections/Work";
import HomePage from "@/components/sections/HomePage";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="h-auto px-4">
      <HomePage />
      <Work />
      <Contact />
    </div>
  );
}
