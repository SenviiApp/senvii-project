import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  Image,
  PDFViewer,
} from "@react-pdf/renderer";

import styles from "../styles/doc";
import senviiBg from "../assets/bg-oficial.jpg";
import data from "../../data";

console.log("🚀 ~ file: DocumentPDF.jsx:13 ~ data:", data.zonaUrbana);

const zonaUrbana = data.zonaUrbana;
const DocumentPDF = () => (
  <PDFViewer style={{ width: "100%", height: "100vh" }}>
    <Document>
      {/* First Page */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text>
            Reporte de Prueba By <Text style={styles.headerSpan}>Senvii</Text>{" "}
          </Text>
        </View>
        <Image src={senviiBg} style={styles.headerImage} />
      </Page>

      {/* Second Page */}
      <Page style={styles.page}>
        <Text style={styles.title}>Zona Urbana</Text>
        <Text style={styles.paragraph}>{zonaUrbana.descripcion}</Text>
        <View>
          {data.zonaUrbana.velocidades.map((zona, i) => (
            <View key={i}>
              <Text style={styles.paragraph}>
                {zona.name}: {zona.descripcion}
              </Text>
            </View>
          ))}
        </View>
      </Page>

      {/* Third Page */}
      <Page style={styles.page}>
        <Text style={styles.title}>
          Tipo de vía: {zonaUrbana.cuatrocientos.via.nombre}
        </Text>
        <Text style={styles.paragraph}>
          {zonaUrbana.cuatrocientos.via.descripcion}
        </Text>
        <View>
          <Text style={styles.title}>Se consideran mejoras en:</Text>
          {zonaUrbana.cuatrocientos.via.mejoras.map((mejora, i) => (
            <Text key={i} style={styles.paragraph}>
              {mejora}
            </Text>
          ))}
        </View>
        <View>
          <Text style={styles.title}>Para señalización de:</Text>
          <Text style={styles.paragraph}>Líneas continuas y discontinuas</Text>
          <Text style={styles.paragraph}>
            Cruceros peatonales y líneas de pare
          </Text>
          <Text style={styles.paragraph}>Símbolos, flechas y letras</Text>
        </View>
      </Page>

      {/* Fourth Page */}
      <Page style={styles.page}>
        <Text style={styles.title}>Además se recomienda:</Text>
        <Text style={styles.paragraph}>
          {zonaUrbana.cuatrocientos.via.descripcion}
        </Text>
        <View>
          {zonaUrbana.cuatrocientos.via.mejorasSimples.map((mejora, i) => (
            <Text key={i} style={styles.paragraph}>
              {mejora}
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

export default DocumentPDF;
