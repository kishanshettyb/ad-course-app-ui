import React from "react";
import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { Button, Image, Platform, Text, View } from "react-native";
import LogoTitle from "../components/LogoTitle";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "#fff",
				tabBarStyle: {
					position: "absolute",
					bottom: 30,
					borderRadius: 150,
					marginLeft: 30,
					marginRight: 30,
					paddingTop: Platform.OS === "ios" ? 20 : 20,
					paddingBottom: Platform.OS === "ios" ? 20 : 20,
					backgroundColor: "#ffffff1a",
					borderTopWidth: 0,
					borderBottomWidth: 0,
					height: 80
				}
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					headerShown: true,
					tabBarLabelStyle: {
						height: 0
					},
					headerStyle: {
						backgroundColor: "#0a0a0a",
						shadowOpacity: 0,
						elevation: 0,
						height: 120
					},
					headerTitleStyle: {
						fontWeight: "bold",
						color: "#fff",
						height: 0
					},
					headerLeft: () => (
						<View className="flex flex-row items-center pl-4">
							<View className="mr-2 w-[40] h-[40] flex items-center justify-center bg-gray-800 rounded-full">
								<AntDesign name="book" size={20} color="#bef264" />
							</View>
							<View>
								<Text className="text-2xl font-bold text-white">Coursera</Text>
							</View>
						</View>
					),
					headerRight: () => (
						<View className="flex flex-row items-center justify-center pr-4">
							<View className="w-[40] h-[40] bg-gray-800 flex justify-center items-center rounded-full mr-4">
								<Link href="./profile">
									<Feather name="calendar" size={18} color="white" />
								</Link>
							</View>
							<View className="w-[40] h-[40] bg-gray-800 flex justify-center items-center rounded-full mr-4">
								<Link href="./profile">
									<Ionicons name="notifications-outline" size={18} color="white" />
								</Link>
							</View>
							<View>
								<Link href="./profile">
									<View>
										<Image source={require("../../assets/profile-picture.jpeg")} className="w-[45] h-[45]  rounded-full" />
									</View>
								</Link>
							</View>
						</View>
					),
					tabBarIcon: ({ color, color1 }) => (
						<View style={{ backgroundColor: "#ffffff1a" }} className={`w-[50] h-[50]   flex flex-row  justify-center rounded-full items-center shadow-lg `}>
							<Feather size={28} name="home" color={color} />
						</View>
					)
				}}
			/>
			<Tabs.Screen
				name="search"
				options={{
					tabBarLabelStyle: {
						height: 0
					},
					tabBarIcon: ({ color }) => (
						<View style={{ backgroundColor: "#ffffff1a" }} className="w-[50] h-[50] flex justify-center     rounded-full items-center shadow-lg">
							<Feather size={28} name="search" color={color} />
						</View>
					)
				}}
			/>
			<Tabs.Screen
				name="courses"
				options={{
					tabBarLabelStyle: {
						height: 0
					},
					tabBarIcon: ({ color }) => (
						<View style={{ backgroundColor: "#ffffff1a" }} className="w-[50] h-[50] flex justify-center    rounded-full items-center shadow-lg">
							<Feather size={28} name="codesandbox" color={color} />
						</View>
					)
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					tabBarLabelStyle: {
						height: 0
					},
					tabBarIcon: ({ color }) => (
						<View style={{ backgroundColor: "#ffffff1a" }} className="w-[50] h-[50] flex justify-center      rounded-full items-center shadow-lg">
							<Feather size={28} name="user" color={color} />
						</View>
					)
				}}
			/>
		</Tabs>
	);
}
