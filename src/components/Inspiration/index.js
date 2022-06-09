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
        <div className="py-20 max-w-7xl mx-auto">
          <div>
            <div className="mb-10">
              <div>
                <div>
                  <h2 className="white font-brandon">My inspiration</h2>
                </div>
              </div>
              {/*component's description */}
              <div className="font-brandon md:text-xl text-white">
                <p className="text-center mb-2">
                  I share the ideas and insights that
                </p>
                <p className="text-center mb-2">wfwfwfwf</p>
              </div>
            </div>
            {/*Card left side here */}
            <div className="flex justify-center items-center flex-col md:flex-row">
              <div className="items-center">
                <div>
                  {/*Card-1 */}
                  <Link
                    href="https://www.linkedin.com/pulse/jordan-c-peterson-future-work-dr-richard-claydon/?trk=p_public_post_promoted_post"
                    className="w-[360px] h-44 md:w-[424px] md:h-52 lg:w-[496px] lg:h-60 flex justify-center mb-8 lg:mb-10 hover:scale-110 duration-200 delay-200"
                  >
                    <StaticImage
                      src="https://media-exp1.licdn.com/dms/image/C5112AQGK2-siys0bUw/article-cover_image-shrink_600_2000/0/1521251244772?e=1660176000&v=beta&t=g5gOtGc-cSf8WsmDtwalHWEr3_46eREm7t30MbIzCx8"
                      alt="Peterson"
                      className="w-11/12 bg-contain bg-center"
                    />
                  </Link>

                  {/*Card-2 */}
                  <Link
                    href="https://www.mediumenergy.io/p/part-25-the-ultimate-promise-of-the?s=r"
                    className="w-[360px] h-44 md:w-[424px] md:h-52 lg:w-[496px] lg:h-60 flex justify-center mb-8 lg:mb-10 hover:scale-110 duration-200 delay-200"
                  >
                    <StaticImage
                      src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F5f0f9bde-78ee-4d68-ad3e-587596cfa049_2048x1365.webp"
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
                  href="https://www.linkedin.com/pulse/10-lessons-from-howard-marks-oaktree-capital-thomas-chua/?trk=articles_directory"
                  className="w-[360px] h-44 md:w-[424px] md:h-52 lg:w-[496px] lg:h-60 flex justify-center mb-8 lg:mb-10 hover:scale-110 duration-200 delay-200"
                >
                  <StaticImage
                    src="https://media-exp1.licdn.com/dms/image/C5612AQFaJBM_VTgnUA/article-cover_image-shrink_720_1280/0/1642209920066?e=1660176000&v=beta&t=YBjy-SiM6-71P8W-8znzWgWg3pZL8pXQEtiKV4Ipcec"
                    alt="Peterson"
                    className="w-11/12  bg-contain bg-center"
                  />
                </Link>
                {/*Card-4 */}
                <Link
                  href="https://www.linkedin.com/pulse/what-web3-why-does-matter-ritesh-chopra/"
                  className="w-[360px] h-44 md:w-[424px] md:h-52 lg:w-[496px] lg:h-60 flex justify-center mb-8 lg:mb-10 hover:scale-110 duration-200 delay-200"
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
