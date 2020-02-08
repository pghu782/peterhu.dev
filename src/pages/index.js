import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div class="d-flex justify-content-center mt-5">
      <div class="description-container">
        <h4 class="mb-4">Full Stack Developer. Investor. History Lover.</h4>
        <div class="mb-4">I currently work at AMA.</div>

        <div class="mb-4">
          <h5>Skills</h5>
          <div>Angular C# Java</div>
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
