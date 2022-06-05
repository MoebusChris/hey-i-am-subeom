import React from "react"
import Community from "../components/Community"
import Inspiration from "../components/Inspiration"
import Journey from "../components/Journey"
import Layout from "../components/Layout"
import System from "../components/System"
import SEO from "./seo"

export default function Home() {
  return (
    <Layout>
      <SEO />
      <Journey />
      <Inspiration />
      <Community />
      <System />
    </Layout>
  )
}
