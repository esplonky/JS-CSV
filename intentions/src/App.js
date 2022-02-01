import logo from './logo.svg';
import './App.css';
import papaparse from 'papaparse';
import loadFile from './loadFile';

function App() {

  const csvConfig = {
    download: true,
    delimiter: "",	// auto-detect
    newline: "",	// auto-detect
    quoteChar: '"',
    escapeChar: '"',
    header: false,
    transformHeader: undefined,
    dynamicTyping: false,
    preview: 0,
    encoding: "",
    worker: false,
    comments: false,
    step: undefined,
    complete: undefined,
    error: undefined,
    downloadRequestHeaders: undefined,
    downloadRequestBody: undefined,
    skipEmptyLines: false,
    chunk: undefined,
    chunkSize: undefined,
    fastMode: undefined,
    beforeFirstChunk: undefined,
    withCredentials: undefined,
    transform: undefined,
    delimitersToGuess: [',', '\t', '|', ';', papaparse.RECORD_SEP, papaparse.UNIT_SEP]
  }


  var csvUrl = loadFile("test.csv");
  console.log(csvUrl)
  var data = Papa.parse(csvUrl, csvConfig);
  console.log(data);
  var hello = (<h1 id="intenName">{csvUrl}</h1>);

  return(hello);
  
  }





export default App;
