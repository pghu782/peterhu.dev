import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="d-flex justify-content-center mt-5">
      <div className="card description-container">
        <h4 className="mb-4">Hey there!</h4>
        <div className="mb-5">
          I'm a full stack developer currently working in the Edmonton, Alberta
          area. Currently building and dreaming CRUD projects. Feel free to hit
          me up through email or on LinkedIn.
        </div>
        <div className="mb-4">
          <a
            href="https://www.linkedin.com/in/peter-hu-p-eng-57450071/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h5>What do I do?</h5>
          </a>
        </div>
        <div className="mb-4">
          <Link to="/projects/">
            <h5>Things I've Been Working On</h5>
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
