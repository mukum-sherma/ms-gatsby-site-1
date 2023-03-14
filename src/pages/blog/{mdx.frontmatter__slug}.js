import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// props => { data, children, pageContext }
const BlogPost = ({ data, children }) => {
	const image = getImage(data.mdx.frontmatter.hero_image);
	return (
		<Layout pageTitle="Super Cool Blog Posts">
			<p>Posted: {data.mdx.frontmatter.date}</p>
			<p>{data.mdx.frontmatter.date}</p>
			<GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
			{children}
		</Layout>
	);
};

// page query using id (readily available, iterates for each blog )
export const query = graphql`
	query ($id: String) {
		mdx(id: { eq: $id }) {
			frontmatter {
				title
				date(formatString: "MMMM D, YYYY")
				hero_image_alt
				hero_image_credit_link
				hero_image_credit_text
				hero_image {
					childImageSharp {
						gatsbyImageData
					}
				}
			}
		}
	}
`;

export const Head = () => <Seo title="Super Cool Blog Posts" />;

export default BlogPost;
