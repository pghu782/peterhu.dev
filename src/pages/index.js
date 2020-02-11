import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/Seo/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="d-flex justify-content-center mt-5">
      <div className="card description-container">
        <h4 className="mb-4">Hey there!</h4>
        <div className="mb-4">
          I'm a full stack developer currently working in the Edmonton, Alberta
          area. Currently developing and dreaming CRUD projects. Feel free to
          hit me up through email or on{" "}
          <a
            href="https://www.linkedin.com/in/peter-hu-p-eng-57450071/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>LinkedIn</i>
          </a>
          .
        </div>
        <div className="mb-3">
          <Link to="/projects/">
            <h5>
              <i>My Code Garage</i>
            </h5>
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
