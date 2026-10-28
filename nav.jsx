
import { useState, useContext } from "react";
import { DataContext } from "./Datacontext";

function Nav() {
  const Data = useContext(DataContext);

  const [Home, setHome] = useState(true);
  const [About, setAbout] = useState(false);
  const [List, setList] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

const tasksPerPage = 3;

const lastIndex = currentPage * tasksPerPage;
const firstIndex = lastIndex - tasksPerPage;

const currentTasks = Data.slice(firstIndex, lastIndex);

const totalPages = Math.ceil(Data.length / tasksPerPage);

  const handleHome = () => {
    setHome(true);
    setAbout(false);
    setList(false);
  };

  const handleAbout = () => {
    setHome(false);
    setAbout(true);
    setList(false);
  };

  const handleList = () => {
    setHome(false);
    setAbout(false);
    setList(true);
  };

  const pendingTasks = Data.filter(
    (item) => item.completed === false
  );

  const completedTasks = Data.filter(
    (item) => item.completed === true
  );

  return (
<div className="mainpagee">
      <div className="nav">
      <ul>
        <div className="title"><h1>TO DO List</h1></div>
        <div className="btn">

        <button className={`navitem ${Home ? "active" : ""}`}   onClick={handleHome}>Home</button>
        <button       className={`navitem ${About ? "active" : ""}`}   onClick={handleAbout}>About</button>
        <button     className={`navitem ${List ? "active" : ""}`}   onClick={handleList}>List</button>
        </div>
      </ul>

      </div>
      {Home && (
          <div className="homepage">
          <div className="card">
            <h2>Pending Tasks</h2>
            <h3>{pendingTasks.length}</h3>
          </div>

          <div className="card">
            <h2>Completed Tasks</h2>
            <h3>{completedTasks.length}</h3>
          </div>

          <div className="card">
            <h2>Running Tasks</h2>
            <h3>0</h3>
          </div>
        </div>
      )}

      {About && (
          <div className="aboutpage">
          <h1>About Page</h1>
          <p>Total tasks: {Data.length}</p>
        </div>
      )}

    {List && (
        <div className="listpage">
    <h1>Todo List</h1>

    {currentTasks.map((item) => (
        <div className="id" key={item.id}>
        <h3>
          {item.id}. {item.title}
        </h3>

        <p>
          Status: {item.completed ? "Completed" : "Pending"}
        </p>
      </div>
    ))}

    <div className="pagination">
      {Array.from(
          { length: totalPages },
          (_, index) => index + 1
        ).map((page) => (
            <button button
            key={page}
            className={`pagitem ${currentPage === page ? "active" : ""}`}
            onClick={() => setCurrentPage(page)}
            >
          {page}
          </button>
       
    ))}
    </div>
  </div>
)}
      

</div>
  );
}

export default Nav;
