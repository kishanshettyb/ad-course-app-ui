import { StatusBar } from "react-native";
import React from "react";
import { useIsFocused } from "@react-navigation/native";

const FocusAwareStatusBar = (props) => {
	const isFocused = useIsFocused();
	return isFocused ? <StatusBar statusBarAnimation={true} {...props} /> : null;
};

export default FocusAwareStatusBar;
