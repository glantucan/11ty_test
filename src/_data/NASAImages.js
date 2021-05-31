var axios = require("axios");

async function getItemFullImage(itemUrl, nasaId) {

  try {
    var response = await axios.get(itemUrl);
    return {
      fullImg: response.data[0],
      nasaId,
    }
  } catch (err){
    console.error(err);
  }
}


async function getPicturesData() {
  
  var searchPhrase = 'saturn cassini full';
  //var searchPhrase = 'Hubble galaxy';
  //var searchPhrase = 'nebula';

  var search = encodeURI(searchPhrase);
  var list;

  try {
    var response = await axios.get(
      `https://images-api.nasa.gov/search?q=${search}&media_type=image` 
    );
    var picturesData = response.data.collection.items.map(
      item => {
        return {
          thumb: item.links[0].href,
          fullImage: item.href,//await getImageVersions(item.href),
          caption: item.data[0].description_508,
          title: item.data[0].title,
          description: item.data[0].description,
          data: item.data[0],
          href: item.href,
          nasaId: item.data[0].nasa_id,
          tags: item.data[0].keywords,
        }
      }
    );
    var fullImageRequests = picturesData.map( p => getItemFullImage(p.href, p.nasaId) );
    var fullImgUrls = await Promise.all(fullImageRequests);
    var results = picturesData.map(
      item => {
        return {
          ...item,
          fullImage: fullImgUrls.find( u => u.nasaId == item.nasaId).fullImg,
        }
      }
    )
    //console.log(results)
    return results;

  } catch (err) {
    console.error(err);
  }


}

module.exports = getPicturesData;