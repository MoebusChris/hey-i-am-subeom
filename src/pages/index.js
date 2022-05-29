import React from "react"
import Community from "../components/community"
import Inspiration from "../components/Inspiration"
import Journey from "../components/journey"
import Layout from "../components/layout"
import System from "../components/System"

export default function Home() {
  return (
    <Layout>
      <Journey />
      <Inspiration />
      <Community />
      <System />
    </Layout>
  )
}
