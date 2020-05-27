import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeCurrentVideo = this.changeCurrentVideo.bind(this);
    this.state = {
      videoList: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }

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
            <div><h5><em>search</em> view goes here</h5></div>
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
