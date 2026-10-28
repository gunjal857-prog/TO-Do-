import { useState,useEffect,useContext } from "react";
import Nav from "./nav";
import axios from "axios";
import { DataContext } from "./Datacontext";
function App() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=10"
        );

        setData(response.data);
      } catch (error) {
        console.log("Error:", error);
      }
    }

    fetchData();
  }, []);

    return(
        <>
      <DataContext.Provider value={Data}>

        <Nav />
      </DataContext.Provider>
        </>
    )
}
export default App