import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>We are Epic Movement. </h1>
    <p>Our vision is to see movements everywhere so that everyone knows someone who truly follows Christ.</p>
    <ul>
      {data.allStrapiAnnouncement.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.title}</Link>
          </h2>
          <Img fluid={document.node.image.childImageSharp.fluid} />
          <p>{document.node.content}</p>
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiAnnouncement {
      edges {
        node {
          id
          title
          content
          image {
            childImageSharp {
                fluid(maxWidth: 960) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
