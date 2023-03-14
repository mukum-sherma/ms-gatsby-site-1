// 'React from 'react'  => if absent => error : React must be in scope
import React, { useState, useReducer } from "react";

function ReducerDemo2() {
	// 'dispatch' text is changeable , can be 'dispatch' 'dispatch1' etc.
	const [texts, dispatch1] = useReducer(textsReducer, "sanjog");

	function textAdder(text) {
		dispatch1({ type1: "added", text: text });
	}
	return (
		<>
			<h2>Reducer 2</h2>
			<pre>
				Texts : {texts} {""}
				<br />
				<button
					onClick={() => {
						textAdder(" sherma limbu");
					}}
				>
					Add Text 2
				</button>
			</pre>
			<hr />
		</>
	);
}

function ReducerDemo1() {
	// 'dispatch' text is changeable , can be 'dispatch' 'dispatch1' etc.
	const [texts, dispatch1] = useReducer(textsReducer, "sanjog");

	function textAdder(text) {
		dispatch1({ type1: "added", text: text });
	}

	return (
		<>
			<h3>Reducer 1</h3>
			<pre>
				Texts : {texts} {""}
				<br />
				<button
					onClick={() => {
						textAdder(" sherma limbu");
					}}
				>
					Add Text
				</button>
			</pre>
			<hr />
		</>
	);
}

function ReducerDemo() {
	return (
		<>
			<ReducerDemo1 />
			<ReducerDemo2 />
		</>
	);
}

// reducerFunction is a function not a component
function textsReducer(state, action) {
	// using 'if' statement
	/* 'type' keyword is changeable
	if (action.type1 === "added") {
		return state + " " + action.text;
	} */

	// using 'case' statement
	switch (action.type1) {
		case "added": {
			return [state + " " + action.text];
		}
		default:
			break;
	}
}

export { ReducerDemo };
