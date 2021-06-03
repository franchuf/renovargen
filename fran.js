
const db = []

class Item {
    constructor({description, notes = []}) {
        this.uuid = null
        this.description = description
        this.notes = notes
  
    // genera un id uuid (https://www.npmjs.com/package/uuid)
    // const { v4: uuidv4 } = require('uuid');
    // uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'        
    }
  }

const creatItem = (itemWithoutId) => {

    // validate itemWithoutId
    // Asegurate que tiene todo lo que tiene que tener.

    console.log('item to store', item)

    //guarda el item en la db
    db.append(item)

    console.log('return item:', item)
    return item
}


const modifyItem = (itemId, itemWithoutId) => {

    //validate itemWithoutId and that itemID exist on the db or return false
    //make the update to the db item
    return true
}


const deleteItem = (itemId) => {

    // find in db the item and delete it otherwise return false

    return true
}
