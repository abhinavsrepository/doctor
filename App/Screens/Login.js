import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import app from "./../../assets/images/app.png";
import Colors from "../../assets/Shared/Colors";
import SignInWithOAuth from "../../Components/SignInWithOAuth";

export default function Login() {
  return (
   <View style={{ alignItems: "center" }}>
      <Image source={app} style={styles.appImage} />
      <View
        style={{
          backgroundColor: Colors.verylight,
          padding: 25,
          alignItems: "center",
          marginTop: -50,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Text style={styles.heading}>Your Skin Care Expert</Text>
        <Text style={styles.heading}>Appoint Your Booking Now</Text>
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Book an Appointment Effortlessly with One of top Skin Care Expert
        </Text>
       
          <SignInWithOAuth/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  appImage: {
    width: 300,
    height: 400,
    objectFit: "cover",
    marginTop: 50,
    borderRadius: 20,
    borderWidth: 6,
    borderColor: "#000",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
  },
});
