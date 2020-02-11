import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo/Seo"
import spectre from "../images/front_spectre.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="d-flex justify-content-center mt-5">
      <div className="card description-container">
        <div className="text-center mb-3">
          <img src={spectre} alt="Spectre Keyboard" />
        </div>
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
