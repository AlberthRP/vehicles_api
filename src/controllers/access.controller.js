const accessCtrl = {};

const Access = require("../models/Access");

// Muestra todos lo registros de entrada y salida
accessCtrl.getAllAccess = async (req, res) => {
  const access = await Access.find();
  res.json(access);
};

// Crea un nuevo registro en entrada y salida
accessCtrl.createAccess = async (req, res) => {
  const newAccess = new Access(req.body);
  await newAccess.save();
  res.json({ message: "Regitro Guardado" });
};


// Muestra un regigstrp de entrada y salida
accessCtrl.getAccess = async (req, res) => {
  const oneAccess = await Access.findById(req.params.id);
  res.json(oneAccess);
};

// Actualiza un registro en entrada y salida
accessCtrl.updateAccess = async (req, res) => {
  await Access.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Registro Actualizado" });
};

// Eliminsa un registro en entrada y salida
accessCtrl.deleteAccess = async (req, res) => {
  await Access.findByIdAndDelete(req.params.id);
  res.json({ message: "Registro Eliminado" });
};

module.exports = accessCtrl;
