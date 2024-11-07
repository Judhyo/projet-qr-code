import Axios from "axios";
import React, { useRef, useState } from "react";
// import { toast } from 'react-toastify'

function FormulaireUpdate({ closeModal, raffraichir, dataUpdate, id }) {
  const [data, setData] = useState({
    nom: dataUpdate.nom,
    prenoms: dataUpdate.prenoms,
    addresse: dataUpdate.addresse,
    parcours: dataUpdate.parcours,
    mention: dataUpdate.mention,
    matricule: dataUpdate.matricule,
  });

  const handleChangeData = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };
  const handleSendData = async (e) => {
    e.preventDefault();
    try {
      const reponse = await Axios.put(
        `http://localhost:3001/updateData/${id}`,
        { ...data }
      );
      // toast.success(reponse.data.message)
      raffraichir();
      closeModal();
    } catch (err) {
      //   toast.error(err.response.data.message);
      console.log(err);
    }
  };

  return (
    <div className="modal">
      <div className="paragraph">
        <div className="style-icon">
          <span className="icons boutton" onClick={closeModal}>
            &times;
          </span>
        </div>
        <div className="modal-titre">
          <h2>Modification materiel</h2>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSendData} autoComplete="off">
            <div className="constenu-modal">
              <label>
                Nom<span style={{ color: "red" }}>*</span>
              </label>
              <br />
              <input
                className="btn-input"
                type="text"
                id="nom"
                value={data.nom}
                onChange={handleChangeData}
              />
            </div>
            <div className="constenu-modal">
              <label>
                Prenoms<span style={{ color: "red" }}>*</span>
              </label>
              <br />
              <input
                className="btn-input"
                type="text"
                id="prenoms"
                value={data.prenoms}
                onChange={handleChangeData}
              />
            </div>
            <div className="constenu-modal">
              <label>
                Adresse<span style={{ color: "red" }}>*</span>
              </label>
              <br />
              <input
                className="btn-input"
                type="text"
                id="addresse"
                value={data.addresse}
                onChange={handleChangeData}
              />
            </div>
            <div className="constenu-modal">
              <label>
                Parcours<span style={{ color: "red" }}>*</span>
              </label>
              <br />
              <input
                className="btn-input"
                type="text"
                id="parcours"
                value={data.parcours}
                onChange={handleChangeData}
              />
            </div>
            <div className="constenu-modal">
              <label>
                Mention<span style={{ color: "red" }}>*</span>
              </label>
              <br />
              <input
                className="btn-input"
                type="text"
                id="mention"
                value={data.mention}
                onChange={handleChangeData}
              />
            </div>
            <div className="constenu-modal">
              <label>
                Matricule<span style={{ color: "red" }}>*</span>
              </label>
              <br />
              <input
                className="btn-input"
                type="text"
                id="matricule"
                value={data.matricule}
                onChange={handleChangeData}
              />
            </div>
            <div className="modal-footer">
              <button className="btn-modal cancel" onClick={closeModal}>
                Annuler
              </button>
              <button type="submit" className="btn-modal valide">
                valider
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormulaireUpdate;
