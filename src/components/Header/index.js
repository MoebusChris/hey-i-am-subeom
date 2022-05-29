import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

import Nav from "../Nav"
import { Container } from "postcss"
import styled from "daisyui/dist/styled"

const Header = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      {
        placeholderImage: file(relativePath: { eq: "hero-image.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: NONE, formats: AUTO)
            fixed(quality: 90, height: 1200) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    `
  )
  const image = getImage(placeholderImage)
  const bgImage = convertToBgImage(image)

  return (
    <header>
      <Nav />
      <div>
        <BackgroundImage
          Tag="section"
          //spread bgImage
          {...bgImage}
          preserveStackingContext
          className="hero min-h-screen"
        >
          <div className="hero-content max-w-lg space-y-4">
            <div className="flex flex-col justify-center text-center">
              <h4 className="text-xl md:text-2xl lg:text-3xl font-brandon italic py-4">
                Hello, I'm
              </h4>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-brandon uppercase font-semibold">
                Subeom Jeong
              </h1>
            </div>
          </div>
        </BackgroundImage>
      </div>
    </header>
  )
}

export default Header
