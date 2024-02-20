
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");
const { keluarga} = require("./models");
const { keluargaFilter} = require("./filters");
const { result } = require("lodash");

const KeluargaControllerList =  async (req, res) => {
  try {
    // Your code here

    // example:
    // const results = YourModel.find(YourFilter(req));
    // return LibPaginationResponse(req, res, results);


  
    return LibPaginationResponse(req, res, result);
  } catch (error) {
   return LibHTTPResponseException(res, error);
 }
};

const KeluargaControllerCreate = async (req, res) => {
  try {
    await keluarga.create(req.cleanedData);
    res.status(201).json(req.cleanedData);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const KeluargaControllerDetail = async (req, res) => {
  try {
    // Your code here
    let keluarga = await keluarga.findOne({_id: req.params.id});
    if (!keluarga) throw { status: 404, message: "not found"};
    
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
};

const KeluargaControllerUpdate = async (req, res) => {
  try {
    // Your code here
   let keluarga = await keluarga.findOne({_id: req.params.id});
   if (!keluarga) throw {status: 404, message: "not found"};

   await keluarga.findByIdAndUpdate(req.params.id, req.cleanedData)
   res.status(200).json(req.cleanedData);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const KeluargaControllerDelete = async (req, res) => {
  try {
    // Your code here
    let keluarga = await keluarga.findOne({ _id: req.params.id });
    if (!keluarga) throw { status: 404, message: "Not found" };

    await keluarga.findByIdAndDelete(req.params.id);
   
    res.status(204).json(null)
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
