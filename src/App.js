import React, { useState } from 'react';
import data from './data';
import List from './List';
import "./App.css"
import Bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"
function App() {
  const [people, setPeople] = useState(data);
  console.log(people);
  return (
    <section
      className="w-50 mx-auto d-flex align-items-center justify-content-center"
      style={{ height:"100vh" }}
    >
      <div className="bg-light p-3 rounded w-50 ">
        <h2 className="text-center">{people.length} Birthday Today</h2>
        <h6 className="text-center">12.05.2021</h6>
        <div>
          <List people={people} />
        </div>
        <button onClick={()=> setPeople([])} className="btn btn-primary w-100  mt-3">Clear All </button>
        <button onClick={()=> setPeople(data)} className="btn btn-primary w-100  mt-3">Refresh List </button>
      </div>
    </section>
  );
}

export default App;
