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
        recomendations.push([
          {
            img: "https://res.cloudinary.com/djcc03pyc/image/upload/v1678296219/userPicture/segur_termo_extrusion_d60sdi.png",
            name: "Aplicación de pintura Termoplástica Extrusión",
          },
        ]);
      } else if (findSignalingTypes(1, 4)) {
        recomendations.push([
          {
            img: "https://res.cloudinary.com/djcc03pyc/image/upload/v1678296247/userPicture/segur_termo_spray_m9jh7g.png",
            name: "Aplicación de pintura Termoplástica Spray",
          },
        ]);
      } else if (findSignalingTypes(2, 3)) {
        recomendations.push([
          {
            img: "https://res.cloudinary.com/djcc03pyc/image/upload/v1678296219/userPicture/segur_termo_extrusion_d60sdi.png",
            name: "Aplicación de pintura Termoplástica Extrusión",
          },
        ]);
      }
      if (zone === "autopista" && question.response === "yes") {
        recomendations.push([
          {
            img: "https://res.cloudinary.com/djcc03pyc/image/upload/v1678296224/userPicture/segur_Termo_preformado_zg91m0.png",
            name: "Termoplástico preformado",
          },
        ]);
      }
    }
    if (question.id === 2 && question.response === "yes") {
      recomendations.push("Sellado de fisuras");
    }
    if (question.id === 3 && question.response === "yes") {
      recomendations.push([
        {
          img: "https://res.cloudinary.com/djcc03pyc/image/upload/v1678296145/userPicture/qww76dosikli7sl0pjvz.png",
          name: "Banda transversal Termoplástica",
        },
      ]);
    }
    if (question.id === 4 && question.response === "yes") {
      recomendations.push([
        "Aplicación de Termoplástico  Rib Line",
        {
          url: "https://res.cloudinary.com/djcc03pyc/image/upload/v1678296281/userPicture/sen_tachas_reflectivas_fsslvo.png",
          name: "Instalación de tachas solares",
        },
      ]);
    }
  });
  return recomendations;
  // 1 || 4
};
// unicos casos excepcionales:
// 0/400
