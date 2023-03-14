/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: `MS Tv`,
		description: "Example project for the gatsby HEAD API",
		twitterUsername: "@gatsbyjs",
		image: "/gatsby-icon.png",
		siteUrl: `https://www.mawatv.com`,
	},
	plugins: [
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				// The unique name for each instance
				name: `blog`,
				// Path to the directory
				path: `${__dirname}/blog/`,
			},
		},
		"gatsby-plugin-mdx",
		"gatsby-transformer-sharp",
	],
};
