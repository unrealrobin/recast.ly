import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.changeCurrentVideo = this.changeCurrentVideo.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.state = {
      apiResponse: {},
      videoList: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };

  }

  componentDidMount() {

    this.handleResponse('bikes');

  }

  handleResponse(query) {
    //let newData = {};
    searchYouTube({query: query, max: 5, key: YOUTUBE_API_KEY}, (videos) =>
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      }));
  }
  //console.log(newData);
  changeCurrentVideo(event) {
  //changeCurrentVideo = function(video) {
    this.setState({
      currentVideo: JSON.parse(event.target.getAttribute('data-video'))
    });
    //console.log(JSON.parse(event.target.getAttribute('data-video')));
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearchInputChange={this. handleResponse.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div>
              <VideoPlayer video={this.state.currentVideo}/>
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <VideoList videos={this.state.videoList} changeVideo={this.changeCurrentVideo}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
