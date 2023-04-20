import { StyleSheet, Text, Image, View } from "react-native";
import Button from "../components/Button";
import logo from "../../assets/pictures/logo.png";


export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image source={logo} style={{height: 200, maxWidth:"100%", resizeMode: "contain" }} />
        <Text style={styles.title}>Service d'incident de la ville de Simplonville</Text>
        <Text style={styles.subtitle}>Bienvenue dans ce service qui est là pour les riverains pour signaler un incident qui se trouve dans notre collectivité ou dans les environs.</Text>
        <Button
          route="/contact"
          title="Nous contacter"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
    gap: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign:"center"
  },
  subtitle: {
    textAlign:"center",
    fontSize: 20,
    color: "#38434D",
  },
});