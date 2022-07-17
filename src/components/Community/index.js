import React from "react"
import "../../styles/line.css"

const Community = () => {
  return (
    <div className="py-20 max-w-5xl mx-auto">
      <div className="mb-5">
        <div className="text-center">
          <div>
            <h2 className="black font-brandon">My community</h2>
          </div>
          <div className="px-10 font-brandon md:text-xl">
            <div className="flex justify-center">
              <p className="text-center text-base mb-8 lg:text-xl w-80 md:w-[640px]">
                It's important to interact with experts to learn new things. I
                share a few online communities where I often visit to follow new
                stuff.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-5">
        {/*Card-1 starts here */}
        <div className="flex justify-center">
          <div className="max-w-xs p-6 border border-slate-400">
            <h4 className="text-2xl font-semibold font-brandon mb-2">
              Gitcoin🦾
            </h4>
            <p className="font-roboto font-thin">
              <a href="https://gitcoin.co/" className="border-b border-black">
                Gitcoin
              </a>
              &nbsp;is a platform of builders, creators, and developers to
              collaborate and monetize their skills.
            </p>
          </div>
        </div>
        {/*Card-1 ends here */}
        {/*Card-2 starts here */}
        <div className="flex justify-center">
          <div className="max-w-xs p-6 border border-slate-400">
            <div>
              <h4 className="text-2xl font-semibold font-brandon mb-2">
                freeCodeCamp🏕️
              </h4>
              <p className="font-roboto font-thin">
                <a
                  href="https://www.freecodecamp.org/"
                  className="border-b border-black"
                >
                  FreeCodeCamp
                </a>
                &nbsp;is a non-profit organization that consists of useful
                information for self-learner.
              </p>
            </div>
          </div>
        </div>
        {/*Card-2 ends here*/}
        {/*Card-3 ends here */}
        <div className="flex justify-center">
          <div className="max-w-xs p-6 border border-slate-400">
            <div>
              <h4 className="text-2xl font-semibold font-brandon mb-2">
                Moralis🧙
              </h4>
              <p className="font-roboto font-thin">
                <a
                  href="https://forum.moralis.io/"
                  className="border-b border-black"
                >
                  Moralis
                </a>
                &nbsp;is a community forum for crypto developers to share
                information about dApps.
              </p>
            </div>
          </div>
        </div>
        {/*Card-3 ends here */}
        {/*Card-4 starts here */}
        <div className="flex justify-center">
          <div className="max-w-xs p-6 border border-slate-400">
            <h4 className="text-2xl font-semibold font-brandon mb-2">
              DEV Community🔥
            </h4>
            <p className="font-roboto font-thin">
              <a href="https://dev.to/" className="border-b border-black">
                Dev Community
              </a>
              &nbsp;is a community forum for crypto developers to share
              information about dApps.
            </p>
          </div>
        </div>
        {/*Card-4 ends here */}
        {/*Card-5 starts here */}
        <div className="flex justify-center">
          <div className="max-w-xs p-6 border border-slate-400">
            <h4 className="text-2xl font-semibold font-brandon mb-2">
              Hashnode🏄
            </h4>
            <p className="font-roboto font-thin">
              <a href="https://hashnode.com/" className="border-b border-black">
                Hashnode
              </a>
              &nbsp;is a blogging platform that you can share your ideas and
              thoughts with people in tech, developers, and engineers.
            </p>
          </div>
        </div>
        {/*Card-5 ends here */}
        {/*Card-6 starts here */}
        <div className="flex justify-center">
          <div className="max-w-xs p-6 border border-slate-400">
            <h4 className="text-2xl font-semibold font-brandon mb-2">
              Coding Horror🧟
            </h4>
            <p className="font-roboto font-thin">
              <a
                href="https://blog.codinghorror.com/"
                className="border-b border-black"
              >
                Coding Horror
              </a>
              &nbsp;is a great place to read useful things for developers,
              written by Jeff Atwood, co-founder of Stack Overflow.
            </p>
          </div>
        </div>
        {/*Card-6 ends here */}
        {/*Card-7 starts here */}
        <div className="flex justify-center">
          <div className="max-w-xs p-6 border border-slate-400">
            <h4 className="text-2xl font-semibold font-brandon mb-2">
              Hackernoon🔮
            </h4>
            <p className="font-roboto font-thin">
              <a
                href="https://hackernoon.com/"
                className="border-b border-black"
              >
                Hackernoon
              </a>
              &nbsp;is a platform that delivers an independant tech blog witten
              by tech professionals.
            </p>
          </div>
        </div>
        {/*Card-7 ends here */}
        {/*Card-8 starts here */}
        <div className="flex justify-center">
          <div className="max-w-xs p-6 border border-slate-400">
            <h4 className="text-2xl font-semibold font-brandon mb-2">
              DZone📰
            </h4>
            <p className="font-roboto font-thin">
              <a href="https://dzone.com/" className="border-b border-black">
                DZone
              </a>
              &nbsp;is one of the largest online communities that provides free
              tutorial, reviews, and articles.
            </p>
          </div>
        </div>
        {/*Card-8 ends here */}
        {/*Card-9 starts here */}
        <div className="flex justify-center">
          <div className="max-w-xs p-6 border border-slate-400">
            <h4 className="text-2xl font-semibold font-brandon mb-2">
              Flavio&nbsp;Copes🦸
            </h4>
            <p className="font-roboto font-thin">
              <a
                href="https://flaviocopes.com/"
                className="border-b border-black"
              >
                Flavio Copes
              </a>
              &nbsp;is an awesome italian computer engineer, who published free
              handbooks for several programming languages. Check his website!
            </p>
          </div>
        </div>
        {/*Card-9 ends here */}
      </div>
    </div>
  )
}

export default Community
