/* var axios = require("axios");

module.exports = function getPictures() {
  var searchPhrase = 'jupiter JUNO';
  var search = encodeURI(searchPhrase);
  var list;
  var response = axios.get(
    `https://images-api.nasa.gov/search?q=${search}&media_type=image` 
  )
  .then( response => {
    list = response.data.collection.items.map(
      item => {
        
        return {
          thumb: item.links[0].href,
          fullImage: item.href,//await getImageVersions(item.href),
          caption: item.data[0].description_508,
          title: item.data[0].title,
          description: item.data[0].description,
          data: item.data[0],
          href: item.href,
          nasaId: item.data[0].nasa_id
        };
    });
    //response.data.collection.items.map( i => console.log('requesting:',i.href) )

    console.log('done 1')
    return Promise.all(response.data.collection.items.map( i => axios.get(i.href) ));
  })
  .then ( responses => {
    //responses.map(r => console.log('image', r.data[0]));
    
    for (let i = 0; i < list.length; i++) {
      list[i].fullImage = responses[i].data[0];
    }
    //console.log(list)
    console.log('done 2')
    return new Promise((resolve) => resolve(list));
  })
  .catch (error => {
    console.error(error);
    return null
  })
} */