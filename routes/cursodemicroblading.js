const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("cursodemicroblading", {
    title: "Curso de microblading",
    cursos: [
      {
        nombre: "Online",
        fecha: "Acceso inmediato",
        lugar: "En linea",
        horario: "Tu elijes",
      },
      {
        nombre: "Online PRO",
        fecha: "Acceso inmediato",
        lugar: "En linea",
        horario: "Tu elijes",
      },
      {
        nombre: "Grupal GOLD",
        fecha: "Por reserva",
        lugar: "Sede Bellas Cejas",
        horario: "10am a 6pm",
      },
      {
        nombre: "Personalizado GOLD",
        fecha: "Por reserva",
        lugar: "Sede Bellas Cejas",
        horario: "10am a 6pm",
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
