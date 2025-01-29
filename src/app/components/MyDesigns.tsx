import { FocusCards } from "./ui/focus-cards";
import design1 from "../assets/designs/design1.png";
import design2 from "../assets/designs/design2.png";
import design3 from "../assets/designs/design3.png";
import design4 from "../assets/designs/design4.png";
import design5 from "../assets/designs/design5.png";
import design6 from "../assets/designs/design6.png";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "IDK what to put here",
      src: design1,
    },
    {
      title: "Also Same",
      src: design2,
    },
    {
      title: "Please tell me what to put",
      src: design3,
    },
    {
      title: "For this also",
      src: design4,
    },
    {
      title: "Send me on WhatsApp",
      src: design5,
    },
    {
      title: "C'mon",
      src: design6,
    },
  ];

  return (
    <div className="bg-black py-12 px-6 sm:px-8 lg:px-16" id="work">
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent text-center bg-gradient-to-r from-amber-400 to-amber-800 bg-clip-text mb-8 md:mb-12">
        Cutest Designs I Made
      </h2>
      <FocusCards cards={cards} />
    </div>
  );
}