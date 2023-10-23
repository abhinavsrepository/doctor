import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Login from "./App/Screens/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import SignInWithOAuth from "./Components/SignInWithOAuth";
import {NavigationContainer} from '@react-navigation/native'
import Home from './App/Screens/Home'
import TabNavigation from "./App/Navigations/TabNavigation";
export default function App() {
  return (
    <ClerkProvider
      publishableKey={
        "pk_test_ZW5nYWdpbmctdW5pY29ybi0yLmNsZXJrLmFjY291bnRzLmRldiQ"
      }
    >
      <SafeAreaView style={styles.container}>
        <SignedIn>
          <NavigationContainer>
            <TabNavigation/>
            </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <Login/>
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
   
  },
});
