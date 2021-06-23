const express = require("express");
const bodyParser = require("body-parser");
//const appi = require("./appi");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
var db={}
app.get("/registro", function (req, res) {
  res.sendFile(__dirname + "/registro.html");
  console.log("envio registro.html");
});
app.post("/registro", function (req, res) {
  var inv = req.body.inventario;
  var horas = Number(req.body.hs);
  console.log(req.body);

  //codigo de la app

  //constructor del equipo
  class Equipo  {
    constructor (id, hs = 0, comentarios){
        this.id = id;
        this.hs = hs;
        this.comentarios = Array.isArray(comentarios) ? comentarios : [];
    }
  }

  const agregarEquipo = (equipo) => {
    db[equipo.id] = equipo;
    return equipo;
  };
  //crea un equipo
  agregarEquipo(new Equipo("05078", 1));
  //funcion suma hs del equipo
  const modificarHsEquipo = (equipoId, hours) => {
    if (db[equipoId].hs >= hours) {
      return "error";
    }
    db[equipoId].hs = hours;
    return db[equipoId];
  };
  modificarHsEquipo(inv, horas);
  res.write(
    "la maquina es el numero de inventario " +
      inv +
      "y la cantidad de horas" +
      horas
  );
  //res.write("el equipo inventario " + inv + " tiene " + horas + " horas")
  res.write("ahora si la puta madre");
  res.end("");
});

app.listen(5040, function () {
  console.log("server started on port 3000");
});
