import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { router } from "expo-router";

const CustomDrawerComponent = (props) => {
	return (
		<DrawerContentScrollView>
			<DrawerItem
				label={"Notification"}
				onPress={() => {
					router.push("./notification");
				}}
			/>
			<DrawerItem
				label={"Settings"}
				onPress={() => {
					router.push("(tabs)/settings");
				}}
			/>
		</DrawerContentScrollView>
	);
};

export default function Layout() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Drawer drawerContent={(props) => <CustomDrawerComponent {...props} screenOptions={{ headrShown: true }} />} />
		</GestureHandlerRootView>
	);
}
