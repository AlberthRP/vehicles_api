const AcessType = require("../models/AccessType");

const createAccessType = () => {
  const data = ["Entrada", "Salida"];
  data.map((dt) => registerAccesType(dt));
};

const registerAccesType = async (value) => {
  // var acessType = null;
  AcessType.findOne({ description: value })
    .then((isFound) => {
      if (!isFound) {
        const acessType = new AcessType({ description: value });
        acessType.save().catch((err) => {
          console.error("Error Middleware", err);
        });
      }
    })
    .catch((err) => {
      console.error("Error Middleware", err);
    });
};

module.exports = createAccessType;
