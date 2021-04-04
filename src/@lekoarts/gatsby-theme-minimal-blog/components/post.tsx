/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import ItemTags from "@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags"
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"

type PostProps = {
  data: {
    post: {
      slug: string
      title: string
      date: string
      tags?: {
        name: string
        slug: string
      }[]
      description?: string
      canonicalUrl?: string
      body: string
      excerpt: string
      banner?: {
        childImageSharp: {
          resize: {
            src: string
          }
        }
      }
    }
  }
}

const Post = ({ data: { post } }: PostProps) => (
  <Layout>
    <SEO
      title={post.title}
      description={post.description ? post.description : post.excerpt}
      image={post.banner ? post.banner.childImageSharp.resize.src : undefined}
      pathname={post.slug}
      canonicalUrl={post.canonicalUrl}
    />
    <Heading as="h1" variant="styles.h1">
      {post.title}
    </Heading>
    <p sx={{ color: `secondary`, mt: 3, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
      <time>{post.date}</time>
      {post.tags && (
        <React.Fragment>
          {` — `}
          <ItemTags tags={post.tags} />
        </React.Fragment>
      )}
    </p>
    <section
      sx={{
        my: 5,
        variant: `layout.content`,
      }}
    >
      <MDXRenderer>{post.body}</MDXRenderer>
    </section>
  </Layout>
)

export default Post
