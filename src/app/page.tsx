import { Hero } from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" min-h-screen w-full bg-neutral-50 overflow-hidden">
      <Hero />
      <div className='relative'>
        <img src={"/grad2.png"} className='size-96 opacity-70 rotate-180 absolute -top-32 right-0' />
      </div>
    </div>
  );
}
