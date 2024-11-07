import React, { useState, useEffect } from "react";
// import ModalMateriel from './ModalMateriel'
// import { AiOutlineEdit } from "react-icons/ai";
// import { MdDelete } from "react-icons/md"
import Axios from "axios";
// import { toast } from 'react-toastify'
// import ModalModifMat from './ModalModifMat';
import ModalModifInfo from "./ModalModifInfo";
import "./style.css";

function TableMateriel({ dataEtud, raffraichir }) {
  const [dataEtudiant, setDataEtudiant] = useState(dataEtud);
  const [currentData, setCurrentData] = useState(1);
  const [dataPage, setDataPage] = useState(5);
  const [showModal, setShowModal] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    setDataEtudiant(dataEtud);
  }, [raffraichir]);

  const pageNumber = [];
  const totalData = dataEtudiant.length;

  //copie nouveau donnee
  const indexOfLastData = currentData * dataPage;
  const indexOfFirstData = indexOfLastData - dataPage;
  const newDataEtudiant = dataEtudiant.slice(indexOfFirstData, indexOfLastData);

  //pour avoir acceder au pagination
  const pagination = (totalData, dataPage) => {
    for (let i = 1; i <= Math.ceil(totalData / dataPage); i++) {
      pageNumber.push(i);
    }
  };
  pagination(totalData, dataPage);

  // pagination
  const handleClickPageleft = () => {
    setCurrentData(currentData - 1);
    // console.log("currentData():"+currentData)
    if (currentData === 1) {
      setCurrentData(1);
    }
  };
  const handleClickPageright = () => {
    setCurrentData(currentData + 1);
    // console.log("currentData():"+currentData)
    if (currentData === pageNumber.length) {
      setCurrentData(pageNumber.length);
    }
  };
  const handleClickPagination = (n) => {
    // console.log("pagination:"+n)
    setCurrentData(n);
  };

  const filterData = (e) => {
    let req = e.target.value;
    let datas = dataEtud.filter((query) =>
      query.nom.toLowerCase().includes(req.toLowerCase())
    );
    setDataEtudiant(datas);
  };

  const handleChangeView = (e) => {
    setCurrentData(1);
    e.target.value === "Tous"
      ? setDataPage(totalData)
      : setDataPage(e.target.value);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setShowUpdate(false);
  };

  const handleDeleteData = async (id) => {
    try {
      const reponse = await Axios.delete(
        `http://localhost:3001/deleteData/${id}`
      );
      const newData = dataEtudiant.filter((index) => index.id_etud !== id);
      setDataEtudiant(newData);
      // toast.success(reponse.data.message);
    } catch (err) {
      // toast.error(err.response.data.message);
    }
  };
  const handleUpdateData = (id) => {
    setShowUpdate(true);
    setId(id);
  };
  const modalUpdate = showUpdate && (
    <ModalModifInfo
      raffraichir={raffraichir}
      closeModal={handleCloseModal}
      id={id}
    />
  );
  const modal = showModal && (
    // <ModalMateriel raffraichir={raffraichir} closeModal={handleCloseModal} />
    <div>aaa</div>
  );

  const dataTable = newDataEtudiant.map((index) => (
    <tr key={index.id_etud}>
      <td>{index.nom}</td>
      <td>{index.prenoms}</td>
      <td>{index.matricule}</td>
      <td>
        <img src={index.qrCode} />
      </td>
      <td className="btn-flex">
        <span
          className="btn-edit"
          onClick={() => handleUpdateData(index.id_etud)}
        >
          {/* <AiOutlineEdit /> */} modifier
        </span>
        <span
          className="btn-delete"
          onClick={() => handleDeleteData(index.id_etud)}
        >
          {/* <MdDelete /> */} effacer
        </span>
      </td>
    </tr>
  ));

  return (
    <>
      <div className="style-modal">
        {modal}
        {modalUpdate}
      </div>
      <div className="contenu-info">
        <div className="contenu-info1">
          {/* <h2>QrCode</h2> */}
          <p>
            qrCode / <span className="liste">liste</span>
          </p>
        </div>
        <div className="contenu-info2">
          <input
            type="text"
            className="input-recherche"
            placeholder="Recherche...."
            id="recherche"
            name="recherche"
            onChange={filterData}
          />
          <span className="btn-ajout" onClick={handleShowModal}>
            Ajout
          </span>
        </div>
      </div>

      <div className="table">
        <div className="table-view">
          <label>Afficher: </label>
          <select onChange={handleChangeView}>
            <option value="5">5personnes</option>
            <option value="10">10personnes</option>
            <option value="Tous">Tous</option>
          </select>
        </div>
        <div>
          <table className="contenu-table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prenoms</th>
                <th>Matricule</th>
                <th>QrCode</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{dataTable}</tbody>
          </table>
        </div>

        <div className="table-info">
          <div className="table-info1">
            <span>Total Materiel : {dataEtud.length}</span>
          </div>
          <div className="table-info2">
            <ul>
              <li onClick={handleClickPageleft} className="icon btn-left">
                &laquo;
              </li>
              {pageNumber.map((n, index) => (
                <li
                  key={index}
                  className="N-icon"
                  onClick={() => handleClickPagination(n)}
                >
                  {n}
                </li>
              ))}
              <li className="icon btn-right" onClick={handleClickPageright}>
                &raquo;
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default TableMateriel;
