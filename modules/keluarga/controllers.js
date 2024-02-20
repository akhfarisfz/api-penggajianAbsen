
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");
const { Keluarga } = require("./models");
const { KeluargaFilter } = require("./filters");

const KeluargaControllerList =  async (req, res) => {
  try {
    // Your code here
    const results = Keluarga.find(KeluargaFilter(req));
    return LibPaginationResponse(req, res, results);
  } catch (error) {
   return LibHTTPResponseException(res, error);
 }
};

const KeluargaControllerCreate = async (req, res) => {
  try {
    await Keluarga.create(req.cleanedData);
    res.status(201).json(req.cleanedData);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const KeluargaControllerDetail = async (req, res) => {
  try {
    // Your code here
    let keluarga = await Keluarga.findOne({ _id: req.params.id });
    if (!keluarga) throw { status: 404, message: "Not found" };
    res.status(200).json(keluarga);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
};

const KeluargaControllerUpdate = async (req, res) => {
  try {
    // Your code here
    let keluarga = await Keluarga.findOne({ _id: req.params.id });
    if (!keluarga) throw { status: 404, message: "Not found" };
    await Keluarga.findByIdAndUpdate(req.params.id, req.cleanedData);
    res.status(200).json(req.cleanedData);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const KeluargaControllerDelete = async (req, res) => {
  try {
    // Your code here
    let keluarga = await Keluarga.findOne({ _id: req.params.id });
    if (!keluarga) throw { status: 404, message: "Not found" };
    await Keluarga.findByIdAndDelete(req.params.id);
    res.status(204).json(null);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

module.exports = {
  KeluargaControllerList,
  KeluargaControllerCreate,
  KeluargaControllerDetail,
  KeluargaControllerUpdate,
  KeluargaControllerDelete,
};
