import {
  Blog,
  Companies,
  Hero,
  Portfolio,
  SideProjects,
  Photos,
  Footer,
  MenuButton
} from '@/components'

// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";
// const geistSans = Geist({
//  variable: "--font-geist-sans",
//  subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//  variable: "--font-geist-mono",
//  subsets: ["latin"],
// });

export default function Home() {
  return (
    <>
      <MenuButton />
      <div className='flex flex-col gap-[138px] sm:px-[30px] md:px-[30px] container max-w-5xl mx-auto bg-white dark:bg-black text-black dark:text-white'>
        <Hero />
        <SideProjects />
        <Companies />
        <Portfolio />
        <Blog />
        <Photos />
        <Footer />
      </div>
    </>
  )
}
