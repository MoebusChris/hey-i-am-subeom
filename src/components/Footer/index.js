import React from "react"
import { Link } from "gatsby"
import linkedin from "../../images/Linkedin.webp"
import facebook from "../../images/Facebook-logo.webp"
import "../../styles/line.css"

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto">
      <div>
        <div>
          <h2 className="black font-brandon">Let's connected</h2>
        </div>
      </div>
      <div className="font-brandon mb-7">
        <div className="flex justify-center mb-6">
          <h3 className="text-xl md:text-2xl">
            I'm a nomadic Korean, moving from place to place, looking for
            interesting and exciting stuff.
          </h3>
        </div>
        <div className="flex justify-center">
          <p>
            A great way to reach out to me is to follow me on{" "}
            <a href="#" className="text-blue-500">
              Facebook
            </a>{" "}
            and
            <a href="#" className="text-blue-500">
              LinkedIn
            </a>
            .
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Link href="#" className="w-24 mx-2">
          <img src={facebook} alt="facebook logo" />
        </Link>
        <Link href="#" className="w-24 mx-2">
          <img src={linkedin} alt="linkedin logo" />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
