import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          hello
          <button className="btn btn-block btn-danger text-uppercase">
            hello world
          </button>
        </div>
        <div className="col-lg-4">hello</div>
        <div className="col-lg-4">hello</div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
