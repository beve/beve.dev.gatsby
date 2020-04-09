import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import TransitionLink from 'gatsby-plugin-transition-link'
import { css } from '@emotion/core'

import SEO from "../components/seo"
import Grid from "../components/grid"
import Layout from "../components/layout"

const gridCss = css`
  grid-template-rows: 225px 260px 1fr;
  height: 100vh;
`

const illustrations = css`
  grid-row: 1 / -1;
  grid-column: 1 / span 7;
`

const sheet = css`
  grid-row: 2;
  grid-column: 9 / span 5;
`

const infos = css`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 60px;
  font-weight: 300;

  & > div {
    line-height: 1.7em;
    flex: 1 1 50%;
    margin-top:  30px;
    span {
      padding-right: 0.3em;
      font-weight: 600;
    }
  }
`

const content = css`
z-index: 1;
grid-row: 3;
grid-column: 9 / span 5;
overflow-y: scroll;
-ms-overflow-style: none;
margin-bottom: 70px;
scrollbar-width: none;
&::-webkit-scrollbar {
  display: none;
}
font-size: 1.1em; 
letter-spacing: 0.5px; 
font-weight: 300; 
line-height: 1.5em;
`

const iconClose = css`
  box-sizing: border-box;
  border: 1px solid red;
  align-self: start;
  justify-self: center;
  grid-row: 2;
  grid-column: 13;
  padding: 20px;
`

const ProjectPage = ({ data }) => {
  console.log(data);
  const { name, images, stack, customer, technologies, perimeter, description } = data.allDatoCmsProject.edges[0].node;
  return (
    <>
      <SEO title="Projets" />
      <Layout>
        <Grid gridCss={gridCss} drawCols={14} colsCss={css`z-index: 1; opacity: 0.3`}>
          <div css={illustrations}>
            {images.map(image => {
              const { fluid, alt, title } = image
              return <Img 
                key={title}
                fluid={fluid} 
                alt={alt} 
                title={title}
                style={{ height: '100%'}}
              />
            })}
          </div>
          <div css={sheet}>
            <div css={css`font-size: 3em; font-weight: bold;line-height: 1.25em`}>{name}</div>
            <div css={infos}>
              <div><span>Contexte:</span>{perimeter}</div>
              <div><span>Client:</span>{customer}</div>
              <div><span>Stack:</span>{stack}</div>
              <div><span>Technologies:</span>{technologies}</div>
            </div>
          </div>
          <div css={content} dangerouslySetInnerHTML={{ __html: description }}></div>
          <div data-cursor="big" css={iconClose}>
            <TransitionLink to="/">
              x
            </TransitionLink>
          </div>
        </Grid>
      </Layout>
    </>
  )
}

export const query = graphql`
  query ProjectQuery($id: String) {
    allDatoCmsProject(filter: {id: {eq: $id}}) {
      edges {
        node {
          id
          name
          stack
          technologies
          customer
          description
          perimeter
          images {
            alt
            title
            fluid {
              aspectRatio
              height
              sizes
              src
              srcSet
              width
            }
          }
        }
      }
    }
  }
`

export default ProjectPage