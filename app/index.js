import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router"


export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image style={styles.img} source={require("../assets/images/main-logo.png")}/>
        <Link style={styles.link} href="/dashboard">Início</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#FFFDFA"
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  img: {
    width: 350, 
    height: 350, 
    resizeMode: 'contain'
  },
  link: {
    borderRadius: 10,
    backgroundColor: "#FFCB69",
    color: "#fff",
    width: 115,
    position: "relative",
    left: "30%",
    bottom: 90,
    fontSize: 16,
    padding: 5,
    textAlign: "center",
    justifyContent: "center",
  }
});
