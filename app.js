// tres funciones, 1 crea id , descripcion, comentario (notas, es un array). Un vector global para el archivo donde se guardan todos los articulos. Fucnion crear objeto (articulo de inventario), funcion modificar (tiene que pedir el id, que no se podra sobre escribir), y funcion borrar articulo de inventario (pide el id).

//objeto global

let db = {}
let comments;

//contructor de equipos

class Equipo  {
    constructor (id, hs = 0, comentarios){
        this.id = id;
        this.hs = hs;
        this.comentarios = Array.isArray(comentarios) ? comentarios : [];
    }
}

const agregarEquipo = (equipo) => {
    db[equipo.id]= equipo
    return equipo
}

const addCommentsEquipment = (equipoId, comments) => {
    db[equipoId].comentarios.push (comments)
    return db[equipoId]
}

const modificarHsEquipo  = (equipoId, hours) => {

    if (db[equipoId].hs >= hours) { return 'error'}
    db[equipoId].hs = hours;
    return db[equipoId]
}

const removerEquipo = (equipoId) => {
    db = db.filter(e => e.id !== equipoId)
   // return equipoId
}

agregarEquipo(new Equipo ('05078', 2345));
agregarEquipo(new Equipo ('05073', 2345, ['algun otro comentario']))

console.log(db)
console.log(db['05078'])
modificarHsEquipo('05078',3333);
console.log(db['05078']);
console.log(db['05073'].comentarios);
addCommentsEquipment('05073',"comentarios222");
addCommentsEquipment('05073',"comentarios333");
addCommentsEquipment('05073',"comentarios444");
addCommentsEquipment('05073',"comentarios555");

console.log(db['05073'].comentarios);

