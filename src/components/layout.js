import * as React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";

// Layout has navigation bar
const Layout = ({ pageTitle, children }) => {
	/**=================================================================================================================== *
	 * ==========  SINGLE PAGE OR STATIC QUERY IS ALLOWED NOT MULTIPLE PER PAGE (COMBINE AND MAKE A SINGLE QUERY)  ========== *
	 * =================================================================================================================== */

	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);
	return (
		<div>
			{/* this is not the head tag, it's just a header element */}
			<header>{data.site.siteMetadata.title}</header>
			<nav
				style={{
					display: "flex",
					justifyContent: "space-between",
					width: "250px",
				}}
			>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact Us</Link>
				<Link to="/blog">Blogs</Link>

				{/* <ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact Us</Link>
					</li>
				</ul> */}
			</nav>
			<main>
				<h1>{pageTitle}</h1>
				{children}
			</main>
			<footer>Copyright @2023</footer>
		</div>
	);
};

export default Layout;
