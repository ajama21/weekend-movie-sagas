const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");
// spearate route for movie details to componetize my server routers
router.get("/:id", (req, res) => {
  const query = `SELECT * FROM "movies" 
  JOIN "movies_genres" ON "movies_genres".movie_id = "movies".id
  JOIN "genres" ON "movies_genres".genre_id = "genres".id
  WHERE "movies".id = $1`;
  pool
    .query(query, [req.params.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get all the details of a movie", err);
      res.sendStatus(500);
    });
});

module.exports = router;
