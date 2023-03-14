// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { ReducerDemo } from "../react-concepts/reducer";
import { useOnlineStatus, useFormInput } from "../react-concepts/custom-hooks";
import { StaticImage } from "gatsby-plugin-image";

import { useStaticQuery, graphql } from "gatsby";

// default home page : IndexPage.js - component name is changeable
const HomePage = () => {
	fetch("https://jsonplaceholder.typicode.com/posts/1")
		.then((response) => response.json())
		.then((json) => {
			alert("hi");
			console.log(json);
		});

	// custom hooks triggred by system eg. network status
	const isOnline = useOnlineStatus();

	// custom hook triggered by human interaction eg. input form change
	const firstNameProps = useFormInput("Mary");
	const lastNameProps = useFormInput("Poppins");

	return (
		<Layout pageTitle="Gatsby Netlify App">
			{/* // from 'static' folder, must be in the root folder, but not good practice, images not optimized */}
			<StaticImage alt="sam" src="../images/yakthung.jpg" />

			{/* <img src="sam.png" /> */}
			{/* <StaticImage alt="sam" src="../images/sam.png" /> */}

			<ReducerDemo />

			{/* // custom hooks wihtout human interaction */}
			<h3>{isOnline ? "✅ Online" : "❌ Disconnected"}</h3>

			{/* custom hook with human interaction */}
			<form>
				<label>
					First name:
					<input {...firstNameProps} />
				</label>
				<label>
					Last name:
					<input {...lastNameProps} />
				</label>
				<p>
					<b>
						Good morning, {firstNameProps.value} {lastNameProps.value}.
					</b>
				</p>
			</form>
		</Layout>
	);
};

export const Head = () => <Seo title="Home" />;

// Step 3: Export your component
export default HomePage;
