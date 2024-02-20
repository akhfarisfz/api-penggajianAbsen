
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");
const { Jabatan } = require("./models");
const { JabatanFilter } = require("./filters");

const JabatanControllerList =  async (req, res) => {
  try {
    // Your code here
    const results = Jabatan.find(JabatanFilter(req));
    return LibPaginationResponse(req, res, results);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const JabatanControllerCreate = async (req, res) => {
  try {
    // Your code here
    await Jabatan.create(req.cleanedData);
    res.status(201).json(req.cleanedData);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const JabatanControllerDetail = async (req, res) => {
  try {
    // Your code here
    let jabatan = await Jabatan.findOne({ _id: req.params.id });
    if (!jabatan) throw { status: 404, message: "Not found" };
    res.status(200).json(jabatan);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const JabatanControllerUpdate = async (req, res) => {
  try {
    // Your code here
    let jabatan = await Jabatan.findOne({ _id: req.params.id });
    if (!jabatan) throw { status: 404, message: "Not found" };

    await Jabatan.findByIdAndUpdate(req.params.id, req.cleanedData);
    res.status(200).json(req.cleanedData);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const JabatanControllerDelete = async (req, res) => {
  try {
    // Your code here
    let jabatan = await Jabatan.findOne({ _id: req.params.id });
    if (!jabatan) throw { status: 404, message: "Not found" };
    await Jabatan.findByIdAndDelete(req.params.id);
    res.status(204).json(null);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

module.exports = {
  JabatanControllerList,
  JabatanControllerCreate,
  JabatanControllerDetail,
  JabatanControllerUpdate,
  JabatanControllerDelete,
};
