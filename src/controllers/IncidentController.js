const connection = require("../database/connection");

module.exports = {
  async list(req, res) {
    const indicents = await connection("incidents").select("*");
    return res.json(indicents);
  },

  async create(req, res) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    const [id] = await connection("incidents").insert({
      title,
      description,
      value,
      ong_id
    });

    return res.json({ id });
  }
};
