import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page1: {
    width: "100vw",
    height: "100vh",
    paddingVertical: "10",
    paddingHorizontal: "30",
    fontFamily: "Helvetica",
  },
  imagePage1: {
    width: "100vw",
    height: "100vh",
    position: "absolute",
    zIndex: "-100",
  },
  imagePage2: {
    height: "75",
    width: "75",
    position: "absolute",
    top: "-50",
    left: "100",
  },
  image2Page2: {
    height: "75",
    width: "75",
    position: "absolute",
    top: "90",
    left: "100",
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
  titlePage2: {
    fontSize: "26",
    fontWeight: "extrabold",
    fontFamily: "Helvetica-Bold",
  },
  subTitlePage3: {
    fontSize: "20",
    fontWeight: "extrabold",
    fontFamily: "Helvetica-Bold",
    marginTop:"7"
  },
  titlePage5: {
    color: "#fff",
    fontSize: "30",
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
    height: "60%",
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
  bodyContainerPage2: {
    backgroundColor: "#795FFF",
    height: "250",
    width: "275",
    position: "absolute",
    borderRadius: "7",
    top: "180",
    left: "60",
  },
  bodyContainer2Page2: {
    height: "300",
    width: "410",
    position: "absolute",
    borderRadius: "7",
    top: "130",
    right: "20",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent:"space-between",
    gap:"40"
  },
});

export default styles;
