"use client";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/../../src/components/tracingBeam/tracing-beam";
//import './tracing-beam.css'
export default function TracingBeamDemoBanner({dummyContent}) {

  const ruleImg = {
    width: '50vw',
    height: '40vh',
  }
  return (
    
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10 w-full">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4")}>
              {item.title}
            </p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="500"
                  width="500"
                  className="rounded-lg mb-10 object-cover img-gif img-gif-built"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>

  );
}









