import Axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import FormulaireUpdate from "./FormulaireUpdate";
// import { toast } from "react-toastify";

function ModalModifInfo({ closeModal, raffraichir, id }) {
  const [dataUpdate, setDataUpdate] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const reponse = await Axios(`http://localhost:3001/chaqueQrCode/${id}`);
      setDataUpdate(reponse.data[0]);
      setShow(true);
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      {show && (
        <FormulaireUpdate
          dataUpdate={dataUpdate}
          closeModal={closeModal}
          raffraichir={raffraichir}
          id={id}
        />
      )}
    </Fragment>
  );
}

export default ModalModifInfo;
