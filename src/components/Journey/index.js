import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Journey = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto">
      <div>
        <div>
          <h2 className="text-center font-brandon mb-8 text-2xl md:text-4xl font-bold">
            My journey
          </h2>
        </div>
        <div class="max-w-md mx-auto bg-white overflow-hidden md:max-w-4xl">
          <div class="md:flex">
            <div class="flex justify-center p-8 md:shrink-0">
              <StaticImage
                src="../../images/JourneyPhoto/0.jpg"
                alt="Trinion"
                className="w-96 md:w-44 rounded-3xl self-center"
              />
            </div>
            <div class="p-8">
              <a
                href="#"
                class="capitalize tracking-wide text-2xl text-blue-700 font-normal font-brandon  hover:underline"
              >
                trinion america, inc.
              </a>
              <div class="block mt-2 text-base leading-tight font-medium text-teal-700 font-roboto break-normal">
                Financial Accounting Specialist,
                <p className="italic">Since February 2020</p>
              </div>
              <div class="block mt-2 text-base leading-tight font-medium text-slate-600 font-roboto">
                San Diego, CA
              </div>
              <p class="mt-2 text-slate-500 font-roboto">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
                unde numquam ipsa iure, recusandae necessitatibus totam quas,
                reprehenderit accusamus harum natus quod, quis facere earum
                deleniti hic sed modi officia! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Cupiditate pariatur dolores labore
                expedita molestias, culpa, alias mollitia corrupti obcaecati
                quae earum ad. Omnis cum facere laborum nulla voluptates
                voluptatem fuga. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Soluta, ipsam nobis, minus sapiente vero fugit
                dicta iure harum quas in ipsum amet eaque atque non,
                consequuntur tempora accusamus. Dolorem, nesciunt? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quaerat quia
                repudiandae, reiciendis animi vero aperiam est vel cumque nobis
                autem optio aliquam deleniti possimus maxime, consequatur
                incidunt eum. Minus, explicabo?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Journey
