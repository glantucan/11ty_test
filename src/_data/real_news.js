var axios = require("axios");
require("dotenv").config();

module.exports = async function getNews() {
  try {
    const API_KEY = process.env.NEWS_API_KEY
    var response = await axios.get(
      'https://newsapi.org/v2/top-headlines?country=us&category=science&q=space&apiKey=' + API_KEY
    );
    return response.data;
  } catch (error){
    console.error(error);
  }
}; 