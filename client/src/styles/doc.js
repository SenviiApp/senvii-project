import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page1: {
    width: "100vw",
    height: "100vh",
    paddingVertical: "0",
    paddingHorizontal: "40px",
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
  titlePage1: {
    color: "#fff",
    fontSize: "30",
    fontWeight: "extrabold",
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
});

export default styles;
