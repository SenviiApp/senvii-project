const countries = [
  {
    pais: "Argentina",
    codigo: "AR",
    telefonoRegex: /^(?:\+?54)?(?:\s*\d){10}\s*$/,
    dniRegex: /^(?:\d{7,8}|\d{2}(?:\.\d{3}){2})$/,
  },
  {
    pais: "Bolivia",
    codigo: "BO",
    telefonoRegex: /^(?:\+?591)?(?:\s*\d){7}\s*$/,
    dniRegex: /^(?:\d{5,10})$/,
  },
  {
    pais: "Brasil",
    codigo: "BR",
    telefonoRegex: /^(?:\+?55)?(?:\s*\d){10,11}\s*$/,
    dniRegex: /^(?:\d{11})$/,
  },
  {
    pais: "Chile",
    codigo: "CL",
    telefonoRegex: /^(?:\+?56)?(?:\s*9)?(?:\s*\d){8}\s*$/,
    dniRegex: /^(?:(?:\d{1,2}(?:\.\d{3}){2})|(?:\d{8}))$/,
  },
  {
    pais: "Colombia",
    codigo: "CO",
    telefonoRegex: /^(?:\+?57)?(?:\s*\d){10}\s*$/,
    dniRegex: /^(?:\d{6,11})$/,
  },
  {
    pais: "Costa Rica",
    codigo: "CR",
    telefonoRegex: /^(?:\+?506)?(?:\s*\d){8}\s*$/,
    dniRegex: /^(?:\d{9})$/,
  },
  {
    pais: "Cuba",
    codigo: "CU",
    telefonoRegex: /^(?:\+?53)?(?:\s*\d){8,9}\s*$/,
    dniRegex: /^(?:\d{11})$/,
  },
  {
    pais: "Ecuador",
    codigo: "EC",
    telefonoRegex: /^(?:\+?593)?(?:\s*\d){9,10}\s*$/,
    dniRegex: /^(?:\d{10})$/,
  },
  {
    pais: "El Salvador",
    codigo: "SV",
    telefonoRegex: /^(?:\+?503)?(?:\s*\d){8}\s*$/,
    dniRegex: /^(?:\d{8})$/,
  },
  {
    pais: "Guatemala",
    codigo: "GT",
    telefonoRegex: /^(?:\+?502)?(?:\s*\d){8,9}\s*$/,
    dniRegex: /^(?:\d{8,9})$/,
  },
  {
    pais: "Haití",
    codigo: "HT",
    telefonoRegex: /^(?:\+?509)?(?:\s*\d){8}\s*$/,
    dniRegex: /^(?:\d{14})$/,
  },
  {
    pais: "Honduras",
    codigo: "HN",
    telefonoRegex: /^(?:\+?504)?(?:\s*\d){8}\s*$/,
    dniRegex: /^(?:\d{13})$/,
  },
  {
    pais: "México",
    codigo: "MX",
    telefonoRegex: /^(?:\+?52)?(?:\s*\d){10}\s*$/,
    dniRegex: /^(?:\d{10})$/,
  },
  {
    pais: "Paraguay",
    codigo: "PY",
    telefonoRegex: /^(?:\+?595)?(?:\s*\d){7,9}\s*$/,
    dniRegex: /^(?:\d{7,8}|[a-zA-Z]{3}-?\d{4})$/,
  },
  {
    pais: "Nicaragua",
    codigo: "NI",
    telefonoRegex: /^(?:\+?505)?(?:\s*\d){8}\s*$/,
    dniRegex: /^(?:\d{14})$/,
  },
  {
    pais: "Venezuela",
    codigo: "VE",
    telefonoRegex: /^(?:\+?58)?(?:\s*\d){10,14}\s*$/,
    dniRegex: /^(?:\d{6,9})$/,
  },
  {
    pais: "Panamá",
    codigo: "PA",
    telefonoRegex: /^(?:\+?507)?(?:\s*\d){7,8}\s*$/,
    dniRegex: /^(?:\d{7,8})$/,
  },
  {
    pais: "Uruguay",
    codigo: "UY",
    telefonoRegex: /^(?:\+?598)?(?:\s*9)?(?:\s*\d){7}\s*$/,
    dniRegex: /^(?:\d{7,8}|\d{1,2}(\.\d{3}){2})$/,
  },
  {
    pais: "Perú",
    codigo: "PE",
    telefonoRegex: /^(?:\+?51)?(?:\s*1)?(?:\s*\d){8}\s*$/,
    dniRegex: /^(?:\d{8}|(?!0{6})\d{6}-?[0-9A-Z]{2})$/,
  },
];

module.exports = { countries };
