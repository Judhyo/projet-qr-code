import Axios from "axios";
import React, { useEffect, useState } from "react";
import TableInformation from "./TableInformation";
import TableInfo from "./TableInfo";

function Data() {
  const [dataEtudiant, setDataEtudiant] = useState([]);
  const [show, setShow] = useState(false);
  const [raff, setRaff] = useState(false);

  const raffraichir = () => {
    setRaff(!raff);
  };

  useEffect(() => {
    const fetchData = async () => {
      const reponse = await Axios("http://localhost:3001/toutDataEtudiant");
      setDataEtudiant(reponse.data);
      setShow(true);
    };
    fetchData();
  }, [raff]);

  {
    /* <TableInformation dataEtud={dataEtudiant} raffraichir={raffraichir} /> */
  }
  return (
    <div className="Contenu-materiel">
      {show && <TableInfo dataEtud={dataEtudiant} raffraichir={raffraichir} />}
    </div>
  );
}

export default Data;
