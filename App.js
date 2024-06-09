import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Dashboard } from "./components/screens/Dashboard";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Jobs } from "./components/screens/Jobs";
import { Favourites } from "./components/screens/Favourites";
import FavouritesContextProvider from "./store/context/favourites-context";
import { Details } from "./components/screens/Details";
import SearchesContextProvider from "./store/context/searches-context";
import JobContextProvider from "./store/context/job-context";
import { Ionicons } from "@expo/vector-icons";
import { Login } from "./components/screens/Login";

const STACK = createNativeStackNavigator();
const DRAWER = createDrawerNavigator();

export default function App() {
  function DrawNav() {
    return (
      <DRAWER.Navigator
        initialRouteName="categories"
        screenOptions={{
          headerStyle: { backgroundColor: "#FFF" },
          sceneContainerStyle: { backgroundColor: "#FFF" },
          headerShadowVisible: false,
          drawerActiveBackgroundColor: "#1DBDE6",
          drawerActiveTintColor: "#F1F1F1",
        }}
      >
        <DRAWER.Screen
          name="Job Search"
          component={Dashboard}
          options={{
            title: "Job Search",
            drawerIcon: ({ focused }) => (
              <Ionicons
                name="search"
                size={20}
                color={focused ? "#F1F1F1" : "#2F2F2F"}
              />
            ),
          }}
        />
        <DRAWER.Screen
          name="Favourites"
          component={Favourites}
          options={{
            drawerIcon: ({ focused }) => (
              <Ionicons
                name="heart"
                size={20}
                color={focused ? "#F1F1F1" : "#2F2F2F"}
              />
            ),
          }}
        />
        <DRAWER.Screen
          name="Applied"
          component={Favourites}
          options={{
            drawerIcon: ({ focused }) => (
              <Ionicons
                name="paper-plane"
                size={20}
                color={focused ? "#F1F1F1" : "#2F2F2F"}
              />
            ),
          }}
        />
        <DRAWER.Screen
          name="Settings"
          component={Favourites}
          options={{
            drawerIcon: ({ focused }) => (
              <Ionicons
                name="cog"
                size={20}
                color={focused ? "#F1F1F1" : "#2F2F2F"}
              />
            ),
          }}
        />
      </DRAWER.Navigator>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <JobContextProvider>
        <SearchesContextProvider>
          <FavouritesContextProvider>
            <NavigationContainer>
              <STACK.Navigator initialRouteName="login">
                <STACK.Screen
                  name="login"
                  component={Login}
                  options={{
                    headerStyle: { backgroundColor: "#FFF" },
                    contentStyle: { backgroundColor: "#FFF" },
                    headerShadowVisible: false,
                    title: "",
                  }}
                />
                <STACK.Screen
                  name="DrawNav"
                  component={DrawNav}
                  options={{
                    headerShown: false,
                  }}
                />
                <STACK.Screen
                  name="jobs"
                  component={Jobs}
                  options={{
                    headerStyle: { backgroundColor: "#FFF" },
                    contentStyle: { backgroundColor: "#FFF" },
                    headerShadowVisible: false,
                  }}
                />
                <STACK.Screen
                  name="details"
                  component={Details}
                  options={{
                    headerStyle: { backgroundColor: "#FFF" },
                    contentStyle: { backgroundColor: "#FFF" },
                    headerShadowVisible: false,
                  }}
                />
              </STACK.Navigator>
            </NavigationContainer>
          </FavouritesContextProvider>
        </SearchesContextProvider>
      </JobContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
