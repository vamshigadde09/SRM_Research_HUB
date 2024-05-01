import React, { useState } from "react";
import TeacherDashbord from "./TeacherDashbord";
import AdminDashbord from "./AdminDashbord";

function App() {
  const [papers, setPapers] = useState([]);

  const addPaper = (newPaper) => {
    setPapers((prevPapers) => [...prevPapers, newPaper]);
  };

  return (
    <div className="App">
      <TeacherDashbord papers={papers} addPaper={addPaper} />
      <AdminDashbord papers={papers} />
    </div>
  );
}

export default App;
