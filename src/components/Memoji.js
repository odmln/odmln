import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from '@emotion/styled'
import Img from "gatsby-image"

const Avatar = styled(Img)`
  height: 96px;
  width: 96px;
  border-radius: 50%;
  margin-bottom: 32px;
  background-color: ${props => props.theme.colors.gray};
`

const Memoji = () => {
  const data = useStaticQuery(graphql`
    query {
      pills: file(relativePath: { eq: "memoji.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Avatar fluid={data.pills.childImageSharp.fluid} /> }

export default Memoji
