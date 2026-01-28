function gerarSOAP() {
  const texto = document.getElementById("subjetivo").value;
  const s = texto.toLowerCase();

  let S = "";
  let O = "BEG, LOC, AAA";
  let A = "";
  let P = "";

  if (s.includes("diarreia") || s.includes("vômito") || s.includes("vomito")) {
    S =
      "Paciente refere diarreia e vômitos há 2 dias, de início agudo, com episódios frequentes. " +
      "Nega febre, dor abdominal intensa, presença de sangue nas fezes, sinais de desidratação e outros sintomas sistêmicos.";

    A = "Gastroenterite aguda";

    P =
      "Oriento hidratação rigorosa com líquidos claros e soro de reidratação oral. " +
      "Oriento sinais de alarme, como vômitos persistentes, dor abdominal intensa, sinais de desidratação e presença de sangue nas fezes, devendo procurar UPA/PA se presentes. " +
      "Oriento retorno em caso de persistência ou piora do quadro.";
  } else {
    S = texto;
    A = "A esclarecer";
    P =
      "Oriento sinais de alarme conforme quadro clínico. " +
      "Oriento retorno se persistência ou surgimento de novas queixas.";
  }

  const soap = `#Demanda espontânea
#Alergias medicamentosas: nega
#Comorbidades: nega

#S:
${S}

#O:
${O}

#A:
${A}

#P:
${P}
`;

  document.getElementById("soapGerado").textContent = soap;
}
