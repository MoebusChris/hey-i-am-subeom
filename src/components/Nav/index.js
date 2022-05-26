import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import logo from "../../images/logo.png"

const Nav = () => {
  return (
    <nav className="flex justify-between p-5 mx-auto  font-brandon">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-36 md:w-44 object-contain cursor-pointer"
            src={logo}
            alt="logo"
          />
        </Link>

        <div className="hidden md:inline-flex items-center space-x-5">
          <h3>My Journey</h3>
          <h3>My Inspiration</h3>
          <h3>My Thought</h3>
          <h3>My System</h3>
        </div>
      </div>

      <div>
        <h3 className="text-white bg-blue-500 px-4 py-1 rounded-full">
          Follow
        </h3>
      </div>
    </nav>
  )
}

export default Nav
