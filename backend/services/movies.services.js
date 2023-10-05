const moviesJsonData = require("../db/movies.json");

const getMoviesData = async () => {
  try {
    const data = moviesJsonData;

    return data;
  } catch (error) {
    return {
      message: "Not found any movies.",
      status: 404
    };
  }
};

const getMoviesDataById = async (params, query) => {
  try {
    const data = moviesJsonData.filter((er) => er.id == params.id);

    return data[0];
  } catch (error) {
    return {
      message: "Not found any movies.",
      status: 404
    };
  }
};

module.exports = {
  getMoviesData,
  getMoviesDataById
};
