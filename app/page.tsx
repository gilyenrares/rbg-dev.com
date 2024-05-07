import { HeroSection, Jumbotron } from "@/components";
import { homeObjOne, homeObjTwo, index } from "@/constants";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Jumbotron {...index} />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
    </main>
  );
}
