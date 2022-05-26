import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import journeyPhoto from "../../images/JourneyPhoto/0.jpg"

const Journey = () => {
  return (
    <div className="font-roboto ">
      <div class="max-w-md mx-auto bg-white overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:shrink-0">
            <div>
              <StaticImage
                src="../../images/JourneyPhoto/0.jpg"
                className="w-32"
              />
            </div>
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Case study
            </div>
            <a
              href="#"
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Finding customers for your new business
            </a>
            <p class="mt-2 text-slate-500">
              Getting a new business off the ground is a lot of hard work. Here
              are five ideas you can use to find your first customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Journey
