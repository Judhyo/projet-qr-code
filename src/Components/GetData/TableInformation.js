import React from "react";

function TableInformation({ dataEtud }) {
  console.log(dataEtud);
  {
  }
  return (
    <div>
      {dataEtud.map((index) => {
        return (
          <ul key={index.id_etud}>
            <li>{index.nom}</li>
            <li>{index.matricule}</li>
            <li>
              <img src={index.qrCode} />
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default TableInformation;
