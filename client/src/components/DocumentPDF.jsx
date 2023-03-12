import React from "react";
import { Document, Page, View, Text, Image } from "@react-pdf/renderer";

import styles from "../styles/pdf/doc";
import logo_senvi_icon from "../assets/pdf/icono_senvii_logo_solo.png";
import bg_purple from "../assets/pdf/color_795FFF.jpg";
import logo_senvii from "../assets/pdf/logo_senvii_ico.png";
import logo_prama from "../assets/pdf/prama_logo_ico.png";
import lens from "../assets/pdf/lupa_grafico.png";
import city from "../assets/pdf/ciudad_pista_graficos.png";
import city2 from "../assets/pdf/ciudad_pista_graficos_2.png";
import cloud1 from "../assets/pdf/nube.png";
import cloud2 from "../assets/pdf/nube_2.png";
import ondas_montanosas from "../assets/pdf/ondas_montañas.png";
import statal_icon from "../assets/pdf/icono_estatal.png";
import ubication_icon from "../assets/pdf/icono_ubicacion.png";
import oldVia_icon from "../assets/pdf/icono_antiguedad_via.png";
import vehicle_icon from "../assets/pdf/icono_transito_vehiculos.png";
import length_icon from "../assets/pdf/icono_longitud.png";
import floor_icon from "../assets/pdf/icono_pavimento.png";
import via_icon from "../assets/pdf/icono_via.png";
import { $axios } from "../lib";
import { useEffect } from "react";
import { useState } from "react";

const DocumentPDF = ({ form, userData: { id, userName, image } }) => {
  // console.log("🚀 ~ file: DocumentPDF.jsx:38 ~ DocumentPDF ~ form:", form);
  const [user, setUser] = useState(null);
  const [date] = useState(new Date());
  useEffect(() => {
    async function fetchData() {
      const { data } = await $axios.get(`/user/${id}`);
      setUser(data);
    }
    fetchData();
  }, []);
  return (
    <Document>
      {/* First Page: Landing */}
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
              {"www.senvii.com"}
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

      {/* Second Page: Overview */}
      <Page size="A4" orientation="landscape" style={styles.page1}>
        {/* Title */}
        <View style={{ marginTop: "20" }}>
          <Text style={styles.titlePage2}>Resumen de análisis</Text>
        </View>

        {/* Left Side */}
        <View style={styles.bodyContainerPage2}>
          <Image src={statal_icon} style={styles.imagePage2} />
          {/* Client */}
          <View
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              top: "30",
            }}
          >
            <Text style={{ color: "#fff", fontSize: "12" }}>Cliente</Text>
            {/* Conditional */}
            <Text
              style={{
                color: "#fff",
                fontSize: "16",
                fontFamily: "Helvetica-Bold",
                marginTop: "5",
              }}
            >
              {user && user.institution.entityName}
            </Text>
          </View>
          {/* Ubication */}
          <View
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              top: "140",
            }}
          >
            <Text style={{ color: "#fff", fontSize: "12" }}>
              Ubicación del proyecto
            </Text>
            {/* Conditional */}
            <Text
              style={{
                color: "#fff",
                fontSize: "16",
                fontFamily: "Helvetica-Bold",
                width: "50%",
                textAlign: "center",
                marginTop: "5",
              }}
            >
              {form && form.viaUbication}
            </Text>
          </View>

          <Image src={ubication_icon} style={styles.image2Page2} />
        </View>

        {/* Right Side */}
        <View style={styles.bodyContainer2Page2}>
          {/* Tipo de via */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10",
            }}
          >
            <Image src={via_icon} style={{ width: "70", height: "70" }} />
            <View>
              {/* Conditional */}
              <Text style={{ fontFamily: "Helvetica-Bold", fontSize: "18" }}>
                {form &&
                  `Vía ${
                    form.zone.charAt(0).toUpperCase() + form.zone.slice(1)
                  }`}
              </Text>
              <Text style={{ fontSize: "12" }}>
                {form && `Vía ${form.viaType}`}
              </Text>
            </View>
          </View>

          {/* Longitud de la via */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10",
            }}
          >
            <Image src={length_icon} style={{ width: "70", height: "70" }} />
            <View>
              {/* Conditional */}
              <Text style={{ fontFamily: "Helvetica-Bold", fontSize: "18" }}>
                {form && `${form.viaLength} ${form.viaMeasure}`}
              </Text>
              <Text style={{ fontSize: "12" }}>Longitud de la vía</Text>
            </View>
          </View>

          {/* Transito */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10",
            }}
          >
            <Image src={vehicle_icon} style={{ width: "70", height: "70" }} />
            <View>
              {/* Conditional */}
              <Text style={{ fontFamily: "Helvetica-Bold", fontSize: "18" }}>
                {form && `${form.transit.split("/").join(" a ")}`}
              </Text>
              <Text style={{ fontSize: "12" }}>Vehículos por día</Text>
            </View>
          </View>

          {/* Pavimento */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10",
            }}
          >
            <Image src={floor_icon} style={{ width: "70", height: "70" }} />
            <View>
              {/* Conditional */}
              <Text style={{ fontFamily: "Helvetica-Bold", fontSize: "18" }}>
                {form && form.viaPavment}
              </Text>
              <Text style={{ fontSize: "12" }}>Tipo de pavimento</Text>
            </View>
          </View>

          {/* Antiguedad */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10",
            }}
          >
            <Image src={oldVia_icon} style={{ width: "70", height: "70" }} />
            <View>
              {/* Conditional */}
              <Text style={{ fontFamily: "Helvetica-Bold", fontSize: "18" }}>
                {form && `${form.viaAge} años`}
              </Text>
              <Text style={{ fontSize: "12" }}>Antiguedad del pavimento</Text>
            </View>
          </View>
        </View>

        {/* SENVII LINK */}
        <Text
          style={{
            fontSize: "14",
            position: "absolute",
            right: "30",
            bottom: "10",
          }}
        >
          www.senviapp.com
        </Text>

        {/* SENVII LOGO ICON */}
        <View
          style={{
            width: "50",
            height: "50",
            position: "absolute",
            bottom: "10",
            left: "30",
          }}
        >
          <Image src={logo_senvi_icon} style={styles.commonImage} />
        </View>
      </Page>

      {/* Third Page */}
      <Page size="A4" orientation="landscape" style={styles.page1}>
        {/* Header Title */}
        <View style={{ marginTop: "20" }}>
          <Text style={styles.titlePage2}>Tipo de vía</Text>
          <Text style={styles.subTitlePage3}>{form && form.via.nombre}</Text>

          {/* Conditional */}
          <View style={{ width: "200", height: "200", left: "30" }}>
            <Image
              src={form && form.via.image}
              style={styles.imageCommonPage1}
            />
          </View>

          {/* Description */}
          <Text
            style={{
              fontSize: "13",
              textAlign: "left",
              width: "300",
              letterSpacing: "0.5",
              lineHeight: "1.1",
              marginTop: "10",
            }}
          >
            {form && form.via.descripcion}
          </Text>
        </View>
        {/* Common Signals */}
        <View
          style={{
            backgroundColor: "#795FFF",
            borderRadius: "15",
            position: "absolute",
            right: "30",
            top: "40",
            width: "410",
            paddingVertical: "50",
            paddingHorizontal: "20",
          }}
        >
          <Text
            style={{
              fontSize: "22",
              fontFamily: "Helvetica-Bold",
              color: "#fff",
            }}
          >
            Señalización recurrente
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              gap: "10",
              marginTop: "10",
            }}
          >
            {form &&
              form.via.mejorasSimples.map((mejora, i) => (
                <View
                  key={i}
                  style={{ width: "115", height: "115", marginTop: "10" }}
                >
                  <Image
                    src={
                      mejora.img ||
                      "https://res.cloudinary.com/djcc03pyc/image/upload/v1677714839/userPicture/uy9idcdadxuvsnzpb4sm.png"
                    }
                    style={styles.imageCommonPage1}
                  />
                  <Text
                    style={{
                      fontSize: "10",
                      color: "#fff",
                      marginTop: "10",
                      textAlign: "center",
                      fontFamily: "Helvetica-Bold",
                    }}
                  >
                    {mejora.name}
                  </Text>
                </View>
              ))}
          </View>
        </View>
        .{/* SENVII LINK */}
        <Text
          style={{
            fontSize: "14",
            position: "absolute",
            right: "30",
            bottom: "10",
          }}
        >
          www.senviapp.com
        </Text>
        {/* SENVII LOGO ICON */}
        <View
          style={{
            width: "50",
            height: "50",
            position: "absolute",
            bottom: "10",
            left: "30",
          }}
        >
          <Image src={logo_senvi_icon} style={styles.commonImage} />
        </View>
      </Page>

      {/* Fourth Page */}
      <Page size="A4" orientation="landscape" style={styles.page1}>
        {/* Header Title */}
        <View style={{ marginTop: "20" }}>
          <Text style={styles.titlePage2}>
            Mejoras en la seguridad de la vía
          </Text>
        </View>

        {/* Text recommendations */}
        <View style={{ marginTop: "20" }}>
          <Text style={{ fontSize: "14" }}>
            En base a la información obtenida durante la recopilación de datos
            sobre la señalización actual de su vía.{" "}
            {form && form.via.mejoras.join(" ")}
          </Text>
        </View>

        {/* Graphic recommendations */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            gap: "10",
            marginTop: "50",
          }}
        >
          {form &&
            form.consider.map((up, i) => (
              <View
                key={i}
                style={{
                  width: "175",
                  height: "175",
                  marginTop: "10",
                  backgroundColor: "#795FFF",
                  padding: "25",
                  borderRadius: "15",
                }}
              >
                <Image
                  src={
                    up.img ||
                    "https://res.cloudinary.com/djcc03pyc/image/upload/v1677714839/userPicture/uy9idcdadxuvsnzpb4sm.png"
                  }
                  style={styles.imageCommonPage1}
                />
                <Text
                  style={{
                    fontSize: "10",
                    color: "#fff",
                    marginTop: "10",
                    textAlign: "center",
                    fontFamily: "Helvetica-Bold",
                  }}
                >
                  {up.name}
                </Text>
              </View>
            ))}
        </View>

        {/* SENVII Link */}
        <Text
          style={{
            fontSize: "14",
            position: "absolute",
            right: "30",
            bottom: "10",
          }}
        >
          www.senviapp.com
        </Text>

        {/* SENVII LOGO ICON */}
        <View
          style={{
            width: "50",
            height: "50",
            position: "absolute",
            bottom: "10",
            left: "30",
          }}
        >
          <Image src={logo_senvi_icon} style={styles.commonImage} />
        </View>
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
            <Text style={styles.titlePage5}>Somos una solución digital</Text>
            <Text style={styles.titlePage5}>que ayuda a mejorar la</Text>
            <Text style={styles.titlePage5}>seguridad vial en el Perú.</Text>
          </View>
          <View>
            <Text style={{ color: "#fff", fontWeight: "extralight" }}>
              www.senvii.com
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
            width: "420",
            height: "420",
            position: "absolute",
            right: "10",
            top: "60",
          }}
        >
          <Image src={city2} style={styles.imageCommonPage1} />
        </View>
        <Image src={bg_purple} style={styles.imagePage1} />
      </Page>
    </Document>
  );
};

export default DocumentPDF;
