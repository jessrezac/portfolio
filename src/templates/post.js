import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import useBlogData from "../static_queries/useBlogData"
import SignUpForm from "./../components/SignUpForm"

import Img from "gatsby-image"

export default function Post(props) {
  const {
    frontmatter,
    excerpt,
    html,
    timeToRead,
    wordCount,
    fields,
  } = props.data.markdownRemark

  console.log(frontmatter)
  const allBlogData = useBlogData()
  const nextPost = getNextPost(fields.slug)
  const prevPost = getPrevPost(fields.slug)

  function getNextPost(slug) {
    const nextPost =
      allBlogData[
        allBlogData
          .map(post => {
            return post.node.fields.slug
          })
          .indexOf(slug) + 1
      ]
    if (nextPost && nextPost.node.fields.slug !== undefined) {
      return nextPost
    } else {
      return allBlogData[0]
    }
  }

  function getPrevPost(slug) {
    const prevPost =
      allBlogData[
        allBlogData
          .map(post => {
            return post.node.fields.slug
          })
          .indexOf(slug) - 1
      ]
    if (prevPost && prevPost.node.fields.slug !== undefined) {
      return prevPost
    } else {
      return allBlogData[allBlogData.length - 1]
    }
  }

  return (
    <Layout>
      <article>
        <div className="py-20 w-full md:px-10 lg:px-20 max-w-screen-xl mx-auto">
          <figure>
            <Img
              fluid={frontmatter.hero_image.childImageSharp.fluid}
              alt={frontmatter.title}
            />
          </figure>

          <div>
            <h1 className="text-6xl font-display py-2">{frontmatter.title}</h1>
            <h2 className="font-sans text-2xl italic py-2">{excerpt}</h2>
            <div className="font-sans uppercase text-xs py-2">
              {frontmatter.date} &bull; {timeToRead} minute read &bull;{" "}
              {wordCount.words} words
            </div>
            <div className="btn-blue">Test</div>
          </div>
          <div
            id="postHtml"
            className="text-l font-serif leading-8 my-20"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
          <div className="w-full flex justify-between items-center">
            {prevPost && (
              <Link to={`${prevPost.node.fields.slug}`}>
                &larr; {prevPost.node.frontmatter.title}
              </Link>
            )}

            {nextPost && (
              <Link to={`${nextPost.node.fields.slug}`}>
                {nextPost.node.frontmatter.title} &rarr;
              </Link>
            )}
          </div>
        </div>
      </article>
      <div className="bg-seashell w-3/5 p-10 mb-20 mx-auto rounded font-serif">
        <SignUpForm />
      </div>
    </Layout>
  )
}

//dynamic page query, must occur within each post context
//$slug is made available by context from createPages call in gatsby-node.js
export const getPostData = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        author
        date(formatString: "MMMM Do, YYYY")
        hero_image {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid
            }
          }
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
