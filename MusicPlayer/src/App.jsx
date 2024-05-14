import './App.css'
import NavBar from './Nav'
import MusicCard from './Cards'
import Converter from './Converter'
import Displayer from './Displayer'
import Playlist from './Playlist'
import Creator from './CreatePlaylist'

function App() {


  return (
  <div>
      <div>
          <NavBar/>
          <h1 className='title'>Converter</h1>
     </div>
     <div className='converter'>
          <h2>Your favorite music and converter , <br></br> all in one place</h2> 
          <Converter /> 
     </div>
     <div className='musicwrapper'>
            <h1 className='title'>Music Player</h1>
         <div className='cardwrapper'>
            <MusicCard /> 
         </div>
         <div className='displayer'>
               <Displayer />
         </div>
      </div>
      <div> 
            <h1 className='title'>Playlists</h1>
      <div className='playlist-view'>
            <div className='playlist-view'>
                  <Playlist/>
                  <Creator />
            </div>
      </div>
   </div>
    </div>
  )}
export default App;
