
function KaryawanFilter(req) {
  let qSearch = {};
  const { search, limit, page, ...filters } = req.query;

  if (search) {
    qSearch = {
      $or: [
        /**
         * You can change field1 and field2 according to your needs.
         **/

        { nik: { $regex: ".*" + search + ".*", $options: "i" } },
        { nama: { $regex: ".*" + search + ".*", $options: "i" } },
        { jabatan: { $regex: ".*" + search + ".*", $options: "i" } },
      ],
    };
  }

  return { ...filters, ...qSearch };
}

module.exports = {
  KaryawanFilter,
};
  