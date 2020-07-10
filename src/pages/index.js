import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "ModoCoder"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Inicio"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>
          Hola internautas{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Bienvenidos a mi blog.</p>
        <p>
          Este es un blog dedicado a brindar una mano a todos aquellos que están dando sus primeros pasos en el desarrollo web al mismo tiempo que muestro mi propio recorrido por este fascinante mundo del desarrollo.
        </p>
        <p>Comencemos</p>
        <Link to="/blog/">
          <Button marginTop="35px">Ir al Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
