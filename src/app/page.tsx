"use client"
import Image from "next/image";
import { SetStateAction, useState } from "react";

export default function Home() {
  const [expandedIndex, setExpandedIndex] = useState(0)
  const sliding=[
    {image: "/img-1.jpg"},
    {image: "/img-2.jpg"},
    {image: "/img-3.jpg"},
    {image: "/img-4.jpg"},
    {image: "/img-5.jpg"},
    {image: "/img-6.jpg"}
  ]
  const handleClick = (index: SetStateAction<number>) =>{
    setExpandedIndex(index)
  }
  return (
    <main className="w-screen h-screen text-white bg-black overflow-hidden">
      <div className=" w-full h-full overflow-hidden flex items-center justify-center" style={{
        backgroundImage: `url(${sliding[expandedIndex].image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"

      }}>
        <div className="inset-0 absolute bg-[rgba(0, 0, 0, 0.7)] backdrop-blur z-0"></div>
      <div className="flex w-full max-w-7xl h-[50vh] gap-3 items-center justify-center z-10">
        {sliding.map((panel, index) =>(
          <div key={index} onClick={() => handleClick(index)} className={`h-full rounded-2xl bg-white cursor-pointer transition-all duration-300 ease-in-out overflow-hidden ${expandedIndex === index ? "w-[60%]": "w-[10%] hover:bg-gray-300"} min-w-[40px] block`}>
            <Image src={panel.image} alt="slider image" width={2048} height={1365} className="w-full h-full object-cover object-top" />
          </div>
        ))}
      </div>
      </div>
    </main>
  );
}
