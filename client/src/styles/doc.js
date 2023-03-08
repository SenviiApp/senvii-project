import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page1: {
    width: "100vw",
    height: "100vh",
    paddingVertical: "10",
    paddingHorizontal: "40",
    fontFamily: "Helvetica",
  },
  imagePage1: {
    width: "100vw",
    height: "100vh",
    position: "absolute",
    zIndex: "-100",
  },
  imageCommonPage1: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  commonImage: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  titlePage1: {
    color: "#fff",
    fontSize: "30",
    fontWeight: "extrabold",
    fontFamily: "Helvetica-Bold",
  },
  titlePage5: {
    color: "#fff",
    fontSize: "24",
    fontWeight: "extrabold",
    fontFamily: "Helvetica-Bold",
  },
  titleSpanPage1: {
    color: "#fff",
    fontSize: "40",
    fontWeight: "extrabold",
  },
  headerContainerPage1: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    marginBottom: "10",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  headerContainerPage5: {
    position: "absolute",
    bottom: "0",
    left: "40",
    width: "100%",
    height: "50%",
    marginBottom: "10",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "25",
  },
  mountainWaves: {
    width: "100%",
    height: "450",
    position: "absolute",
    top: "5",
  },
});

export default styles;
