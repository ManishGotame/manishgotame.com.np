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
