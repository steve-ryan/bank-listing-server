import React from "react";
function Branch({ branchDisplay }) {
  const {Logo_url, Branch_name, Phone_Number,Email,Operational_hr  } = branchDisplay;
  return (
    <div className="bank-container">
      <img className="banklogo" src={Logo_url} alt={Branch_name} />
      <div className="Bank-details">
        <p className="bankname">{Branch_name}</p><br />
        <p>{Phone_Number}</p><br />
        <p>{Email}</p><br />
        <p>{Operational_hr}</p>
        </div>
    </div>
  );
}

export default Branch;