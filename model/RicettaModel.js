const RicettaSchema = require('../schema/RicettaSchema');
const mongoose = require('mongoose');

const Ricetta= mongoose.model("Ricetta" , RicettaSchema);
module.exports = Ricetta;