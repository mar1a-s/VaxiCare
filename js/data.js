// Esta lista funciona como una base de datos pequeña para el proyecto.
// Desde aquí se toman los datos que se muestran en historial, recordatorios y catálogo.
const vaccines = [
  {
    name: "BCG",
    date: "12/03/2024",
    dose: "Única",
    nextDose: "No aplica",
    status: "aplicada",
    description: "Vacuna registrada dentro del historial digital del usuario."
  },
  {
    name: "Hepatitis B",
    date: "20/04/2024",
    dose: "1ra dosis",
    nextDose: "20/06/2026",
    status: "pendiente",
    description: "Requiere seguimiento para completar el esquema correspondiente."
  },
  {
    name: "Pentavalente",
    date: "15/05/2024",
    dose: "1ra dosis",
    nextDose: "15/07/2024",
    status: "aplicada",
    description: "Registro de vacuna aplicada con información de dosis y fecha."
  },
  {
    name: "Rotavirus",
    date: "15/05/2024",
    dose: "1ra dosis",
    nextDose: "15/07/2024",
    status: "aplicada",
    description: "Vacuna incluida para consulta rápida en la cartilla digital."
  },
  {
    name: "Neumococo",
    date: "15/05/2024",
    dose: "1ra dosis",
    nextDose: "15/07/2026",
    status: "pendiente",
    description: "Tiene una próxima dosis pendiente para seguimiento del esquema."
  }
];
