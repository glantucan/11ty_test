/* require("dotenv").config();
var axios = require("axios");
const countries = require('./countries.json');



async function getNews(country) {
  try {
    var response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=technology&q=space&apiKey=${process.env.NEWS_API_KEY}`
    );
    return {
      "country": country,
      "articles": response.data.articles
    };
  } catch (error){
    console.error(error);
  }
}


module.exports = async function getLocalizedNews() {
  var newsPromises = countries.map(getNews);
  return Promise.all(newsPromises)
    .then( newsObjs => {
      //console.log('newsObects:', newsObjs);
      return [].concat.apply([], newsObjs);
    });
};  */