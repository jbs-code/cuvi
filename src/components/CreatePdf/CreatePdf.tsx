import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import { ICv, IEx, IFa } from "../../Types/ICv";
import RobotoBold from "../../fonts/Roboto-Bold.ttf";
import RobotoLight from "../../fonts/Roboto-Light.ttf";
import RobotoMedium from "../../fonts/Roboto-Medium.ttf";
import RobotoMediumItalic from "../../fonts/Roboto-MediumItalic.ttf";
import RobotoLightItalic from "../../fonts/Roboto-LightItalic.ttf";

type Props = { stateCV: ICv };

export function CreatePdf({ stateCV }: Props) {
  Font.register({
    family: "Roboto",
    fonts: [
      { src: RobotoLight },
      { src: RobotoLightItalic, fontStyle: "italic" },
      { src: RobotoMediumItalic, fontStyle: "medium-italic" },
      { src: RobotoMedium, fontWeight: "medium" },
      { src: RobotoBold, fontWeight: "bold" },
    ],
  });

  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "white",
    },
    principalView: {
      paddingHorizontal: "30px",
      paddingVertical: "30px",
      width: "100%",
      fontFamily: "Roboto",
      fontSize: "11px",
    },

    section: {
      marginTop: "10px",
      borderTop: "1px solid black",
    },

    data_container: {
      width: "100%",
      flexDirection: "row",
      flexWrap: "wrap",
    },

    hb_container: {
      width: "95%",
      marginTop: "10px",
      textAlign: "justify",
    },

    fa_container: {
      marginBottom: "10px",
      width: "100%",
      flexDirection: "row",
      flexWrap: "wrap",
    },

    fa_titulo: {
      fontWeight: "medium",
      marginLeft: "10px",
    },

    fa_fecha: {
      textAlign: "right",
      fontSize: "10px",
      fontStyle: "medium-italic",
      color: "#4d4d4d",
    },

    fa_descripcion: {
      marginLeft: "20px",
      marginTop: "5px",
      textAlign: "justify",
    },

    skills: {
      width: "25%",
      marginBottom: "7px",
      flexDirection: "row",
      paddingHorizontal: "10px",
    },

    nombre: {
      fontSize: "22px",
      textAlign: "center",
      fontWeight: "bold",
    },

    titulo: {
      fontSize: "14px",
      fontWeight: "medium",
      marginBottom: "10px",
      paddingTop: "10px",
    },

    list: {
      marginBottom: "5px",
      textAlign: "justify",
    },

    Items_box: {
      flexDirection: "row",
    },

    guion: {
      marginRight: "5px",
      fontWeight: "medium",
    },
  });
  const {
    contacto,
    perfil,
    habilidadesTecnicas,
    habilidadesBlandas,
    experiencia,
    formacionAcademica,
  } = stateCV;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.principalView}>
          <Text style={styles.nombre}>{stateCV.contacto.nombre}</Text>

          {contacto.nombre !== "" && contacto.email !== "" && (
            <View
              style={[
                styles.section,
                { flexDirection: "row", flexWrap: "wrap" },
              ]}
            >
              <Text style={[styles.titulo, { width: "100%" }]}>Contacto</Text>
              {contacto.localidad && (
                <Text style={[styles.list, { width: "50%" , marginBottom: "2px"}]}>
                  Localidad: {contacto.localidad}
                </Text>
              )}
              {contacto.linkedIn && (
                <Text style={[styles.list, { width: "50%", marginBottom: "2px" }]}>
                  LinkedIn: {contacto.linkedIn}
                </Text>
              )}
              {contacto.email && (
                <Text style={[styles.list, { width: "50%", marginBottom: "2px" }]}>
                  Email: {contacto.email}
                </Text>
              )}
              {contacto.webPersonal && (
                <Text style={[styles.list, { width: "50%", marginBottom: "2px"}]}>
                  Web Personal: {contacto.webPersonal}
                </Text>
              )}
              {contacto.telefono && (
                <Text style={[styles.list, { width: "50%", marginBottom: "2px" }]}>
                  Teléfono: {contacto.telefono}
                </Text>
              )}
            </View>
          )}

          {perfil.perfil !== "" && (
            <View style={styles.section}>
              <Text style={[styles.list, {marginTop: "10px"}]}>{perfil.perfil}</Text>
            </View>
          )}

          {(habilidadesTecnicas.habilidadesTecnicas.length > 0 ||
            habilidadesBlandas.habilidadesBlandas.length > 0) && (
            <View style={styles.section}>
              <Text style={styles.titulo}>Competencias</Text>
              <View style={styles.data_container}>
                {habilidadesTecnicas.habilidadesTecnicas.map(
                  (ht: string, index: number) => (
                    <View key={index} style={styles.skills}>
                      <Text style={styles.guion}>{">"}</Text>
                      <Text>{ht}</Text>
                    </View>
                  )
                )}
              </View>

              <View style={styles.hb_container}>
                {habilidadesBlandas.habilidadesBlandas.map(
                  (hb: string, index: number) => (
                    <View key={index} style={styles.Items_box}>
                      <Text style={styles.guion}>•</Text>
                      <Text style={styles.list}>{hb}</Text>
                    </View>
                  )
                )}
              </View>
            </View>
          )}

          {experiencia.experiencia.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.titulo}>Experiencia</Text>
              <View style={styles.data_container}>
                {experiencia?.experiencia.map((ex: IEx, index: number) => (
                  <View key={index} style={styles.fa_container}>
                    <View style={{ width: "80%" }}>
                      <Text style={styles.fa_titulo}>{ex.puesto}</Text>
                    </View>
                    <View style={{ width: "20%" }}>
                      <Text style={styles.fa_fecha}>{ex.fecha}</Text>
                    </View>
                    <Text style={styles.fa_descripcion}>{ex.descripcion}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {formacionAcademica.formacionAcademica.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.titulo}>Formación académica</Text>
              <View style={styles.data_container}>
                {formacionAcademica?.formacionAcademica.map(
                  (fa: IFa, index: number) => (
                    <View key={index} style={styles.fa_container}>
                      <View style={{ width: "80%" }}>
                        <Text style={styles.fa_titulo}>{fa.titulo}</Text>
                      </View>
                      <View style={{ width: "20%" }}>
                        <Text style={styles.fa_fecha}>{fa.fecha}</Text>
                      </View>
                      <Text style={styles.fa_descripcion}>
                        {fa.descripcion}
                      </Text>
                    </View>
                  )
                )}
              </View>
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
}
