
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");
const { Pajak } = require("./models");
const { PajakFilter } = require("./filters");

const PajakControllerList =  async (req, res) => {
  try {
    // Your code here
    const results = Pajak.find(PajakFilter(req));
    return LibPaginationResponse(req, res, results);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PajakControllerCreate = async (req, res) => {
  try {
    // Your code here
    await Pajak.create(req.cleanedData);
    res.status(201).json(req.cleanedData);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PajakControllerDetail = async (req, res) => {
  try {
    // Your code here
    let pajak = await Pajak.findOne({ _id: req.params.id });
    if (!pajak) throw { status: 404, message: "Not found" };
    res.status(200).json(pajak);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PajakControllerUpdate = async (req, res) => {
  try {
    // Your code here
    let pajak = await Pajak.findOne({ _id: req.params.id });
    if (!pajak) throw { status: 404, message: "Not found" };

    await Pajak.findByIdAndUpdate(req.params.id, req.cleanedData);
    res.status(200).json(req.cleanedData);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PajakControllerDelete = async (req, res) => {
  try {
    // Your code here
    let pajak = await Pajak.findOne({ _id: req.params.id });
    if (!pajak) throw { status: 404, message: "Not found" };
    await Pajak.findByIdAndDelete(req.params.id);
    res.status(204).json(null);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

module.exports = {
  PajakControllerList,
  PajakControllerCreate,
  PajakControllerDetail,
  PajakControllerUpdate,
  PajakControllerDelete,
};
