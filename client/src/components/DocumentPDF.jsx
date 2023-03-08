import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  Image,
  Font,
  PDFViewer,
} from "@react-pdf/renderer";

import styles from "../styles/doc";
import senviiBg from "../assets/bg-oficial.jpg";
import data from "../../data";
import bg_purple from "../assets/pdf/color_795FFF.jpg";
import logo_senvii from "../assets/pdf/logo_senvii_ico.png";
import logo_prama from "../assets/pdf/prama_logo_ico.png";
import lens from "../assets/pdf/lupa_grafico.png";
import city from "../assets/pdf/ciudad_pista_graficos.png";
import cloud1 from "../assets/pdf/nube.png";
import cloud2 from "../assets/pdf/nube_2.png";
import ondas_montanosas from "../assets/pdf/ondas_montañas.png";

const date = new Date();

const DocumentPDF = () => (
  <PDFViewer style={{ width: "100%", height: "100vh" }}>
    <Document>
      {/* First Page */}
      <Page size="A4" orientation="landscape" style={styles.page1}>
        {/* LOGOS CONTAINER */}
        <View style={styles.logoContainer}>
          <View style={{ width: "150", height: "150" }}>
            <Image src={logo_senvii} style={styles.commonImage} />
          </View>
          <View style={{ width: "150", height: "150" }}>
            <Image src={logo_prama} style={styles.commonImage} />
          </View>
        </View>

        {/* TEXT CONTAINER */}
        <View style={styles.headerContainerPage1}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ width: "150", height: "150" }}>
              <Image src={lens} style={styles.imageCommonPage1} />
            </View>
            <View>
              <Text style={styles.titlePage1}>Resultados del</Text>
              <Text style={styles.titlePage1}>diagnóstico Vial</Text>
              <Text style={styles.titleSpanPage1}>{date.getFullYear()}</Text>
            </View>
          </View>
          <View>
            <Text style={{ color: "#fff", fontWeight: "extralight" }}>
              www.senviiapp.com
            </Text>
          </View>
        </View>
        {/* Image of mountain waves */}
        <View style={styles.mountainWaves}>
          <Image
            src={ondas_montanosas}
            style={{ width: "100vw", height: "100%" }}
          />
        </View>
        {/* Image of the cloud left */}
        <View
          style={{
            width: "125",
            height: "125",
            position: "absolute",
            top: "110",
            left: "50",
          }}
        >
          <Image src={cloud1} style={styles.imageCommonPage1} />
        </View>
        {/* Image of the cloud right  */}
        <View
          style={{
            width: "125",
            height: "125",
            position: "absolute",
            top: "110",
            right: "150",
          }}
        >
          <Image src={cloud2} style={styles.imageCommonPage1} />
        </View>
        {/* Image of the city */}
        <View
          style={{
            width: "450",
            height: "450",
            position: "absolute",
            right: "50",
            top: "50",
          }}
        >
          <Image src={city} style={styles.imageCommonPage1} />
        </View>
        <Image src={bg_purple} style={styles.imagePage1} />
      </Page>
      {/* Final Page */}
      <Page size="A4" orientation="landscape" style={styles.page1}>
        {/* LOGOS */}
        <View style={styles.logoContainer}>
          <View style={{ width: "150", height: "150" }}>
            <Image src={logo_senvii} style={styles.commonImage} />
          </View>
          <View style={{ width: "150", height: "150" }}>
            <Image src={logo_prama} style={styles.commonImage} />
          </View>
        </View>
        {/* TEXT CONTAINER */}
        <View style={styles.headerContainerPage5}>
          <View>
            <View style={{ fontSize: "1" }}>
              <Text style={styles.titlePage5}>Somos una solución digital</Text>
              <Text style={styles.titlePage5}>que ayuda a mejorar la</Text>
              <Text style={styles.titlePage5}>seguridad vial en el Perú.</Text>
            </View>
          </View>
          <View>
            <Text style={{ color: "#fff", fontWeight: "extralight" }}>
              www.senviiapp.com
            </Text>
          </View>
        </View>

        {/* Image of mountain waves */}
        <View style={styles.mountainWaves}>
          <Image
            src={ondas_montanosas}
            style={{ width: "100vw", height: "100%" }}
          />
        </View>
        {/* Image of the cloud left */}
        <View
          style={{
            width: "125",
            height: "125",
            position: "absolute",
            top: "110",
            left: "50",
          }}
        >
          <Image src={cloud1} style={styles.imageCommonPage1} />
        </View>
        {/* Image of the cloud right  */}
        <View
          style={{
            width: "125",
            height: "125",
            position: "absolute",
            top: "110",
            right: "150",
          }}
        >
          <Image src={cloud2} style={styles.imageCommonPage1} />
        </View>
        {/* Image of the city */}
        <View
          style={{
            width: "450",
            height: "450",
            position: "absolute",
            right: "50",
            top: "50",
          }}
        >
          <Image src={city} style={styles.imageCommonPage1} />
        </View>
        <Image src={bg_purple} style={styles.imagePage1} />
      </Page>
    </Document>
  </PDFViewer>
);

export default DocumentPDF;
