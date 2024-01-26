const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const DB_URL = "postgresql://postgres:C3BC1b3cA2ge53GgfG621ag1dF4*E65F@viaduct.proxy.rlwy.net:26920/railway"

const sequelize = new Sequelize( DB_URL, {
  logging: false,
  native: false,
});
const basename = path.basename(__filename);

const modelDefiners = [];


fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

console.log(sequelize.models);


module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
