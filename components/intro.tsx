import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col flex items-center md:justify-center mt-16 mb-16 md:mb-12">

      <div className="grid place-items-center grid-cols-1 md:grid-cols-1 md:gap-x-16 mb-12 w-1/2">
        <h1 className="justify-self-start  text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
          Greetings!
          <br />I'm Angie Varela
        </h1>
        <p className="text-lg leading-relaxed mb-4">
          UI/UX Designer passionate about crafting comfortable and adaptable products integrating emotions into digital experiences. I've foundation in development and programming to ensure optimal user interfaces. being user-friendly designs, let's to create!.</p>
      </div>

      {/*  <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A statically generated blog example using{' '}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          Next.js
        </a>{' '}
        and {CMS_NAME}.
      </h4> */}
    </section>
  )
}

export default Intro
