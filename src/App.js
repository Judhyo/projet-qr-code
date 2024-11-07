// import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Qrcode from "./Components/Qrcode/Qrcode";
import GenerCodeQr from "./Components/GenerCodeQr/GenerCodeQr";
import GetData from "./Components/GetData/GetData";
import Login from "./Components/Login";
import Main from "./Main";
import Logout from "./Components/Logout";
function App() {
  const [openQr, setOpenQr] = useState(false);
  return (
    // <div>
    //   {/* <button onClick={() => setOpenQr(!openQr)}>
    //     {openQr ? "Close" : "Open"} QR Scanner
    //   </button>
    //   {openQr && <Qrcode />} */}
    //   {/* <GenerCodeQr /> */}
    //   <GetData />

    // </div>
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/men" element={<Main />}>
          {/* <Route path="/men/Analitics" element={<Analitics />} />
          <Route path="/men/Materiel" element={<Materiel />} />*/}
          <Route path="/men/Scanner" element={<Qrcode />} />
          <Route path="/men/Information" element={<GetData />} />
          <Route path="/men/Etudiant" element={<GenerCodeQr />} />
          <Route path="/men/Logout" element={<Logout />} />
        </Route>
      </Routes>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
