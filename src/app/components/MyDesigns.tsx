import { FocusCards } from "./ui/focus-cards";
import design1 from "../assets/designs/design1.png";
import design2 from "../assets/designs/design2.png";
import design3 from "../assets/designs/design3.png";
import design4 from "../assets/designs/design4.png";
import design5 from "../assets/designs/design5.png";
import design6 from "../assets/designs/design6.png";

export function FocusCardsDemo() {
  const cards = [
    { title: "Modern UI Concept", src: design1 },
    { title: "Dark Mode Aesthetic", src: design2 },
    { title: "Minimalist Poster", src: design3 },
    { title: "Creative Banner", src: design4 },
    { title: "Typography Magic", src: design5 },
    { title: "Abstract Vibes", src: design6 },
  ];

  return (
    <div className="relative bg-black py-16 px-6 sm:px-8 lg:px-16 overflow-hidden" id="work">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-amber-500 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-amber-700 rounded-full blur-2xl opacity-50 animate-pulse"></div>
      </div>

      {/* Header */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent text-center bg-gradient-to-r from-amber-400 to-amber-800 bg-clip-text mb-12 drop-shadow-lg">
        My Most Attractive Designs
      </h2>

      {/* Focus Cards Section */}
      <FocusCards cards={cards} />

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-32 bg-amber-400 blur-3xl opacity-25"></div>
    </div>
  );
}
