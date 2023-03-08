import * as React from "react";
import { Link } from "gatsby";
import Layout from "./layout";

import { btn } from './css/style2.module.css'

const ContactPage = () => {
	return (
		<Layout title="About Page">
			<h1>Contact Us</h1>
			<button className={btn}>Send Email</button>
		</Layout>
	);
};

export const Head = () => <title>About Me</title>;

export default ContactPage;
