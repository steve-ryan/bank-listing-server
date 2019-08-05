import React from "react";
import { Link } from "@reach/router";
function Bank({ bankDisplay }) {
  const { Bank_id, Bank_name, Logo_url } = bankDisplay;
  return (
    <div className="bank-main">
      <div className="Bank-container">
        <img className="banklogo" src={Logo_url} alt={Bank_name} />
        <br />
        <div className="bankname">{Bank_name}</div>
        <br />
        <Link to={`/branch/${Bank_id}/branches`} className="branchBtn">
          <button>See Branches</button>
        </Link>
        <div className="Bank-details">
          {/* <span className="bankname">{Bank_name}</span> */}
          <br />
          {/* <Link to={`/branch/${Bank_id}/branches`} className="branchBtn">
          <button>See Branches</button>
        </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Bank;
