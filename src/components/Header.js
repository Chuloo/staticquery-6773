import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <header>
        <h1>{JSON.stringify(data)}</h1>
      </header>
    )}
  />
)

export default Header