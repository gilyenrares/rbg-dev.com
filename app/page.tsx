import { HeroSection, Jumbotron, Newsletter } from "@/components";
import { homeObjOne, homeObjTwo, index } from "@/constants";

export default function Home() {
  return (
    <>
      <Jumbotron {...index} />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <Newsletter />
    </>
  );
}
