
import { HeroSection, Jumbotron } from "@/components";
import { homeObjOne, homeObjTwo } from '../components/data/hero-index';
import Image from "next/image";
import { index } from '../components/data/jumbo';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Jumbotron {...index} />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
    </main>
  );
}
