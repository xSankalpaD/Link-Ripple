import Link from 'next/link'
import MyHead from '../components/MyHead'
import Marquee from '@/components/ui/marquee'
import { Shield, File, Globe, Rss, HeartHandshake, ChartNoAxesColumnIncreasing } from 'lucide-react';
import { motion } from 'framer-motion'

const marqueeRows = [
  {
    duration: "[--duration:10s]",
    delay: "delay-[200ms]",
  },
  {
    duration: "[--duration:25s]",
    delay: "",
  },
  {
    duration: "[--duration:20s]",
    delay: "delay-[200ms]",
  },
  {
    duration: "[--duration:30s]",
    delay: "",
  },
  {
    duration: "[--duration:20s]",
    delay: "delay-[200ms]",
  },
  {
    duration: "[--duration:30s]",
    delay: "",
  },
]

const marqueeIcons = [
  {
    element: <Shield color="#ffffff" className="w-full h-full" />,
    gradient: "from-yellow-400 via-orange-500 to-yellow-400"
  },
  {
    element: <File color="#ffffff" className="w-full h-full" />,
    gradient: "from-green-500 via-teal-500 to-emerald-600"
  },
  {
    element: <Rss color="#ffffff" className="w-full h-full" />,
    gradient: "from-orange-600 via-rose-600 to-violet-600"
  },
  {
    element: <HeartHandshake color="#ffffff" className="w-full h-full" />,
    gradient: "from-orange-600 via-rose-600 to-violet-600"
  },
  {
    element: <Globe color="#ffffff" className="w-full h-full" />,
    gradient: "from-cyan-500 via-blue-500 to-indigo-500"
  },
  {
    element: <ChartNoAxesColumnIncreasing color="#ffffff" className="w-full h-full" />,
    gradient: "from-gray-600 via-gray-500 to-gray-400"
  },
]

export default function Home() {
  return (
    <>
      <MyHead
        title="Link Ripple"
        description="Welcome to TypeFinance, where we help you to choose the best financing for you"
        image="https://typefinance.com/typefinance-dp.jpg"
        url="https://typefinance.com"
      />

      <main className="w-full h-full flex flex-col justify-center items-center bg-black">
        <section className="flex flex-col justify-center items-center m-32 max-w-[80rem]">
          <h1 className="pt-20 text-center bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            One link<br className="hidden md:block" />to rule them all.
          </h1>
          <p className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">Share everything in one place and grow your digital footprint effortlessly.</p>
          <Link className='rounded-lg inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#ffffff] shadow hover:bg-[#ebebeb] h-9 px-4 py-2 translate-y-[-1rem] animate-fade-in gap-1 rounded-lgtext-black opacity-0 ease-in-out [--animation-delay:600ms]' href="/apply">Sign up now!</Link>
          <div className="relative mt-[8rem] animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,black_30%,transparent)]">
            <div className="rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,#9500ff,#9500ff,transparent_40%)] before:animate-image-glow">
              <div className="absolute inset-[0] rounded-[inherit] [border:1.5px_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] after:absolute after:aspect-square after:w-[200px] after:animate-border-beam after:[animation-delay:-11s] after:[background:linear-gradient(to_left,#9500ff,#fe8bbb,transparent)] after:[offset-anchor:90%_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(200px))]" />
              <img src="/images/background-desktop.jpg" alt="Hero Image" className="relative w-full h-full rounded-[inherit] border-white/10 object-contain" />
            </div>
          </div>
        </section>
        <section>
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            {marqueeRows.map((row, index) => (
              <Marquee key={index} reverse repeat={10} className={`${row.duration} ${row.delay}`}>
                {marqueeIcons.map((icon, index) => (
                  <div key={index} className="flex shrink-0 justify-around [gap:var(--gap)] flex-row">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{
                        opacity: 1,
                        transition: { duration: 2, delay: Math.random() * 2 }
                      }}
                      className="relative size-20 overflow-hidden rounded-2xl border p-4 transform-gpu bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
                    >
                      {icon.element}
                      <div className={`pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r ${icon.gradient} opacity-70 blur-[20px] filter`}></div>
                    </motion.div>
                  </div>
                ))}
              </Marquee>
            ))}
            <div className="absolute z-10">
              <div className="mx-auto w-[6rem] h-[6rem] rounded-[2rem] border p-3 shadow-2xl backdrop-blur-md bg-black/10 lg:size-32">
                {marqueeIcons[3].element}
              </div>
              <div className="z-10 mt-4 flex flex-col items-center text-center text-primary">
                <h1 className="text-3xl font-bold text-white lg:text-4xl">Stop wasting time with your links.</h1>
                <p className="mt-2 text-white">Get started today. No credit card required.</p>
                <Link className="text-white inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 group mt-4 rounded-[2rem] px-6" href="/apply">
                  Get Started
                </Link>
              </div>
              <div className="absolute inset-0 -z-10 rounded-full bg-black opacity-40 blur-xl">
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-black to-70%"></div>
          </div>
        </section>
        <section>
          <div className="flex flex-row items-center justify-center mb-8">
            <img src="/images/logo.png"/>
          </div>
          <div>
            <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400 mb-10">
              Copyright © {(new Date()).getFullYear()} Link Ripple. All Rights Reserved.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
