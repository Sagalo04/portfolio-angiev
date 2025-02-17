import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
             Keep in touch 
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="mailto:angievarela1998@gmail.com"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Contact me 
            </a>
            <a
              href={`https://www.linkedin.com/in/angievarela-uiuxdesigner/`}
              target='_blank'
              className="mx-3 font-bold hover:underline"
            >
              Find me in LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
