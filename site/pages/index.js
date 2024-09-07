import Link from 'next/link'
import MyHead from '../components/MyHead'

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
              <div style={{
                '--size': '200px',
                '--duration': '12s',
                '--anchor': '90%',
                '--border-width': '1.5px',
                '--color-from': '#ffbd7a',
                '--color-to': '#fe8bbb',
                '--delay': '-11s'
              }} className="absolute inset-[0] rounded-[inherit] [border:1.5px_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] after:absolute after:aspect-square after:w-[200px] after:animate-border-beam after:[animation-delay:-11s] after:[background:linear-gradient(to_left,#9500ff,#fe8bbb,transparent)] after:[offset-anchor:90%_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(200px))]"/>
              <img src="/images/background-desktop.jpg" alt="Hero Image" className="relative w-full h-full rounded-[inherit] border-white/10 object-contain" />
            </div>
          </div>
        </section>
        <section>
          
        </section>
      </main>
    </>
  )
}
