export const dataOptions = {
  zones: [
    {
      name: "urbana",
      transit: [
        { name: "0/400" },
        { name: "400/2000" },
        { name: "2000/4000" },
        { name: "4000/+" },
      ],
    },
    {
      name: "autopista",
      transit: [{ name: "4000/6000" }, { name: "6000/+" }],
    },
    {
      name: "rural",
      transit: [{ name: "0/400" }, { name: "400/2000" }, { name: "2000/4000" }],
    },
  ],
  signalingTypes: [
    {
      id: 1,
      content: "Líneas continuas y discontinuas",
      notAvailableFor: "",
    },
    {
      id: 2,
      content: "Cruceros peatonales y líneas de pare",
      notAvailableFor: "",
    },
    {
      id: 3,
      content: "Símbolos, flechas y letras",
      notAvailableFor: "",
    },
    {
      id: 4,
      content: "Intersecciones y ovalos",
      notAvailableFor: "0/400",
    },
  ],
};
const mejoras = {
  "Señales preventivas": {
    name: "Señales preventivas",
    img: "https://res.cloudinary.com/djcc03pyc/image/upload/v1678296264/senvii/sen_senal_preventiva_smx7im.png",
  },
  "Instalación de tachas": {
    name: "Instalación de tachas",
    img: "https://res.cloudinary.com/djcc03pyc/image/upload/v1678296281/senvii/sen_tachas_reflectivas_fsslvo.png",
  },
  "Instalación de gibas": {
    name: "Instalación de gibas",
    img: "https://res.cloudinary.com/djcc03pyc/image/upload/v1678392466/senvii/sen_giba_reductor_velocidad_rrwdri.png",
  },
  "Señales reglamentarias": {
    name: "Señales reglamentarias",
    img: "https://res.cloudinary.com/djcc03pyc/image/upload/v1678296272/senvii/sen_senal_reglamentaria_fo2dno.png",
  },
  "Señales informativas": {
    name: "Señales informativas",
    img: "https://res.cloudinary.com/djcc03pyc/image/upload/v1678296259/senvii/sen_senal_informativa_kyvoff.png",
  },
  "Señales de servicios generales": {
    name: "Señales de servicios generales",
    img: "https://res.cloudinary.com/djcc03pyc/image/upload/v1678296275/senvii/sen_senal_servicio_general_nwea2b.png",
  },
};

const descriptions = [
  {
    id: "urbana;0/400",
    nombre: "Locales",
    image:
      "https://res.cloudinary.com/djcc03pyc/image/upload/v1678390397/senvii/grafico_zona_urbana_1_colectoras_gqweei.png",
    descripcion:
      "Sirven a los distritos y su función principal es permitir el acceso a las propiedades urbanas. La mayoría de las vías locales tienen dos carriles para ambas direcciones y generalmente son llamadas calles o jirones",
    mejoras: [
      "Se recomienda repintados periódicos cada 4 o 6 meses de la señalización en el pavimento para guiar el tránsito de conductores y peatones.",
      "Mantener un adecuado uso de señales de tránsito para el beneficio de la ciudadanía.",
      "Para la mejora de la vía se recomienda materiales que garanticen la durabilidad de la señalización.",
    ],
    mejorasSimples: [
      mejoras["Señales preventivas"],
      mejoras["Instalación de tachas"],
      mejoras["Instalación de gibas"],
      mejoras["Señales reglamentarias"],
      mejoras["Señales informativas"],
    ],
  },
  {
    id: "urbana;400/2000",
    nombre: "Colectoras",
    image:
      "https://res.cloudinary.com/djcc03pyc/image/upload/v1678390408/senvii/grafico_zona_urbana_2_colectoras_aheent.png",
    descripcion:
      "Están conectadas con las vías locales por intersecciones a nivel para las entrada y las salidas a nivel generalmente no semaforizadas y su función es conectar el tránsito de estas vías con las vías arteriales. Generalmente se llaman avenidas y tienen un total de 4 carriles para ambas direcciones.",
    mejoras: [
      "Se recomienda repintados periódicos cada 4 o 6 meses de la señalización en el pavimento para guiar el tránsito de conductores y peatones.",
      "Mantener un adecuado uso de señales de tránsito para el beneficio de la ciudadanía.",
      "Para la mejora de la vía se recomienda materiales que garanticen la durabilidad de la señalización.",
    ],
    mejorasSimples: [
      mejoras["Señales preventivas"],
      mejoras["Instalación de tachas"],
      mejoras["Instalación de gibas"],
      mejoras["Señales reglamentarias"],
      mejoras["Señales informativas"],
    ],
  },
  {
    id: "urbana;2000/4000",
    nombre: "Arteriales",
    image:
      "https://res.cloudinary.com/djcc03pyc/image/upload/v1678390413/senvii/grafico_zona_urbana_3_Arteriales_hilgex.png",
    descripcion:
      "Tienen la función de servir al tránsito originado en las vías colectoras y son llamadas Avenidas o Corredores Viales. Las intersecciones de las vías arteriales con las vías expresas o entre dos vías arteriales son a desnivel.  Complementan el ordenamiento de la mano de semáforos y policias.",
    mejoras: [
      "Se recomienda repintados periódicos cada 4 o 6 meses de la señalización en el pavimento para guiar el tránsito de conductores y peatones.",
      "Mantener un adecuado uso de señales de tránsito para el beneficio de la ciudadanía.",
      "Para la mejora de la vía se recomienda materiales que garanticen la durabilidad de la señalización.",
    ],
    mejorasSimples: [
      mejoras["Señales preventivas"],
      mejoras["Instalación de tachas"],
      mejoras["Señales reglamentarias"],
      mejoras["Señales informativas"],
    ],
  },
  {
    id: "urbana;4000/+",
    nombre: "Express",
    image:
      "https://res.cloudinary.com/djcc03pyc/image/upload/v1678390426/senvii/grafico_zona_urbana_4_Expresa_gctrvr.png",
    descripcion:
      "Las vías expresas son para el tránsito de paso, altos volúmenes y considerable velocidad en las que las entradas y salidas son controladas por intercambios, que se conectan con otras vías expresas o vías arteriales por intersecciones a desnivel. De acuerdo a las características de uso, existen 3 tipos de vías expresas como se explica a continuación.",
    mejoras: [
      "Se recomienda repintados periódicos cada 4 o 6 meses de la señalización en el pavimento para guiar el tránsito de conductores y peatones.",
      "Mantener un adecuado uso de señales de tránsito para el beneficio de la ciudadanía.",
      "Para la mejora de la vía se recomienda materiales que garanticen la durabilidad de la señalización.",
    ],
    mejorasSimples: [
      mejoras["Señales preventivas"],
      mejoras["Instalación de tachas"],
      mejoras["Instalación de gibas"],
      mejoras["Señales reglamentarias"],
      mejoras["Señales informativas"],
    ],
  },
  {
    id: "autopista;4000/6000",
    nombre: "Autopista de 2° Clase",
    image:
      "https://res.cloudinary.com/djcc03pyc/image/upload/v1678390374/senvii/grafico_autopista_2da_clase_mn9eij.png",
    descripcion:
      "Son carreteras con un IMDA entre 6.000 y 4.001 veh/día, de calzadas divididas por medio de un separador central que puede variar de 6,00 m hasta 7,00 m, en cuyo caso se instalará un sistema de contención vehicular; cada una de las calzadas debe contar con dos o más carriles de 3,60 m de ancho como mínimo, con control parcial de accesos (ingresos y salidas) que proporcionan flujos vehiculares continuos; pueden tener cruces o pasos vehiculares a nivel y puentes peatonales en zonas urbanas. La superficie de rodadura de estas carreteras debe ser pavimentada",
    mejoras: [
      "Se recomienda repintados periódicos cada 4 o 6 meses de la señalización en el pavimento para guiar el tránsito de conductores y peatones.",
      "Mantener un adecuado uso de señales de tránsito para el beneficio de la ciudadanía.",
      "Para la mejora de la vía se recomienda materiales que garanticen la durabilidad de la señalización.",
    ],
    mejorasSimples: [
      mejoras["Señales preventivas"],
      mejoras["Instalación de tachas"],
      mejoras["Señales de servicios generales"],
      mejoras["Señales reglamentarias"],
      mejoras["Señales informativas"],
    ],
  },
  {
    id: "autopista;6000/+",
    nombre: "Autopista de 1° Clase",
    image:
      "https://res.cloudinary.com/djcc03pyc/image/upload/v1678390365/senvii/grafico_autopista_1ra_clase_kbhjhd.png",
    descripcion:
      "Son carreteras con IMDA (Índice Medio Diario Anual) mayor a 6.000 veh/día, de calzadas divididas por medio de un separador central mínimo de 6,00 m; cada una de las calzadas debe contar con dos o más carriles de 3,60 m de ancho como mínimo, con control total de accesos (ingresos y salidas) que proporcionan flujos vehiculares continuos, sin cruces o pasos a nivel y con puentes peatonales en zonas urbanas. La superficie de rodadura de estas carreteras debe ser pavimentada",
    mejoras: [
      "Se recomienda repintados periódicos cada 4 o 6 meses de la señalización en el pavimento para guiar el tránsito de conductores y peatones.",
      "Mantener un adecuado uso de señales de tránsito para el beneficio de la ciudadanía.",
      "Para la mejora de la vía se recomienda materiales que garanticen la durabilidad de la señalización.",
    ],
    mejorasSimples: [
      mejoras["Señales preventivas"],
      mejoras["Instalación de tachas"],
      mejoras["Señales de servicios generales"],
      mejoras["Señales informativas"],
      mejoras["Señales reglamentarias"],
    ],
  },
  {
    id: "rural;0/400",
    nombre: "Carretera de 3ra clase",
    image:
      "https://res.cloudinary.com/djcc03pyc/image/upload/v1678390379/senvii/grafico_carretera_rural_1_clase_xqicod.png",
    descripcion:
      "Son carreteras con IMDA menores a 400 veh/día, con calzada de dos carriles de 3,00 m de ancho como mínimo. De manera excepcional estas vías podrán tener carriles hasta de 2,50 m, contando con el sustento técnico correspondiente. Estas carreteras pueden funcionar con soluciones denominadas básicas o económicas, consistentes en la aplicación de estabilizadores de suelos, emulsiones asfálticas y/o micro pavimentos; o en afirmado, en la superficie de rodadura. La superficie de rodadura de estas carreteras debe ser pavimentada.",
    mejoras: [
      "Se recomienda repintados periódicos cada 4 o 6 meses de la señalización en el pavimento para guiar el tránsito de conductores y peatones.",
      "Mantener un adecuado uso de señales de tránsito para el beneficio de la ciudadanía.",
      "Para la mejora de la vía se recomienda materiales que garanticen la durabilidad de la señalización.",
    ],
    mejorasSimples: [
      mejoras["Señales preventivas"],
      mejoras["Instalación de tachas"],
      mejoras["Instalación de gibas"],
      mejoras["Señales reglamentarias"],
      mejoras["Señales informativas"],
    ],
  },
  {
    id: "rural;400/2000",
    nombre: "Carretera de 2da clase",
    image:
      "https://res.cloudinary.com/djcc03pyc/image/upload/v1678390387/senvii/grafico_carretera_rural_2_clase_k2gzuk.png",
    descripcion:
      "Son carreteras con un IMDA entre 4.000 y 2.001 veh/día, con una calzada de dos carriles de 3,60 m de ancho como mínimo. Puede tener cruces o pasos vehiculares a nivel y en zonas urbanas es recomendable que se cuente con puentes peatonales o en su defecto con dispositivos de seguridad vial, que permitan velocidades de operación, con mayor seguridad. La superficie de rodadura de estas carreteras debe ser pavimentada.",
    mejoras: [
      "Se recomienda repintados periódicos cada 4 o 6 meses de la señalización en el pavimento para guiar el tránsito de conductores y peatones.",
      "Mantener un adecuado uso de señales de tránsito para el beneficio de la ciudadanía.",
      "Para la mejora de la vía se recomienda materiales que garanticen la durabilidad de la señalización.",
    ],
    mejorasSimples: [
      mejoras["Señales preventivas"],
      mejoras["Instalación de tachas"],
      mejoras["Instalación de gibas"],
      mejoras["Señales reglamentarias"],
      mejoras["Señales informativas"],
    ],
  },
  {
    id: "rural;2000/4000",
    nombre: "Carretera 1ra clase",
    image:
      "https://res.cloudinary.com/djcc03pyc/image/upload/v1678390392/senvii/grafico_carretera_rural_3_clase_wgnpjh.png",
    descripcion:
      "Son carreteras con un IMDA entre 4.000 y 2.001 veh/día, con una calzada de dos carriles de 3,60 m de ancho como mínimo. Puede tener cruces o pasos vehiculares a nivel y en zonas urbanas es recomendable que se cuente con puentes peatonales o en su defecto con dispositivos de seguridad vial, que permitan velocidades de operación, con mayor seguridad. La superficie de rodadura de estas carreteras debe ser pavimentada.",
    mejoras: [
      "Se recomienda repintados periódicos cada 4 o 6 meses de la señalización en el pavimento para guiar el tránsito de conductores y peatones.",
      "Mantener un adecuado uso de señales de tránsito para el beneficio de la ciudadanía.",
      "Para la mejora de la vía se recomienda materiales que garanticen la durabilidad de la señalización.",
    ],
    mejorasSimples: [
      mejoras["Señales preventivas"],
      mejoras["Instalación de tachas"],
      mejoras["Señales reglamentarias"],
      mejoras["Señales informativas"],
    ],
  },
];

export const getAvailableSignaling = ({ transit }) => {
  return dataOptions.signalingTypes.filter(
    (type) => !type.notAvailableFor.includes(transit)
  );
};
export const getTransitOptions = ({ zone }) => {
  return dataOptions.zones.find((obj) => obj.name === zone)?.transit;
};

export const getinitialForm = () => ({
  zone: "",
  transit: "",
  signalingTypes: [],
  consider: [],
});

export const questions = [
  {
    id: 1,
    content:
      "¿La durabilidad en la pintura en la señalización vial es poca y se desgasta rápidamente?",
    availableFor: [
      "urbana-400/2000",
      "urbana-2000/4000",
      "urbana-4000/+",
      "autopista-4000/6000",
      "autopista-6000/+",
      "rural-400/2000",
      "rural-2000/4000",
    ],
  },
  {
    id: 2,
    content: "¿El pavimento presenta grieta o fracturas?",
    availableFor: [
      "urbana-400/2000",
      "urbana-2000/4000",
      "urbana-4000/+",
      "autopista-4000/6000",
      "autopista-6000/+",
      "rural-400/2000",
      "rural-2000/4000",
    ],
  },
  {
    id: 3,
    content:
      "¿La vía cruza son intersecciones como acceso a ciudades, pueblos y óvalos?",
    availableFor: [
      "urbana-4000/+",
      "autopista-4000/6000",
      "autopista-6000/+",
      "rural-2000/4000",
    ],
  },
  {
    id: 4,
    content:
      "Presenta zonas de accidentes recurrentes causados por niebla, curvas peligrosas o similares?",
    availableFor: [
      "autopista-4000/6000",
      "autopista-6000/+",
      "rural-400/2000",
      "rural-2000/4000",
    ],
  },
];

export const getAvailableQuestions = ({ zone, transit }) => {
  if (transit === "0/400") {
    return [];
  }
  return questions.filter((question) => {
    return !!question.availableFor.find((key) => key === `${zone}-${transit}`);
  });
};

export const getSelectionDescription = ({ zone, transit }) => {
  return descriptions.find((item) => item.id === `${zone};${transit}`);
};

//recieves form
export const getConsiderations = ({ signalingTypes, questions, zone }) => {
  if (!questions.length) {
    return [{ img: "", name: "Aplicación de pintura acrílica" }];
  }
  const findSignalingTypes = (...ids) => {
    signalingTypes.find((type) => ids.join(";").includes(type.id));
  };
  const recomendations = [];
  questions.forEach((question) => {
    if (question.id === 1) {
      if (question.response === "no") {
        recomendations.push({
          img: "https://res.cloudinary.com/djcc03pyc/image/upload/v1678296219/userPicture/segur_termo_extrusion_d60sdi.png",
          name: "Aplicación de pintura Termoplástica Extrusión",
        });
      } else if (findSignalingTypes(1, 4)) {
        recomendations.push({
          img: "https://res.cloudinary.com/djcc03pyc/image/upload/v1678296247/userPicture/segur_termo_spray_m9jh7g.png",
          name: "Aplicación de pintura Termoplástica Spray",
        });
      } else if (findSignalingTypes(2, 3)) {
        recomendations.push({
          img: "https://res.cloudinary.com/djcc03pyc/image/upload/v1678296219/userPicture/segur_termo_extrusion_d60sdi.png",
          name: "Aplicación de pintura Termoplástica Extrusión",
        });
      }
      if (zone === "autopista" && question.response === "yes") {
        recomendations.push({
          img: "https://res.cloudinary.com/djcc03pyc/image/upload/v1678296224/userPicture/segur_Termo_preformado_zg91m0.png",
          name: "Termoplástico preformado",
        });
      }
    }
    if (question.id === 2 && question.response === "yes") {
      recomendations.push({
        img: "https://res.cloudinary.com/djcc03pyc/image/upload/v1678390335/senvii/segur_sellado_fisuras_gnihtv.png",
        name: "Sellado de fisuras",
      });
    }
    if (question.id === 3 && question.response === "yes") {
      recomendations.push({
        img: "https://res.cloudinary.com/djcc03pyc/image/upload/v1678296145/senvii/qww76dosikli7sl0pjvz.png",
        name: "Banda Transversal Termoplástica",
      });
    }
    if (question.id === 4 && question.response === "yes") {
      recomendations.push(
        {
          img: "https://res.cloudinary.com/djcc03pyc/image/upload/v1678390351/senvii/segur_rib_line_fsznbj.png",
          name: "Aplicación de Termoplástico  Rib Line",
        },
        {
          img: "https://res.cloudinary.com/djcc03pyc/image/upload/v1678390324/senvii/segur_tacha_solar_ilu05x.png",
          name: "Instalación de tachas solares",
        }
      );
    }
  });
  return recomendations;
  // 1 || 4
};
// unicos casos excepcionales:
// 0/400
