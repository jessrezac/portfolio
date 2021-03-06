import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import useProjectData from "../static_queries/useProjectData"
import SignUpForm from "./../components/SignUpForm"

import Img from "gatsby-image"

export default function Project(props) {
  const {
    frontmatter,
    html,
    timeToRead,
    wordCount,
    fields,
  } = props.data.markdownRemark
  const allProjectData = useProjectData()
  const nextProject = getNextSlug(fields.slug)
  const prevProject = getPrevSlug(fields.slug)

  function getNextSlug(slug) {
    const nextProject =
      allProjectData[
        allProjectData
          .map(project => {
            return project.node.fields.slug
          })
          .indexOf(slug) + 1
      ]
    if (nextProject && nextProject.node.fields.slug !== undefined) {
      return nextProject
    } else {
      return allProjectData[0]
    }
  }

  function getPrevSlug(slug) {
    const prevProject =
      allProjectData[
        allProjectData
          .map(project => {
            return project.node.fields.slug
          })
          .indexOf(slug) - 1
      ]
    if (prevProject && prevProject.node.fields.slug !== undefined) {
      return prevProject
    } else {
      return allProjectData[allProjectData.length - 1]
    }
  }

  return (
    <Layout
      page="project"
      title={frontmatter.title}
      oGraphUrl={frontmatter.hero_image.publicURL}
      slug={fields.slug}
    >
      <article>
        <div className="py-20 w-full md:px-10 lg:px-20 max-w-screen-xl mx-auto">
          <figure>
            <Img
              fluid={frontmatter.hero_image.childImageSharp.fluid}
              alt={frontmatter.title}
            />
          </figure>

          <div>
            <h1 className="text-6xl font-display pt-2">{frontmatter.title}</h1>
            <h2 className="font-sans text-2xl italic">{frontmatter.kicker}</h2>
            <div className="font-sans uppercase text-xs py-2">
              {frontmatter.date} &bull; {timeToRead} minute read &bull;{" "}
              {wordCount.words} words
            </div>
          </div>
          <div
            id="projectHtml"
            className="text-l font-serif leading-8 my-10"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>

          <div className="w-full flex justify-between items-center">
            <a href={`../../projects${prevProject.node.fields.slug}`}>
              &larr; {prevProject.node.frontmatter.title}
            </a>

            <a href={`../../projects${nextProject.node.fields.slug}`}>
              {nextProject.node.frontmatter.title} &rarr;
            </a>
          </div>
        </div>
      </article>

      <div className="bg-seashell w-4/5 md:w-3/5 xl:w-2/5 p-10 mb-20 mx-auto rounded font-serif">
        <SignUpForm />
      </div>
    </Layout>
  )
}

//dynamic page query, must occur within each post context
//$slug is made available by context from createPages call in gatsby-node.js
export const getProjectData = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        author
        date(formatString: "MMMM Do, YYYY")
        kicker
        hero_image {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid
            }
          }
          publicURL
        }
      }
      excerpt
      html
      timeToRead
      wordCount {
        words
      }
    }
  }
`
