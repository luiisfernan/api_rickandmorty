import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";


const api = {
  base: "https://rickandmortyapi.com/api/",
};

export default function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const searchPressed = async () => {
    const result = await Axios.get(
      `${api.base}/character/?name=${search}`
    );
    setData(result.data.results);
  };



return ( 
    <div className="App">
      <header className="App-header">
        <div className="container">
          <span className="circle"></span>
          <h1>Rick and Morty</h1>
          <div>
            <input
              type="text"
              className="txt_name"
              placeholder="First name..."
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="btn">
              <button className="btn_search" onClick={searchPressed}>
                Search
              </button>
            </div>
            {/* data.results[0].name */}
          </div>
          
          {
            data && (
              data.map((data) => (
                <div className="contents" key={data.id}>
                  <div className="content">
                    <h2>{data.name}</h2>
                    <img src={data.image} alt={data.name} />
                  </div>
                </div>
                
              ))
            )
            
          }
            
          
          
        </div>
      </header>
    </div>
)
}

