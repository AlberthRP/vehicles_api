const vehiclesCtrl = {};

const Vehicle = require("../models/Vehicle");

// Consulta todos los vehiculos registrados
vehiclesCtrl.getVehicles = async (req, res) => {
  const vehiculos = await Vehicle.find();
  res.json(vehiculos);
};

// Crea un nuevo Vehiculo
vehiclesCtrl.createVehicle = async (req, res) => {
  const newVehicle = new Vehicle(req.body);
  await newVehicle.save();
  res.json({ message: "Vehiculo Guardado" });
};

// BUsca un Vehiculo en especifico
vehiclesCtrl.getVehicle = async (req, res) => {
  const vehicle = await Vehicle.findById(req.params.id);
  res.json(vehicle);
};

// Actualiza un Vehiculo
vehiclesCtrl.updateVehicle = async (req, res) => {
  await Vehicle.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Vehiculo Actualizado" });
};

// Elimina un Vehiculo
vehiclesCtrl.deleteVehicle = async (req, res) => {
  await Vehicle.findByIdAndDelete(req.params.id);
  res.json({ message: "Vehiculo Eliminado" });
};

module.exports = vehiclesCtrl;
