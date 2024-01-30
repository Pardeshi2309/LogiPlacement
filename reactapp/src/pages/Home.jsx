import React from 'react'
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"


const Home = () => {
  const comp = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        })
        .to("#one", {
          opacity: 0,
          delay: 4,
        })
        .from("#two", {
          opacity: 0,
          delay: 8,
        })
        .from("#three", {
          opacity: 0,
          delay: 12,
        })
       
    }, comp)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <div className="relative" ref={comp}>
        <div id="intro-slider"
          className="h-[calc(100vh-52px)] p-10 bg-gray-800 text-white uppercase absolute top-0 left-0 font-logo z-10 w-full flex flex-col gap-10 items-center justify-center tracking-tight"
        >
          <h1 className="text-9xl" id="title-1">
            Welcome
          </h1>
          <h1 className="text-9xl" id="title-2">
            to
          </h1>
          <h1 className="text-9xl" id="title-3">
            LogiPlacement
          </h1>
        </div>


        {/*Main Page*/}
        <div className="w-full font-logo h-[calc(100vh-52px)] flex border border-red-500"
          id='welcome'>
          <div className="w-[60%] h-[calc(100vh-52px)] border flex flex-col p-10">
            <div className="relative mt-10">
              <p id='one' className="text-white text-[370%] font-semibold after:animate-width relative after:absolute after:right-0 after:h-full after:w-0 after:bg-black border">Welcome to our Website</p>
              <p id='two' className="absolute text-white text-[370%] font-semibold top-0 left-0 after:animate-width after:absolute after:right-0 after:h-full after:w-0 after:bg-black">Analyze your resume</p>
              <p id='three' className="absolute text-white text-[370%] font-semibold top-0 left-0 after:animate-width after:absolute after:right-0 after:h-full after:w-0 after:bg-black">predict your placement</p>
            </div>
            <div className="tag-description mt-20">
              <p className="text-white text-lg mt-10">orem ipsum dolor sit amet consectetur adipisicing elit. Ab, labore.</p>
              <p className="text-white text-lg mt-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa aspernatur earum possimus molestias.</p>
              <p className="text-white text-lg mt-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
          <div className="w-[40%] border h-[calc(100vh-52px)] border-blue-500">
            <div className="resume-images"></div>
            <div className="resume-images"></div>
            <div className="resume-images"></div>
            <div className="resume-images"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home