import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    /* padding: 1, */
    fontFamily: "Helvetica",
    fontSize: 15,
  },
  header: {
    fontSize: 32,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height:"100vh"
  },
  headerSpan: {
    color: "#BBDCE8",
  },
  headerImage: {
    width: "100vw",
    height: "100vh",
    position: "absolute",
    zIndex: "-1",
  },
  title: {
    fontSize: 34,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 20,
  },
  paragraph: {
    padding: 10
  }
});

export default styles;
