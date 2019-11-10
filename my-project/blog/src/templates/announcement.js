import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout' 

const AnnouncementTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiAnnouncement.title}</h1>
    <Img fluid={data.strapiAnnouncement.image.childImageSharp.fluid}/>
    <p>{data.strapiAnnouncement.content}</p>
  </Layout>
)

export default AnnouncementTemplate

export const query = graphql`
  query AnnouncementTemplate($id: String!) {
    strapiAnnouncement(id: {eq: $id}) {
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
`
