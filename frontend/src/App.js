import {BrowserRouter, Routes, Route} from "react-router-dom";
import TabunganList  from "./components/TabunganList";
import AddTabungan from "./components/AddTabungan";
import EditTabungan from "./components/EditTabungan";

function App() {
  return (
    <BrowserRouter>
    <div className="container">
    <Routes>
      <Route path="/" element={<TabunganList/>}></Route>
      <Route path="add" element={<AddTabungan/>}></Route>
      <Route path="edit/:id" element={<EditTabungan/>}></Route>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
