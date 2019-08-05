import React from "react";
function Branch({ branchDisplay }) {
  const {Logo_url, Branch_name, Location,Phone_Number,Email,Operation_hrs  } = branchDisplay;
  return (
    <div className="bank-container">
      <img className="banklogo" src={Logo_url} alt={Branch_name} />
      <div className="Bank-details">
        <p className="bankname">{Branch_name}</p><br />
        <p>{Location}</p>
        <p>{Operation_hrs}</p>
        <p>{Phone_Number}</p><br />
        <p>{Email}</p><br />
        
        </div>
    </div>
  );
}

export default Branch;