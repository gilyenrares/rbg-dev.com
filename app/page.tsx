import  HeroSection from "@/components/sections/HeroSection";
import Jumbotron from "@/components/sections/Jumbotron";
import Newsletter from "@/components/sections/Newsletter";
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
