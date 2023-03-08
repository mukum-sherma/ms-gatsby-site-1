// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import Layout from "./layout";
import { StaticImage } from "gatsby-plugin-image";

// default home page : IndexPage.js - component name is changeable
const HomePage = () => {
	return (
		<Layout pageTitle="Gatsby Netlify App">
			<p>I'm making this by following the Gatsby Tutorial.</p>
			<StaticImage src="../pics/sam.png" />
			<StaticImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMma1RsDUuSNsB1CLxhrSbNJH9OApmgGQndQ&usqp=CAU" />
		</Layout>
	);
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Mawa Tv</title>;

// Step 3: Export your component
export default HomePage;
