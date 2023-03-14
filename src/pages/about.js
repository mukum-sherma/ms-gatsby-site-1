import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

import { btn } from "../css/style1.module.css";

const AboutPage = () => {
	return (
		<Layout title="About Page">
			<h1>About Me</h1>
			<img src="https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990_960_720.jpg" />
			<p>
				Hi there! I'm the proud creator of this site, which I built with Gatsby.
			</p>
			<button className={btn}>Click Me</button>
		</Layout>
	);
};

export const Head = () => <Seo title="About Us" />;

export default AboutPage;
