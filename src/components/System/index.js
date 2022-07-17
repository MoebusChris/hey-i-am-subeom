import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import "../../styles/line.css"

const System = ({ className }) => {
  const { systemBgImage } = useStaticQuery(
    graphql`
      {
        systemBgImage: file(relativePath: { eq: "system-bg.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    `
  )
  const image = getImage(systemBgImage)
  const bgImage = convertToBgImage(image)

  return (
    <BackgroundImage
      Tag="section"
      //spread bgImage
      {...bgImage}
      preserveStackingContext
      className="bg-fixed"
    >
      <div className="py-20 max-w-7xl mx-auto">
        <div className="text-white">
          <div>
            <div>
              <h2 className="white font-brandon">My vision</h2>
            </div>
          </div>
          <div>
            <ui className="flex flex-col space-y-7 text-center list-none font-bebas text-xl md:text-2xl font-semibold uppercase">
              <li>Better than yourself yesterday</li>
              <li>Learn everyday</li>
              <li>Be detail-oriented</li>
              <li>Gain tools as many as you can</li>
              <li>Work on a team as a whole</li>
              <li>Prioritize your customer needs</li>
              <li>Treat everyone kindly</li>
              <li>Light up in the darkest night</li>
            </ui>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default System
