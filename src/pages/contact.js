import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

import { btn } from "../css/style2.module.css";

const ContactPage = () => {
	return (
		<Layout title="About Page">
			<header>Contact Us</header>
			<h1>Contact Us</h1>
			<button className={btn}>Send Email</button>
		</Layout>
	);
};

export const Head = () => <Seo title="Contact Us" />;

export default ContactPage;
