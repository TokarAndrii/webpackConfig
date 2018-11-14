const bcrypt = require('bcrypt-nodejs')

const hash = () => {

    var hash = bcrypt.hashSync("bacon");

    console.log(hash, ' - hash')

}

export default hash

