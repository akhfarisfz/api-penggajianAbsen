
function DepartemenFilter(req) {
  let qSearch = {};
  const { search, limit, page, ...filters } = req.query;

  if (search) {
    qSearch = {
      $or: [
        /**
         * You can change field1 and field2 according to your needs.
         **/

        { namaDepartemen: { $regex: ".*" + search + ".*", $options: "i" } },
      ],
    };
  }

  return { ...filters, ...qSearch };
}

module.exports = {
  DepartemenFilter,
};
  