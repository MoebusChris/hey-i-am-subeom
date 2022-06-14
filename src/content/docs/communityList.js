import React, { useState } from "react"

const communityList = ({ myCommunity }) => {
  const [lists] = useState([
    {
      title: "gitcoin",
      description:
        "The internet has unlocked unprecedented opportunities for collaboration and creation. Now web3 technology like open",
      url: "https://gitcoin.co/",
    },
    {
      title: "Dream Dao",
      description: "Lorem",
      url: "https://www.dreamdao.xyz/",
    },
    {
      title: "Bogleheads",
      description: "Lorem",
      url: "https://www.bogleheads.org/",
    },
    {
      title: "Code Project",
      description: "Lorem",
      url: "https://www.codeproject.com/",
    },
    {
      title: "Dev Community",
      description: "Lorem",
      url: "https://dev.to/",
    },
    {
      title: "Developer Dao",
      description: "Lorem",
      url: "https://forum.developerdao.com/",
    },
    {
      title: "Forem",
      description: "Lorem",
      url: "https://forem.dev/",
    },
    {
      title: "Responsible Investor",
      description: "Lorem",
      url: "https://www.responsible-investor.com/",
    },
    {
      title: "Peta",
      description: "Lorem",
      url: "https://www.peta.org/",
    },
  ])

  return <div>communityList</div>
}

export default communityList
