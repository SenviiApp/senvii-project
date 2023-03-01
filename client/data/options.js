export const dataOptions = {
  zone: [
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
      name: "type1",
      content: "Líneas continuas y discontinuas",
      notAvailableFor: "null",
    },
    {
      name: "type2",
      content: "Cruceros peatonales y líneas de pare",
      notAvailableFor: "null",
    },
    {
      name: "type1",
      content: "Símbolos, flechas y letras",
      notAvailableFor: "null",
    },
    {
      name: "type1",
      content: "Intersecciones y ovalos",
      notAvailableFor: "rural;urbana",
    },
  ],
};

export const getinitialForm = (zone, transit) => ({
  zone,
  transit,
  signalingTypes: [],
  consider: [],
});

export const questions = [
  {
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
    response: {
      yes: "",
      no: "Aplicación de pintura acrílica",
    },
  },
  {
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

const getAvailableQuestions = (zone, transit) => {
  if (transit === "0/400") {
    //return the direct considerations
    return [];
  }
  return questions.filter((question) => {
    return !!question.availableFor.find((key) => key === `${zone}-${transit}`);
  });
};

// unicos casos excepcionales:
// 0/400
