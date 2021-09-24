import React from "react";
import Spend from "./Spend";

function Listado({ gastos }) {
  return (
    <div className="gastos-realizados">
      <h2>Listado</h2>
      {gastos.map(gasto => (
        <Spend key={gasto.id} gasto={gasto} />
      ))}
    </div>
  );
}

export default Listado;
