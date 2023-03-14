import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
// imports

const BlogPage = ({ data }) => {
	return (
		<Layout pageTitle="My Blog Posts">
			{data.allMdx.nodes.map((node) => (
				<article key={node.id}>
					<Link to={`/blog/${node.frontmatter.slug}`}>
						{node.frontmatter.title}
					</Link>
					<p>Posted: {node.frontmatter.date}</p>
					<p>{node.excerpt}</p>
				</article>
			))}
		</Layout>
	);
};

export const query = graphql`
	query {
		allMdx(sort: { frontmatter: { date: DESC } }) {
			nodes {
				frontmatter {
					title
					date(formatString: "MMMM DD, YYYY")
					slug
				}
				id
				excerpt
			}
		}
	}
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
