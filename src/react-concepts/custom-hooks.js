import React, { useState, useReducer, useEffect } from "react";

/**=========================================================================================== *
 * ==========  custome hooks starts with 'use' word  ========== *
 * =========================================================================================== */

// triggered by network status   // not by human interaction
function useOnlineStatus() {
	const [isOnline, setIsOnLine] = useState(true);
	useEffect(() => {
		function handleOnline() {
			setIsOnLine(true);
		}
		function handleOffline() {
			setIsOnLine(false);
		}
		window.addEventListener("online", handleOnline);
		window.addEventListener("offline", handleOffline);
		return () => {
			window.removeEventListener("online", handleOnline);
			window.removeEventListener("offline", handleOffline);
		};
	}, []);
	return isOnline;
}

// custom hook triggered by human interaction eg. input form change event, button click etc.
function useFormInput(initialValue) {
	const [value, setValue] = useState(initialValue);
	function handleChange(e) {
		setValue(e.target.value);
	}
	const inputProps = {
		value: value,
		onChange: handleChange,
	};
	return inputProps;
}

export { useOnlineStatus, useFormInput };
