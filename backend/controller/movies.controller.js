const express = require("express");
const moviesService = require("../services/movies.services");

const router = express.Router();

router.get("/get-movies", async (req, res) => {
  try {
    const result = await moviesService.getMoviesData();

    const payload = {
      data: result,
      message: "successfull",
      status: 200
    };

    return res.send(payload);
  } catch (error) {
    return res.status(404).send(error);
  }
});

router.get("/get-movies/:id", async (req, res) => {
  try {
    const { params, query } = req;

    const result = await moviesService.getMoviesDataById(params, query);

    const payload = {
      data: result,
      message: "successfull",
      status: 200
    };

    return res.send(payload);
  } catch (error) {
    return res.status(404).send(error);
  }
});

module.exports = router;
