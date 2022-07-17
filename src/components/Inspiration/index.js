import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import "../../styles/line.css"

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
        <div className="py-20 max-w-5xl mx-auto">
          <div>
            <div className="mb-10">
              <div>
                <div>
                  <h2 className="white font-brandon">My inspiration</h2>
                </div>
              </div>
              {/*component's description */}
              <div className="px-10 md:px-20 font-brandon md:text-xl text-white">
                <div className="flex justify-center">
                  <div>
                    <p className="text-center text-base mb-8 lg:text-xl w-80 md:w-[640px] lg:w-[960px]">
                      Industrial revolution has never been rapid. No industry is
                      immune. Advanced technology adoption will be essential for
                      upcoming competition of a new order. I share a few
                      inspiring articles that depict the future industry.
                    </p>
                    <p className="text-center text-base font-semibold mb-2 lg:text-xl w-80 md:w-[700px] lg:w-[1000px]">
                      My articles are coming up soon.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*Card left side here */}
            <div className="flex justify-center items-center flex-col md:flex-row">
              <div className="items-center">
                <div>
                  {/*Card-1 */}
                  <Link
                    href="https://medium.com/the-coinbase-blog/a-simple-guide-to-the-web3-stack-785240e557f0"
                    className="w-[360px] h-44 md:w-[310px] md:h-36 lg:w-[496px] lg:h-60 flex justify-center mb-8 lg:mb-10 hover:scale-110 duration-200 delay-200"
                  >
                    <StaticImage
                      src="https://miro.medium.com/max/1400/1*lARFTT3HlyZO4QDJB9b5lQ.png"
                      alt="article1"
                      className="w-11/12 bg-contain bg-center"
                    />
                  </Link>

                  {/*Card-2 */}
                  <Link
                    href="https://itcraftapps.com/blog/why-is-machine-learning-a-growing-trend/"
                    className="w-[360px] h-44 md:w-[310px] md:h-36 lg:w-[496px] lg:h-60 flex justify-center mb-8 lg:mb-10 hover:scale-110 duration-200 delay-200"
                  >
                    <StaticImage
                      src="https://itcraftapps.com/wp-content/uploads/2020/04/Machine-learning.jpg.webp"
                      alt="Dorsey"
                      className="w-11/12  bg-contain bg-center"
                    />
                  </Link>
                </div>
              </div>

              {/*Card right side here */}
              {/*Card-3 */}
              <div className="items-center">
                <Link
                  href="https://www.matellio.com/blog/7-ways-ai-and-ml-are-transforming-fintech-industry/"
                  className="w-[360px] h-44 md:w-[310px] md:h-36 lg:w-[496px] lg:h-60 flex justify-center mb-8 lg:mb-10 hover:scale-110 duration-200 delay-200"
                >
                  <StaticImage
                    src="https://www.matellio.com/blog/wp-content/uploads/2021/04/5-Ways-AI-and-ML-are-transforming-Fintech-Industry-2-1.jpg"
                    alt="article-2"
                    className="w-11/12  bg-contain bg-center"
                  />
                </Link>
                {/*Card-4 */}
                <Link
                  href="https://www.linkedin.com/pulse/what-web3-why-does-matter-ritesh-chopra/"
                  className="w-[360px] h-44 md:w-[310px] md:h-36 lg:w-[496px] lg:h-60 flex justify-center mb-8 lg:mb-10 hover:scale-110 duration-200 delay-200"
                >
                  <StaticImage
                    src="https://media-exp1.licdn.com/dms/image/C5612AQHdM590nM5SxA/article-cover_image-shrink_720_1280/0/1639338049895?e=1660176000&v=beta&t=bLke3RpFvI5k8zYnr_58dQtAMb3ytj3ZzsS40OHtL90"
                    alt="Dorsey"
                    className="w-11/12  bg-contain bg-center"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </div>
  )
}

export default Inspiration
