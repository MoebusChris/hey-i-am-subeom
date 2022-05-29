import React from "react"
import Inspiration from "../components/Inspiration"
import Journey from "../components/journey"
import Layout from "../components/layout"
import System from "../components/System"

export default function Home() {
  return (
    <Layout>
      <Journey />
      <Inspiration />
      <System />
    </Layout>
  )
}
