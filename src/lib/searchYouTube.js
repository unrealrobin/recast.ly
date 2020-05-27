import YOUTUBE_API_KEY from '../config/youtube.js';
import exampleVideoData from '../data/exampleVideoData.js';

var searchYouTube = (options, callback) => {
  // TODO
  //write a get request
  var response;
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: true
    },
    //contentType: 'application/json',
    //dataType: 'json',
    success: ({items}) => {
      if (callback) {
        callback(items);
      }
    },
    // success: function(data) {
    //   response = data;
    //   console.log(data);
    // },
    error: function(error) {
      console.error('YouTube Request Error!', error);
    }
  });

  // $.get('https://www.googleapis.com/youtube/v3/search',
  //   {
  //     key: options.key, //this is api key
  //     q: options.query, //this is search query
  //     maxResults: options.max, //
  //     part: 'snippet',
  //     type: 'video',
  //     videoEmbeddable: true
  //   },
  //   function(data) {
  //     response = data;
  //     console.log(data);
  //   },
  //   'json');
  //return response.items;
  return exampleVideoData;
};

export default searchYouTube;



