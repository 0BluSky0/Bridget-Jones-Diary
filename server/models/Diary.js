const pool = require("../database/connection");

class Diary {
  constructor({ id, date, time, entry, category }) {
    this.id = id;
    this.date = date;
    this.time = time;
    this.entry = entry;
    this.category = category;
  }

  static async getAllEntries() {
    const result = await pool.query("SELECT * FROM diary ORDER BY id DESC");
    return result.rows;
  }

  static async createEntry(date, time, category, entry) {
    const result = await pool.query(
      "INSERT INTO diary (date, time, category, entry) VALUES ($1, $2, $3, $4) RETURNING *",
      [date, time, category, entry]
    );

    return result.rows[0];
  }
}

module.exports = Diary;