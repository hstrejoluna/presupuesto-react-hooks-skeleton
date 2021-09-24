import React from "react";

const Spend = ({ spend }) => (
  <li className="spend">
    <p>
      {spend.nameSpend}
      <span className="spend">$ {spend.amountSpend}</span>
    </p>
  </li>
);

export default Spend;
