import Image from "next/image";
import Navbar from "./components/navbar"
import Verticle from "./components/VerticalText"
import type { Metadata } from 'next'


 
export const metadata: Metadata = {
  title: 'Hellow world',
}
export default function Page() {
  return (
<> 
  <div>
      <Navbar></Navbar>
    </div>
      <div className="relative h-[200px] w-full overflow-hidden">
          <Image
            src="/deliverytruck.webp"
            alt="Header Image"
            layout="fill"
            objectFit="cover"
            priority
          />
      </div>
    <div>
      
    <div>
    <h2 className="flex flex-row flex-nowrap items-center mt-24">
    <span className="flex-grow block border-t border-black"></span>
    <span className="flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium bg-black text-white">
         Non-Emergency Medical Transportation
    </span>
    <span className="flex-grow block border-t border-black"></span>
    </h2>
    </div>
    </div>
      <div>
            <Verticle></Verticle>
  </div></>
  );
}
