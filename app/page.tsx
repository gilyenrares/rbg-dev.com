
import { Jumbotron } from "@/components";
import Image from "next/image";
import { index } from '../components/data/jumbo';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Jumbotron {...index} />
    </main>
  );
}
