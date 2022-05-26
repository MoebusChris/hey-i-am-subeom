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
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  const image = getImage(placeholderImage)
  const bgImage = convertToBgImage(image)

  return (
    <header className="py-4">
      <Nav />

      <BackgroundImage
        Tag="section"
        //spread bgImage
        {...bgImage}
        preserveStackingContext
        className="hero"
      >
        <div>
          <GatsbyImage image={image} alt={"hero-image.jpg"} />
        </div>
        <div className="hero-content max-w-md space-y-4">
          <div className="flex flex-col justify-center text-center">
            <h4 className="text-xl md:text-2xl font-brandon italic py-4">
              Hello, I'm
            </h4>
            <h1 className="text-4xl md:text-5xl font-brandon uppercase font-semibold">
              Subeom Jeong
            </h1>
          </div>
        </div>
      </BackgroundImage>
    </header>
  )
}

export default Header
