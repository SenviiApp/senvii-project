const data = {
  urbana: {
    name: "zona urbana",
    descripcion:
      "Son consideradas vías urbanas, las calles o plazas que componen la red interior de comunicaciones de una población.",
    velocidades: [
      {
        name: "Calles y jirones",
        descripcion: "máximo 30 Km/h",
      },
      ,
      { name: "Avenidas", descripcion: "máximo 50 km/h" },

      {
        name: "Zonas comerciales",
        descripcion: "máximo 30 km/h",
      },
      ,
      {
        name: "Zonas residenciales",
        descripcion: "máximo 50km/h",
      },
      ,
    ],
    transito: [
      {
        id: "cuatrocientos",
        name: "Menor a 400",
        via: {
          nombre: "Locales",
          descripcion:
            "Sirven a los distritos y su función principal es permitir el acceso a las propiedades urbanas. La mayoría de las vías locales tienen dos carriles para ambas direcciones y generalmente son llamadas calles o jirones",
          mejoras: [
            "Se recomienda repintados periódicos cada 4 o 6 meses de la señalización en el pavimento para guiar el tránsito de conductores y peatones.",
            "Mantener un adecuado uso de señales de tránsito para el beneficio de la ciudadanía.",
            "Para la mejora de la vía se recomienda materiales que garanticen la durabilidad de la señalización.",
          ],
          mejorasSimples: [
            "Señales preventivas",
            "Instalción de tachas",
            "Instalación de gibas",
            "Señales reglamentarias",
            "Señales informativas",
          ],
        },
        señalizaciones: [
          {
            nombre: "Líneas continuas y discontinuas",
            mejoras: ["Aplicación de pintura acrílica"],
          },
          {
            nombre: "Cruceros peatonales y líneas de pare",
            mejoras: ["Aplicación de pintura acrílica"],
          },
          {
            nombre: "Símbolos, flechas y letras",
            mejoras: ["Aplicación de pintura acrílica"],
          },
        ],
      },
      {
        id: "cuatrocientosAdosmil",
        name: "Entre 401 y 2000",
        via: {
          nombre: "Colectoras",
          descripcion:
            "Están conectadas con las vías locales por intersecciones a nivel para las entrada y las salidas a nivel generalmente no semaforizadas y su función es conectar el tránsito de estas vías con las vías arteriales. Generalmente se llaman avenidas y tienen un total de 4 carriles para ambas direcciones.",
          mejoras: [
            "Se recomienda repintados periódicos cada 4 o 6 meses de la señalización en el pavimento para guiar el tránsito de conductores y peatones.",
            "Mantener un adecuado uso de señales de tránsito para el beneficio de la ciudadanía.",
            "Para la mejora de la vía se recomienda materiales que garanticen la durabilidad de la señalización.",
          ],
          mejorasSimples: [
            "Señales preventivas",
            "Instalción de tachas",
            "Instalación de gibas",
            "Señales reglamentarias",
            "Señales informativas",
          ],
        },
        señalizaciones: [
          {
            nombre: "Líneas continuas y discontinuas",
            mejoras: [
              {
                pregunta:
                  "¿La durabilidad en la pintura en la señalización vial es poca y se desgasta rápidamente?",
                si: "Aplicación de pintura Termoplástica Spray",
                no: "Aplicación de pintura acrílica",
              },
              {
                pregunta: "¿El pavimento presenta grieta o fracturas?",
                si: "Sellado de fisuras",
                no: null,
              },
            ],
          },
          {
            nombre: "Cruceros peatonales y líneas de pare",
            mejoras: [
              {
                pregunta:
                  "¿La durabilidad en la pintura en la señalización vial es poca y se desgasta rápidamente?",
                si: "Aplicación de pintura Termoplástica Extrusión",
                no: "Aplicación de pintura acrílica",
              },
              {
                pregunta: "¿El pavimento presenta grieta o fracturas?",
                si: "Sellado de fisuras",
                no: null,
              },
            ],
          },
          {
            nombre: "Símbolos, flechas y letras",
            mejoras: [
              {
                pregunta:
                  "¿La durabilidad en la pintura en la señalización vial es poca y se desgasta rápidamente?",
                si: "Aplicación de pintura Termoplástica Extrusión",
                no: "Aplicación de pintura acrílica",
              },
              {
                pregunta: "¿El pavimento presenta grieta o fracturas?",
                si: "Sellado de fisuras",
                no: null,
              },
            ],
          },
          {
            nombre: "Intersecciones y óvalos",
            mejoras: [
              {
                pregunta:
                  "¿La durabilidad en la pintura en la señalización vial es poca y se desgasta rápidamente?",
                si: "Aplicación de pintura Termoplástica Spray",
                no: "Aplicación de pintura acrílica",
              },
              {
                pregunta: "¿El pavimento presenta grieta o fracturas?",
                si: "Sellado de fisuras",
                no: null,
              },
            ],
          },
        ],
      },
      {
        id: "dosmilAcuatromil",
        name: "Entre 2001 a 4000",
        via: {
          nombre: "Arteriales",
          descripcion:
            "Tienen la función de servir al tránsito originado en las vías colectoras y son llamadas Avenidas o Corredores Viales. Las intersecciones de las vías arteriales con las vías expresas o entre dos vías arteriales son a desnivel.  Complementan el ordenamiento de la mano de semáforos y policias.",
          mejoras: [
            "Se recomienda repintados periódicos cada 4 o 6 meses de la señalización en el pavimento para guiar el tránsito de conductores y peatones.",
            "Mantener un adecuado uso de señales de tránsito para el beneficio de la ciudadanía.",
            "Para la mejora de la vía se recomienda materiales que garanticen la durabilidad de la señalización.",
          ],
          mejorasSimples: [
            "Señales preventivas",
            "Instalción de tachas",
            "Señales reglamentarias",
            "Señales informativas",
          ],
        },
        señalizaciones: [
          {
            nombre: "Líneas continuas y discontinuas",
            mejoras: [
              {
                pregunta:
                  "¿La durabilidad en la pintura en la señalización vial es poca y se desgasta rápidamente?",
                si: "Aplicación de pintura Termoplástica Spray",
                no: "Aplicación de pintura acrílica",
              },
              {
                pregunta: "¿El pavimento presenta grieta o fracturas?",
                si: "Sellado de fisuras",
                no: null,
              },
            ],
          },
          {
            nombre: "Cruceros peatonales y líneas de pare",
            mejoras: [
              {
                pregunta:
                  "¿La durabilidad en la pintura en la señalización vial es poca y se desgasta rápidamente?",
                si: [
                  "Aplicación de pintura Termoplástica Extrusión",
                  "Termoplástico preformado",
                ],
                no: "Aplicación de pintura acrílica",
              },
              {
                pregunta: "¿El pavimento presenta grieta o fracturas?",
                si: "Sellado de fisuras",
                no: null,
              },
            ],
          },
          {
            nombre: "Símbolos, flechas y letras",
            mejoras: [
              {
                pregunta:
                  "¿La durabilidad en la pintura en la señalización vial es poca y se desgasta rápidamente?",
                si: [
                  "Aplicación de pintura Termoplástica Extrusión",
                  "Termoplástico preformado",
                ],
                no: "Aplicación de pintura acrílica",
              },
              {
                pregunta: "¿El pavimento presenta grieta o fracturas?",
                si: "Sellado de fisuras",
                no: null,
              },
            ],
          },
          {
            nombre: "Intersecciones y óvalos",
            mejoras: [
              {
                pregunta:
                  "¿La durabilidad en la pintura en la señalización vial es poca y se desgasta rápidamente?",
                si: "Aplicación de pintura Termoplástica Spray",
                no: "Aplicación de pintura acrílica",
              },
              {
                pregunta: "¿El pavimento presenta grieta o fracturas?",
                si: "Sellado de fisuras",
                no: null,
              },
            ],
          },
        ],
      },
      {
        id: "masCuatromil",
        name: "Más de 4000",
        via: {
          nombre: "Express",
          descripcion:
            "Las vías expresas son para el tránsito de paso, altos volúmenes y considerable velocidad en las que las entradas y salidas son controladas por intercambios, que se conectan con otras vías expresas o vías arteriales por intersecciones a desnivel. De acuerdo a las características de uso, existen 3 tipos de vías expresas como se explica a continuación.",
          mejoras: [
            "Se recomienda repintados periódicos cada 4 o 6 meses de la señalización en el pavimento para guiar el tránsito de conductores y peatones.",
            "Mantener un adecuado uso de señales de tránsito para el beneficio de la ciudadanía.",
            "Para la mejora de la vía se recomienda materiales que garanticen la durabilidad de la señalización.",
          ],
          mejorasSimples: [
            "Señales preventivas",
            "Instalción de tachas",
            "Instalación de gibas",
            "Señales reglamentarias",
            "Señales informativas",
          ],
        },
        señalizaciones: [
          {
            nombre: "Líneas continuas y discontinuas",
            mejoras: [
              {
                pregunta:
                  "¿La durabilidad en la pintura en la señalización vial es poca y se desgasta rápidamente?",
                si: "Banda transversa termoplástica",
                no: null,
              },
              {
                pregunta:
                  "¿La vía cruza son intersecciones como acceso a ciudades, pueblos y óvalos?",
                si: "Banda transversal Termoplástica",
                no: null,
              },
              {
                pregunta: "¿El pavimento presenta grieta o fracturas?",
                si: "Sellado de fisuras",
                no: null,
              },
            ],
          },
          {
            nombre: "Cruceros peatonales y líneas de pare",
            mejoras: [
              {
                pregunta:
                  "¿La durabilidad en la pintura en la señalización vial es poca y se desgasta rápidamente?",
                si: "Aplicación de pintura Termoplástica Extrusión",
                no: "Aplicación de pintura acrílica",
              },
              {
                pregunta:
                  "¿La vía cruza son intersecciones como acceso a ciudades, pueblos y óvalos?",
                si: "Banda transversal termoplástica",
                no: null,
              },
              {
                pregunta: "¿El pavimento presenta grieta o fracturas?",
                si: "Sellado de fisuras",
                no: null,
              },
            ],
          },
          {
            nombre: "Símbolos, flechas y letras",
            mejoras: [
              {
                pregunta:
                  "¿La durabilidad en la pintura en la señalización vial es poca y se desgasta rápidamente?",
                si: [
                  "Aplicación de pintura Termoplástica Extrusión",
                  "Termoplástico preformado",
                ],
                no: "Aplicación de pintura acrílica",
              },
              {
                pregunta:
                  "¿La vía cruza son intersecciones como acceso a ciudades, pueblos y óvalos?",
                si: "Banda transversal termoplástica",
                no: null,
              },
              {
                pregunta: "¿El pavimento presenta grieta o fracturas?",
                si: "Sellado de fisuras",
                no: null,
              },
            ],
          },
          {
            nombre: "Intersecciones y óvalos",
            mejoras: [
              {
                pregunta:
                  "¿La durabilidad en la pintura en la señalización vial es poca y se desgasta rápidamente?",
                si: "Aplicación de pintura Termoplástica Spray",
                no: "Aplicación de pintura acrílica",
              },
              {
                pregunta:
                  "¿La vía cruza son intersecciones como acceso a ciudades, pueblos y óvalos?",
                si: "Banda transversal termoplástica",
                no: null,
              },
              {
                pregunta: "¿El pavimento presenta grieta o fracturas?",
                si: "Sellado de fisuras",
                no: null,
              },
            ],
          },
        ],
      },
    ],
  },
  // =========================== AUTOPISTA =================================
  autopista: {
    descripcion:
      "Son consideradas vías urbanas, las calles o plazas que componen la red interior de comunicaciones de una población.",
    velocidades: [
      {
        name: "Calles y jirones",
        descripcion: "máximo 30 Km/h",
      },
      ,
      { name: "Avenidas", descripcion: "máximo 50 km/h" },

      {
        name: "Zonas comerciales",
        descripcion: "máximo 30 km/h",
      },
      ,
      {
        name: "Zonas residenciales",
        descripcion: "máximo 50km/h",
      },
      ,
    ],
    transito: [
      {
        id: "cuatromilAseismil",
        name: "4000 a 6000",
        via: {
          nombre: "Autopista de 2° Clase",
          descripcion:
            "Son carreteras con un IMDA entre 6.000 y 4.001 veh/día, de calzadas divididas por medio de un separador central que puede variar de 6,00 m hasta 7,00 m, en cuyo caso se instalará un sistema de contención vehicular; cada una de las calzadas debe contar con dos o más carriles de 3,60 m de ancho como mínimo, con control parcial de accesos (ingresos y salidas) que proporcionan flujos vehiculares continuos; pueden tener cruces o pasos vehiculares a nivel y puentes peatonales en zonas urbanas. La superficie de rodadura de estas carreteras debe ser pavimentada",
          mejoras: [
            "Se recomienda repintados periódicos cada 4 o 6 meses de la señalización en el pavimento para guiar el tránsito de conductores y peatones.",
            "Mantener un adecuado uso de señales de tránsito para el beneficio de la ciudadanía.",
            "Para la mejora de la vía se recomienda materiales que garanticen la durabilidad de la señalización.",
          ],
          mejorasSimples: [
            "Señales preventivas",
            "Instalción de tachas",
            "Señales de servicios generales",
            "Señales reglamentarias",
            "Señales informativas",
          ],
        },
        señalizaciones: [
          {
            nombre: "Líneas continuas y discontinuas",
            mejoras: [
              {
                pregunta:
                  "¿La durabilidad en la pintura en la señalización vial es poca y se desgasta rápidamente?",
                si: "Aplicación de pintura Termoplástica Spray",
                no: "Aplicación de pintura acrílica",
              },
              {
                pregunta:
                  "¿La vía cruza son intersecciones como acceso a ciudades, pueblos y óvalos?",
                si: "Banda transversal Termoplástica",
                no: null,
              },
              {
                pregunta: "¿El pavimento presenta grieta o fracturas?",
                si: "Sellado de fisuras",
                no: null,
              },
              {
                pregunta:
                  "Presenta zonas de accidentes recurrentes causados por niebla, curvas peligrosas o similares",
                si: [
                  "Aplicación de Termoplástico Rib Line",
                  "Instalación de tachas solares",
                ],
                no: null,
              },
            ],
          },
          {
            nombre: "Cruceros peatonales y líneas de pare",
            mejoras: [
              {
                pregunta:
                  "¿La durabilidad en la pintura en la señalización vial es poca y se desgasta rápidamente?",
                si: [
                  "Aplicación de pintura Termoplástica Extrusión",
                  "Termoplástico preformado",
                ],
                no: "Aplicación de pintura acrílica",
              },
              {
                pregunta:
                  "¿La vía cruza son intersecciones como acceso a ciudades, pueblos y óvalos?",
                si: "Banda transversal Termoplástica",
                no: null,
              },
              {
                pregunta: "¿El pavimento presenta grieta o fracturas?",
                si: "Sellado de fisuras",
                no: null,
              },
              {
                pregunta:
                  "Presenta zonas de accidentes recurrentes causados por niebla, curvas peligrosas o similares",
                si: [
                  "Aplicación de Termoplástico Rib Line",
                  "Instalación de tachas solares",
                ],
                no: null,
              },
            ],
          },
          {
            nombre: "Símbolos, flechas y letras",
            mejoras: [
              {
                pregunta:
                  "¿La durabilidad en la pintura en la señalización vial es poca y se desgasta rápidamente?",
                si: [
                  "Aplicación de pintura Termoplástica Extrusión",
                  "Termoplástico preformado",
                ],
                no: "Aplicación de pintura acrílica",
              },
              {
                pregunta:
                  "¿La vía cruza son intersecciones como acceso a ciudades, pueblos y óvalos?",
                si: "Banda transversal Termoplástica",
                no: null,
              },
              {
                pregunta: "¿El pavimento presenta grieta o fracturas?",
                si: "Sellado de fisuras",
                no: null,
              },
              {
                pregunta:
                  "Presenta zonas de accidentes recurrentes causados por niebla, curvas peligrosas o similares",
                si: [
                  "Aplicación de Termoplástico Rib Line",
                  "Instalación de tachas solares",
                ],
                no: null,
              },
            ],
          },
          {
            nombre: "Intersecciones y óvalos",
            mejoras: [
              {
                pregunta:
                  "¿La durabilidad en la pintura en la señalización vial es poca y se desgasta rápidamente?",
                si: "Aplicación de pintura Termoplástica Spray",
                no: "Aplicación de pintura acrílica",
              },
              {
                pregunta:
                  "¿La vía cruza son intersecciones como acceso a ciudades, pueblos y óvalos?",
                si: "Banda transversal Termoplástica",
                no: null,
              },
              {
                pregunta: "¿El pavimento presenta grieta o fracturas?",
                si: "Sellado de fisuras",
                no: null,
              },
              {
                pregunta:
                  "Presenta zonas de accidentes recurrentes causados por niebla, curvas peligrosas o similares",
                si: [
                  "Aplicación de Termoplástico Rib Line",
                  "Instalación de tachas solares",
                ],
                no: null,
              },
            ],
          },
        ],
      },
      {
        id: "seismil",
        name: "Más de 6000",
        via: {
          nombre: "Autopista de 1° Clase",
          descripcion:
            "Son carreteras con IMDA (Índice Medio Diario Anual) mayor a 6.000 veh/día, de calzadas divididas por medio de un separador central mínimo de 6,00 m; cada una de las calzadas debe contar con dos o más carriles de 3,60 m de ancho como mínimo, con control total de accesos (ingresos y salidas) que proporcionan flujos vehiculares continuos, sin cruces o pasos a nivel y con puentes peatonales en zonas urbanas. La superficie de rodadura de estas carreteras debe ser pavimentada",
          mejoras: [
            "Se recomienda repintados periódicos cada 4 o 6 meses de la señalización en el pavimento para guiar el tránsito de conductores y peatones.",
            "Mantener un adecuado uso de señales de tránsito para el beneficio de la ciudadanía.",
            "Para la mejora de la vía se recomienda materiales que garanticen la durabilidad de la señalización.",
          ],
          mejorasSimples: [
            "Señales preventivas",
            "Instalción de tachas",
            "Señales de servicios generales",
            "Señales informativas",
            "Señales reglamentarias",
          ],
        },
        señalizaciones: [
          {
            nombre: "Líneas continuas y discontinuas",
            mejoras: [
              {
                pregunta:
                  "¿La durabilidad en la pintura en la señalización vial es poca y se desgasta rápidamente?",
                si: "Aplicación de pintura Termoplástica Spray",
                no: "Aplicación de pintura acrílica",
              },
              {
                pregunta:
                  "¿La vía cruza son intersecciones como acceso a ciudades, pueblos y óvalos?",
                si: "Banda transversal Termoplástica",
                no: null,
              },
              {
                pregunta: "¿El pavimento presenta grieta o fracturas?",
                si: "Sellado de fisuras",
                no: null,
              },
              {
                pregunta:
                  "Presenta zonas de accidentes recurrentes causados por niebla, curvas peligrosas o similares",
                si: [
                  "Aplicación de Termoplástico Rib Line",
                  "Instalación de tachas solares",
                ],
                no: null,
              },
            ],
          },
          {
            nombre: "Cruceros peatonales y líneas de pare",
            mejoras: [
              {
                pregunta:
                  "¿La durabilidad en la pintura en la señalización vial es poca y se desgasta rápidamente?",
                si: [
                  "Aplicación de pintura Termoplástica Extrusión",
                  "Termoplástico preformado",
                ],
                no: "Aplicación de pintura acrílica",
              },
              {
                pregunta:
                  "¿La vía cruza son intersecciones como acceso a ciudades, pueblos y óvalos?",
                si: "Banda transversal Termoplástica",
                no: null,
              },
              {
                pregunta: "¿El pavimento presenta grieta o fracturas?",
                si: "Sellado de fisuras",
                no: null,
              },
              {
                pregunta:
                  "Presenta zonas de accidentes recurrentes causados por niebla, curvas peligrosas o similares",
                si: [
                  "Aplicación de Termoplástico Rib Line",
                  "Instalación de tachas solares",
                ],
                no: null,
              },
            ],
          },
          {
            nombre: "Símbolos, flechas y letras",
            mejoras: [
              {
                pregunta:
                  "¿La durabilidad en la pintura en la señalización vial es poca y se desgasta rápidamente?",
                si: [
                  "Aplicación de pintura Termoplástica Extrusión",
                  "Termoplástico preformado",
                ],
                no: "Aplicación de pintura acrílica",
              },
              {
                pregunta:
                  "¿La vía cruza son intersecciones como acceso a ciudades, pueblos y óvalos?",
                si: "Banda transversal Termoplástica",
                no: null,
              },
              {
                pregunta: "¿El pavimento presenta grieta o fracturas?",
                si: "Sellado de fisuras",
                no: null,
              },
              {
                pregunta:
                  "Presenta zonas de accidentes recurrentes causados por niebla, curvas peligrosas o similares",
                si: [
                  "Aplicación de Termoplástico Rib Line",
                  "Instalación de tachas solares",
                ],
                no: null,
              },
            ],
          },
          {
            nombre: "Intersecciones y óvalos",
            mejoras: [
              {
                pregunta:
                  "¿La durabilidad en la pintura en la señalización vial es poca y se desgasta rápidamente?",
                si: "Aplicación de pintura Termoplástica Spray",
                no: "Aplicación de pintura acrílica",
              },
              {
                pregunta:
                  "¿La vía cruza son intersecciones como acceso a ciudades, pueblos y óvalos?",
                si: "Banda transversal Termoplástica",
                no: null,
              },
              {
                pregunta: "¿El pavimento presenta grieta o fracturas?",
                si: "Sellado de fisuras",
                no: null,
              },
              {
                pregunta:
                  "Presenta zonas de accidentes recurrentes causados por niebla, curvas peligrosas o similares",
                si: [
                  "Aplicación de Termoplástico Rib Line",
                  "Instalación de tachas solares",
                ],
                no: null,
              },
            ],
          },
        ],
      },
    ],
  },
  // ========================== CARRETERA RURAL ============================
  rural: {
    descripcion:
      "Son consideradas vías urbanas, las calles o plazas que componen la red interior de comunicaciones de una población.",
    velocidades: [
      {
        name: "Calles y jirones",
        descripcion: "máximo 30 Km/h",
      },
      ,
      { name: "Avenidas", descripcion: "máximo 50 km/h" },

      {
        name: "Zonas comerciales",
        descripcion: "máximo 30 km/h",
      },
      ,
      {
        name: "Zonas residenciales",
        descripcion: "máximo 50km/h",
      },
      ,
    ],
    transito: [
      {
        id: "cuatrocientos",
        name: "Menor a 400",
        via: {
          nombre: "Carretera de 3ra clase",
          descripcion:
            "Son carreteras con IMDA menores a 400 veh/día, con calzada de dos carriles de 3,00 m de ancho como mínimo. De manera excepcional estas vías podrán tener carriles hasta de 2,50 m, contando con el sustento técnico correspondiente. Estas carreteras pueden funcionar con soluciones denominadas básicas o económicas, consistentes en la aplicación de estabilizadores de suelos, emulsiones asfálticas y/o micro pavimentos; o en afirmado, en la superficie de rodadura. La superficie de rodadura de estas carreteras debe ser pavimentada.",
          mejoras: [
            "Se recomienda repintados periódicos cada 4 o 6 meses de la señalización en el pavimento para guiar el tránsito de conductores y peatones.",
            "Mantener un adecuado uso de señales de tránsito para el beneficio de la ciudadanía.",
            "Para la mejora de la vía se recomienda materiales que garanticen la durabilidad de la señalización.",
          ],
          mejorasSimples: [
            "Señales preventivas",
            "Instalción de tachas",
            "Instalación de gibas",
            "Señales reglamentarias",
            "Señales informativas",
          ],
        },
        señalizaciones: [
          {
            nombre: "Líneas continuas y discontinuas",
            mejoras: ["Aplicación de pintura acrílica"],
          },
          {
            nombre: "Cruceros peatonales y líneas de pare",
            mejoras: ["Aplicación de pintura acrílica"],
          },
          {
            nombre: "Símbolos, flechas y letras",
            mejoras: ["Aplicación de pintura acrílica"],
          },
        ],
      },
      {
        id: "cuatrocientosAdosmil",
        name: "400 a 2000",
        via: {
          nombre: "Carretera de 2da clase",
          descripcion:
            "Son carreteras con un IMDA entre 4.000 y 2.001 veh/día, con una calzada de dos carriles de 3,60 m de ancho como mínimo. Puede tener cruces o pasos vehiculares a nivel y en zonas urbanas es recomendable que se cuente con puentes peatonales o en su defecto con dispositivos de seguridad vial, que permitan velocidades de operación, con mayor seguridad. La superficie de rodadura de estas carreteras debe ser pavimentada.",
          mejoras: [
            "Se recomienda repintados periódicos cada 4 o 6 meses de la señalización en el pavimento para guiar el tránsito de conductores y peatones.",
            "Mantener un adecuado uso de señales de tránsito para el beneficio de la ciudadanía.",
            "Para la mejora de la vía se recomienda materiales que garanticen la durabilidad de la señalización.",
          ],
          mejorasSimples: [
            "Señales preventivas",
            "Instalción de tachas",
            "Instalación de gibas",
            "Señales reglamentarias",
            "Señales informativas",
          ],
        },
        señalizaciones: [
          {
            nombre: "Líneas continuas y discontinuas",
            mejoras: [
              {
                pregunta:
                  "¿La durabilidad en la pintura en la señalización vial es poca y se desgasta rápidamente?",
                si: "Aplicación de pintura Termoplástica Spray",
                no: "Aplicación de pintura acrílica",
              },
              {
                pregunta: "¿El pavimento presenta grieta o fracturas?",
                si: "Sellado de fisuras",
                no: null,
              },
              {
                pregunta:
                  "¿Presenta zonas de accidentes recurrentes causados por niebla, curvas peligrosas o similares?",
                si: [
                  "Aplicación de termoplástico Rib Line",
                  "Instalación de tachas solares",
                ],
                no: null,
              },
            ],
          },
          {
            nombre: "Cruceros peatonales y líneas de pare",
            mejoras: [
              {
                pregunta:
                  "¿La durabilidad en la pintura en la señalización vial es poca y se desgasta rápidamente?",
                si: "Aplicación de pintura Termoplástica Spray",
                no: "Aplicación de pintura acrílica",
              },
              {
                pregunta: "¿El pavimento presenta grieta o fracturas?",
                si: "Sellado de fisuras",
                no: null,
              },
              {
                pregunta:
                  "¿Presenta zonas de accidentes recurrentes causados por niebla, curvas peligrosas o similares?",
                si: [
                  "Aplicación de termoplástico Rib Line",
                  "Instalación de tachas solares",
                ],
                no: null,
              },
            ],
          },
          {
            nombre: "Símbolos, flechas y letras",
            mejoras: [
              {
                pregunta:
                  "¿La durabilidad en la pintura en la señalización vial es poca y se desgasta rápidamente?",
                si: "Aplicación de pintura Termoplástica Spray",
                no: "Aplicación de pintura acrílica",
              },
              {
                pregunta: "¿El pavimento presenta grieta o fracturas?",
                si: "Sellado de fisuras",
                no: null,
              },
              {
                pregunta:
                  "¿Presenta zonas de accidentes recurrentes causados por niebla, curvas peligrosas o similares?",
                si: [
                  "Aplicación de termoplástico Rib Line",
                  "Instalación de tachas solares",
                ],
                no: null,
              },
            ],
          },
          {
            nombre: "Intersecciones y óvalos",
            mejoras: [
              {
                pregunta:
                  "¿La durabilidad en la pintura en la señalización vial es poca y se desgasta rápidamente?",
                si: "Aplicación de pintura Termoplástica Spray",
                no: "Aplicación de pintura acrílica",
              },
              {
                pregunta: "¿El pavimento presenta grieta o fracturas?",
                si: "Sellado de fisuras",
                no: null,
              },
              {
                pregunta:
                  "¿Presenta zonas de accidentes recurrentes causados por niebla, curvas peligrosas o similares?",
                si: [
                  "Aplicación de termoplástico Rib Line",
                  "Instalación de tachas solares",
                ],
                no: null,
              },
            ],
          },
        ],
      },
      {
        id: "dosmilAcuatromil",
        name: "2001 a 4000",
        via: {
          nombre: "Carretera 1ra clase",
          descripcion:
            "Son carreteras con un IMDA entre 4.000 y 2.001 veh/día, con una calzada de dos carriles de 3,60 m de ancho como mínimo. Puede tener cruces o pasos vehiculares a nivel y en zonas urbanas es recomendable que se cuente con puentes peatonales o en su defecto con dispositivos de seguridad vial, que permitan velocidades de operación, con mayor seguridad. La superficie de rodadura de estas carreteras debe ser pavimentada.",
          mejoras: [
            "Se recomienda repintados periódicos cada 4 o 6 meses de la señalización en el pavimento para guiar el tránsito de conductores y peatones.",
            "Mantener un adecuado uso de señales de tránsito para el beneficio de la ciudadanía.",
            "Para la mejora de la vía se recomienda materiales que garanticen la durabilidad de la señalización.",
          ],
          mejorasSimples: [
            "Señales preventivas",
            "Instalción de tachas",
            "Señales reglamentarias",
            "Señales informativas",
          ],
        },
        señalizaciones: [
          {
            nombre: "Líneas continuas y discontinuas",
            mejoras: [
              {
                pregunta:
                  "¿La durabilidad en la pintura en la señalización vial es poca y se desgasta rápidamente?",
                si: "Aplicación de pintura Termoplástica Spray",
                no: "Aplicación de pintura acrílica",
              },
              {
                pregunta: "¿El pavimento presenta grieta o fracturas?",
                si: "Sellado de fisuras",
                no: null,
              },
              {
                pregunta:
                  "¿Presenta zonas de accidentes recurrentes causados por niebla, curvas peligrosas o similares?",
                si: [
                  "Aplicación de termoplástico Rib Line",
                  "Instalación de tachas solares",
                ],
                no: null,
              },
              {
                pregunta:
                  "¿La vía cruza intersecciones como acceso a ciudades, pueblos y óvalos?",
                si: ["Banda transversal termoplástica"],
                no: null,
              },
            ],
          },
          {
            nombre: "Cruceros peatonales y líneas de pare",
            mejoras: [
              {
                pregunta:
                  "¿La durabilidad en la pintura en la señalización vial es poca y se desgasta rápidamente?",
                si: "Aplicación de pintura Termoplástica Spray",
                no: "Aplicación de pintura acrílica",
              },
              {
                pregunta: "¿El pavimento presenta grieta o fracturas?",
                si: "Sellado de fisuras",
                no: null,
              },
              {
                pregunta:
                  "¿Presenta zonas de accidentes recurrentes causados por niebla, curvas peligrosas o similares?",
                si: [
                  "Aplicación de termoplástico Rib Line",
                  "Instalación de tachas solares",
                ],
                no: null,
              },
              {
                pregunta:
                  "¿La vía cruza intersecciones como acceso a ciudades, pueblos y óvalos?",
                si: ["Banda transversal termoplástica"],
                no: null,
              },
            ],
          },
          {
            nombre: "Símbolos, flechas y letras",
            mejoras: [
              {
                pregunta:
                  "¿La durabilidad en la pintura en la señalización vial es poca y se desgasta rápidamente?",
                si: "Aplicación de pintura Termoplástica Spray",
                no: "Aplicación de pintura acrílica",
              },
              {
                pregunta: "¿El pavimento presenta grieta o fracturas?",
                si: "Sellado de fisuras",
                no: null,
              },
              {
                pregunta:
                  "¿Presenta zonas de accidentes recurrentes causados por niebla, curvas peligrosas o similares?",
                si: [
                  "Aplicación de termoplástico Rib Line",
                  "Instalación de tachas solares",
                ],
                no: null,
              },
              {
                pregunta:
                  "¿La vía cruza intersecciones como acceso a ciudades, pueblos y óvalos?",
                si: ["Banda transversal termoplástica"],
                no: null,
              },
            ],
          },
          {
            nombre: "Intersecciones y óvalos",
            mejoras: [
              {
                pregunta:
                  "¿La durabilidad en la pintura en la señalización vial es poca y se desgasta rápidamente?",
                si: "Aplicación de pintura Termoplástica Spray",
                no: "Aplicación de pintura acrílica",
              },
              {
                pregunta: "¿El pavimento presenta grieta o fracturas?",
                si: "Sellado de fisuras",
                no: null,
              },
              {
                pregunta:
                  "¿Presenta zonas de accidentes recurrentes causados por niebla, curvas peligrosas o similares?",
                si: [
                  "Aplicación de termoplástico Rib Line",
                  "Instalación de tachas solares",
                ],
                no: null,
              },
              {
                pregunta:
                  "¿La vía cruza intersecciones como acceso a ciudades, pueblos y óvalos?",
                si: ["Banda transversal termoplástica"],
                no: null,
              },
            ],
          },
        ],
      },
    ],
  },
};

export default data;
