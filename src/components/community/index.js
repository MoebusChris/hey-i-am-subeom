import React from "react"

const Community = () => {
  return (
    <div className="py-20 max-w-5xl mx-auto">
      <div>
        <div>
          <h2 className="text-center font-brandon mb-8 text-2xl md:text-4xl font-bold">
            My community
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/*Card-1 */}
        <div className="flex justify-center">
          <div className="max-w-xs p-8 border border-slate-400">
            <h4 className="text-2xl font-semibold font-brandon mb-2">
              Free Coding Camp
            </h4>
            <p className="font-roboto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem a
              culpa natus veritatis, facilis dolor quasi corporis tempora esse
            </p>
          </div>
        </div>
        {/*Card-2 */}
        <div className="flex justify-center">
          <div className="max-w-xs p-8 border border-slate-400">
            <div>
              <h4 className="text-2xl font-semibold font-brandon mb-2">
                Free Coding Camp
              </h4>
              <p className="font-roboto">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem a
                culpa natus veritatis, facilis dolor quasi corporis tempora esse
              </p>
            </div>
          </div>
        </div>
        {/*Card-3 */}
        <div className="flex justify-center">
          <div className="max-w-xs p-8 border border-slate-400">
            <div>
              <h4 className="text-2xl font-semibold font-brandon mb-2">
                Free Coding Camp
              </h4>
              <p className="font-roboto">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem a
                culpa natus veritatis, facilis dolor quasi corporis tempora esse
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community
