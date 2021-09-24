import React from "react";
import Spend from "./Spend";

function Listado({ budget }) {
  return (
    <div className="budget-made">
      <h2>List</h2>
      {budget.map(budget => (
        <Spend key={budget.id} budget={budget} />
      ))}
    </div>
  );
}

export default Listado;
