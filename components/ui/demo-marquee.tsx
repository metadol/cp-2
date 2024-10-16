import { cn } from "@/lib/utils";
import Marquee from "./marquee";
import { benefitsData } from "../data/Sections";
const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstColumn = benefitsData.slice(0, 3);
const secondColumn = benefitsData.slice(3, 6);
const thirdColumn = benefitsData.slice(6, 9);

const ReviewCard = ({
  text,
  icon,
}: {
  text: string; // Only 'text' and 'icon' are needed
  icon: string; // Assuming 'icon' is a string, adjust as necessary
}) => {
  return (
    <div className="card" key={text}>
      <div>{icon}</div>
      <div>{text}</div>
    </div>
  );
};
export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <Marquee pauseOnHover className="[--duration:100s]">
        {firstColumn.map((review, index) => (
          <ReviewCard key={review.icon} icon={review.icon} text={review.text} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:100s]">
        {secondColumn.map((review, index) => (
          <ReviewCard key={review.icon} icon={review.icon} text={review.text} />
        ))}
      </Marquee>
      {/* <Marquee pauseOnHover className="[--duration:20s]">
        {thirdColumn.map((review) => (
          <ReviewCard  {...review} />
        ))}
      </Marquee> */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
