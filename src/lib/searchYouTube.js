import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {
  // TODO
  //write a get request
  var response = null;
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
    // success: (data) => {
    //   callback(data);
    // },
    success: function(data) {
      response = data;
      console.log(data);
    },
    error: function(error) {
      console.error('chatterbox: Failed to fetch messages', error);
    }
  });
  return response;
};

export default searchYouTube;
