import React, { useState } from "react";
import "./GenerateCodeQr.css";
import profil from "../../images/images.png";
import Axios from "axios";
function GenerCodeQr() {
  // state
  const [data, setData] = useState({
    nom: "",
    prenoms: "",
    addresse: "",
    mention: "",
    parcours: "",
    matricule: "",
  });
  //fonction
  const handleChangeData = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };
  const handleSendData = async (e) => {
    e.preventDefault();
    try {
      const reponse = await Axios.post("http://localhost:3001/addQr", {
        ...data,
      });
      setData({
        nom: "",
        prenoms: "",
        addresse: "",
        mention: "",
        parcours: "",
        matricule: "",
      });
    } catch (err) {
      // toast.error(err.response.data.message);
      console.log(err);
    }
    console.log(data);
  };
  return (
    <form className="genQr" onSubmit={handleSendData}>
      <div className="place">
        <div type="file" className="imgEtud">
          <span>
            <img src={profil} alt="Italian Trulli" className="fprofil" />
          </span>
        </div>
        <div className="infoEtud wd">
          <div className="cInfoEtud">
            <label>
              Nom<span>*</span>
            </label>
            <input
              type="text"
              className="inputInfoEtud"
              id="nom"
              value={data.nom}
              onChange={handleChangeData}
            />
          </div>
          <div className="cInfoEtud">
            <label>
              Prenoms<span>*</span>
            </label>
            <input
              type="text"
              className="inputInfoEtud"
              id="prenoms"
              value={data.prenoms}
              onChange={handleChangeData}
            />
          </div>
          <div className="cInfoEtud">
            <label>
              Addresse<span>*</span>
            </label>
            <input
              type="text"
              className="inputInfoEtud"
              id="addresse"
              value={data.addresse}
              onChange={handleChangeData}
            />
          </div>
        </div>
      </div>
      <div className="infoEtud">
        <div className="cInfoEtud">
          <label>
            Mention<span>*</span>
          </label>
          <input
            type="text"
            className="inputInfoEtud"
            id="mention"
            value={data.mention}
            onChange={handleChangeData}
          />
        </div>
        <div className="cInfoEtud">
          <label>
            Parcours<span>*</span>
          </label>
          <input
            type="text"
            className="inputInfoEtud"
            id="parcours"
            value={data.parcours}
            onChange={handleChangeData}
          />
        </div>
        <div className="cInfoEtud">
          <label>
            Matricule<span>*</span>
          </label>
          <input
            type="text"
            className="inputInfoEtud"
            id="matricule"
            value={data.matricule}
            onChange={handleChangeData}
          />
        </div>
      </div>

      <div className="cInfoEtud">
        <button type="submit" className="btnEnvInfo">
          Envoyer
        </button>
      </div>
    </form>
  );
}

export default GenerCodeQr;
