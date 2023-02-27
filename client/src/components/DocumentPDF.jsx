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

const DocumentPDF = () => (
  <PDFViewer style={{ width: "100%", height: "100vh" }}>
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>La importancia de la seguridad vial</Text>
        <Image
          src="https://images.unsplash.com/photo-1564522606847-c1928bb1d079?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          style={styles.image}
        />
        <Text>
          La seguridad vial es un tema muy importante que afecta a todos los
          ciudadanos. Cada año, millones de personas en todo el mundo mueren o
          resultan heridas en accidentes de tráfico. Por eso es esencial que
          tomemos medidas para prevenir estos accidentes y promover la seguridad
          vial.
        </Text>
      </Page>
      <Page style={styles.page}>
        <Text style={styles.title}>Consejos para conducir de forma segura</Text>
        <Image
          src="https://images.unsplash.com/photo-1559758822-ac35da10b49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          style={styles.image}
        />
        <Text>
          Algunos consejos importantes para conducir de forma segura incluyen
          respetar los límites de velocidad, mantener una distancia segura con
          otros vehículos, no conducir bajo los efectos del alcohol o las
          drogas, y siempre usar el cinturón de seguridad. También es importante
          estar atento a las condiciones de la carretera y ajustar la velocidad
          en consecuencia.
        </Text>
      </Page>
      <Page style={styles.page}>
        <Text style={styles.title}>Medidas para mejorar la seguridad vial</Text>
        <Image
          src="https://images.unsplash.com/photo-1504735432588-ab3bf116740f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80"
          style={styles.image}
        />
        <Text>
          Además de seguir consejos para conducir de forma segura, también es
          importante que se tomen medidas a nivel gubernamental y comunitario
          para mejorar la seguridad vial. Algunas medidas pueden incluir la
          implementación de leyes y regulaciones de tráfico más estrictas, la
          creación de infraestructuras seguras para ciclistas y peatones, y
          campañas de concientización sobre seguridad vial.
        </Text>
      </Page>
    </Document>
  </PDFViewer>
);

export default DocumentPDF;
