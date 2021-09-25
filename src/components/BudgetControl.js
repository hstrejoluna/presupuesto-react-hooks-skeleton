import React from "react";
import { revisarPresupuesto } from "../helpers";

const ControlPresupuesto = ({ presupuesto, restante }) => (
  <>
    <div className="alert alert-primary">Presupuesto: $ {presupuesto}</div>
    <div className={revisarPresupuesto(presupuesto, restante)}>
      Restantes : $ {restante}
    </div>
  </>
);

export default ControlPresupuesto;
