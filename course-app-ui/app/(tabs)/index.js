import { View, Text } from "react-native";
import React from "react";
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";

const index = () => {
	return (
		<View className="flex-1 px-4 bg-neutral-950">
			<FocusAwareStatusBar barStyle="light-content" backgroundColor="#0a0a0a" />
			<Text className="w-2/3 my-5 text-4xl font-bold text-white ">Choose your course</Text>
		</View>
	);
};

export default index;
