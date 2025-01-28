import { FocusCards } from "./ui/focus-cards"
import design1 from "../assets/designs/design1.png";
import design2 from "../assets/designs/design2.png";
import design3 from "../assets/designs/design3.png";
import design4 from "../assets/designs/design4.png";
import design5 from "../assets/designs/design5.png";
import design6 from "../assets/designs/design6.png";
import design7 from "../assets/designs/design7.png";
 
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
      title: "Please tell me what do put",
      src: design3,
    },
    {
      title: "For this also",
      src: design4,
    },
    {
      title: "Send me on whatsapp",
      src: design5,
    },
    {
      title: "Cmon",
      src: design6,
    },
  ];
 
  return (
    <div className="bg-black" id="work">
        
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent text-center bg-gradient-to-r from-amber-400 to-amber-800 bg-clip-text mb-11">
            Cutest Designs I Made
        </h2>
        <FocusCards cards={cards} />
    </div>
  ) ;
}