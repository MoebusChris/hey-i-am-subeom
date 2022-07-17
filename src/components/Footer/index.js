import React from "react"
import { Link } from "gatsby"
import linkedin from "../../images/Linkedin.webp"
import facebook from "../../images/Facebook-logo.webp"
import "../../styles/line.css"

const Footer = () => {
  return (
    <footer className="py-20 max-w-5xl mx-auto">
      <div className="mb-20">
        {/*title section*/}
        <div>
          <div>
            <h2 className="black font-brandon">Let's connected</h2>
          </div>
        </div>
        {/*description section*/}
        <div className="font-brandon mb-7">
          <div className="flex justify-center mb-6 px-10 md:px-20 font-brandon">
            <h3 className="text-center text-xl mb-8  md:text-2xl lg:text-3xl w-80 md:w-[640px] lg:w-[960px]">
              I come from the Bay, and I am living out in So-cal. But, I am
              always ready to jump in a new journey.
            </h3>
          </div>
          {/*sub-description section*/}
          <div className="flex justify-center">
            <p className="text-center text-base text-slate-500 mb-8 lg:text-xl w-80 md:w-[640px] lg:w-[960px]">
              A great way to reach out to me is to follow me on{" "}
              <a href="#" className="text-blue-500">
                Facebook
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-500">
                LinkedIn
              </a>
              .
            </p>
          </div>
        </div>
        {/*icon section*/}
        <div className="flex justify-center">
          <Link href="#" className="w-24 mx-2">
            <img src={facebook} alt="facebook logo" />
          </Link>
          <Link href="#" className="w-24 mx-2">
            <img src={linkedin} alt="linkedin logo" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
