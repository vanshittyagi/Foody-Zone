import { useState, useEffect } from "react";
import Mid from "./Components/Mid";
import Navbar from "./Components/Navbar";
import useSWR from 'swr';

const BASE_URL = "http://localhost:9000";
const fetcher = (url) => fetch(url).then((res) => res.json());

function App() {
  const { data: foodData, error } = useSWR(BASE_URL, fetcher);
  const [filteredData, setFilteredData] = useState(foodData || []);
  const [selectedbutton, setselectedbutton] = useState("all");
  useEffect(() => {
    if (foodData) {
      setFilteredData(foodData);
    }
  }, [foodData]);
  if (error) return <div>Failed to load data</div>;
  if (!foodData) return <h1>Loading...</h1>;

  const handleSearch = (searchText) => {
    if (searchText === "") {
      setFilteredData(foodData);
    } else {
      const filtered = foodData.filter((food) =>
        food.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };
  const filtertype = (type)=>{
    if (type==="all"){
      setFilteredData(foodData)
      console.log("All data: ", foodData);
      setselectedbutton("all")
    } else {
      const filtered = foodData.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filtered)
    console.log("Filtered data: ", filtered);
    setselectedbutton(type);
  }
  }

  return (
    <div className="App">
      <Navbar onSearch={handleSearch} foodData={filteredData} filtertype={ filtertype } />
      <Mid foodData={filteredData} BASE_URL={BASE_URL} />
    </div>
  );
}

export default App;

