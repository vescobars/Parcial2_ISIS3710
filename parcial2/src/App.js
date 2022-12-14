import logo from './logo.svg';
import './App.css';
import { useEffect,useState} from 'react';
import axios from 'axios';
import Bandas from './components/bandas';

function App() {
  //State for bands
  const [bands, setBands] = useState([]);

  //State for selected band
  const [selectedBand, setSelectedBand] = useState(null);

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    //URL Bandas
    const url = "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json";
    //Fetch Data
    const response = await axios.get(url);
    //Data content
    const data = response.data;
    //Set data
    setBands(data);
  }

  return (
    <div className="App">
      <Bandas bands={bands} selectedBand={null} />
    </div>
  );
}

export default App;
