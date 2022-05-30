import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

const Inspiration = ({ className }) => {
  const { inspirationBgImage } = useStaticQuery(
    graphql`
      {
        inspirationBgImage: file(relativePath: { eq: "inspiration-bg.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: NONE, formats: AUTO)
            fixed(quality: 90) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    `
  )
  const image = getImage(inspirationBgImage)
  const bgImage = convertToBgImage(image)

  return (
    <div>
      <BackgroundImage
        Tag="section"
        //spread bgImage
        {...bgImage}
        preserveStackingContext
        className="bg-fixed"
      >
        <div className="py-20 max-w-7xl mx-auto">
          <div>
            <div>
              <h2 className="text-center font-brandon mb-8 text-2xl md:text-4xl font-bold">
                My inspiration
              </h2>
            </div>
            {/*Card left side here */}
            <div className="flex justify-center items-center flex-col md:flex-row">
              <div className="items-center">
                <div>
                  {/*Card-1 */}
                  <div className=" w-[360px] h-44 md:w-[424px] md:h-52 lg:w-[496px] lg:h-60 flex justify-center mb-8 lg:mb-10 hover:scale-110 duration-200 delay-200">
                    <StaticImage
                      src="../../images/Peterson.jpeg"
                      alt="Peterson"
                      className="w-11/12  bg-contain bg-center"
                    />
                  </div>
                  {/*Card-2 */}
                  <div className="w-[360px] h-44 md:w-[424px] md:h-52 lg:w-[496px] lg:h-60 flex justify-center mb-8 lg:mb-10 hover:scale-110 duration-200 delay-200">
                    <StaticImage
                      src="../../images/Dorsey.webp"
                      alt="Dorsey"
                      className="w-11/12  bg-contain bg-center"
                    />
                  </div>
                </div>
              </div>

              {/*Card right side here */}
              {/*Card-3 */}
              <div className="">
                <div className="w-[360px] h-44 md:w-[424px] md:h-52 lg:w-[496px] lg:h-60 flex justify-center mb-8 lg:mb-10 hover:scale-110 duration-200 delay-200">
                  <StaticImage
                    src="../../images/Howard.jpeg"
                    alt="Peterson"
                    className="w-11/12  bg-contain bg-center"
                  />
                </div>
                {/*Card-4 */}
                <div className="w-[360px] h-44 md:w-[424px] md:h-52 lg:w-[496px] lg:h-60 flex justify-center mb-8 lg:mb-10 hover:scale-110 duration-200 delay-200">
                  <StaticImage
                    src="../../images/Dorsey.webp"
                    alt="Dorsey"
                    className="w-11/12  bg-contain bg-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </div>
  )
}

export default Inspiration
