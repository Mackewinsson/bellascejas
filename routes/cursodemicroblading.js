const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.status(200).render("cursodemicroblading", {
    title: "Curso de microblading",
    cursos: [
      {
        nombre: "Online",
        precio: "150.000",
        fecha: "Acceso inmediato",
        lugar: "En linea",
        horario: "Tu elijes",
        linkPago: "https://www.flow.cl/btn.php?token=ucz0siv",
        caracteristicas: [
          "12 hrs de video",
          "10 Ejercicios practicos",
          "Preguntas via correo electronico",
          "Diploma de certificacion",
        ],
      },
      {
        nombre: "Online PRO",
        precio: "250.000",
        fecha: "Acceso inmediato",
        lugar: "En linea",
        horario: "Tu elijes",
        linkPago: "https://www.flow.cl/btn.php?token=ag7rqm1",
        caracteristicas: [
          "12 hrs de video",
          "10 Ejercicios practicos",
          "Asesoria directa via Whatsapp y llamadas",
          "Diploma de certificacion",
        ],
      },
      {
        nombre: "Grupal GOLD",
        precio: "500.000",
        fecha: "Por reserva",
        lugar: "Sede Bellas Cejas",
        horario: "10am a 6pm",
        linkPago: "https://www.flow.cl/btn.php?token=c9bqsi3",
        caracteristicas: [
          "Curso online incluido",
          "Dos dias de practicas presenciales con la profesora",
          "Asesoria directa via whatsapp y llamadas",
          "Minimo de 5 alumnas",
          "Diploma de certificacion",
        ],
      },
      {
        nombre: "Personalizado GOLD",
        precio: "800.000",
        fecha: "Por reserva",
        lugar: "Sede Bellas Cejas",
        horario: "10am a 6pm",
        linkPago: "https://www.flow.cl/btn.php?token=jgcrqva",
        caracteristicas: [
          "Curso online incluido",
          "Dos dias de practicas presenciales con la profesora",
          "Asesoria directa via whatsapp y llamadas",
          "Maximo 2 alumnas",
          "Diploma de certificacion",
        ],
      },
    ],
  });
});
router.get("/gracias", function (req, res, next) {
  res.render("cdmgracias", {
    title: "Gracias - Curso de microblading",
  });
});

module.exports = router;
