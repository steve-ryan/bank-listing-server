import React from "react";
import { Link } from "@reach/router";
function Bank({ bankDisplay }) {
    const { Bank_id, Bank_name, Logo_url } = bankDisplay;
    return (
        <div>
            <img className="" src={Logo_url} alt={Bank_name} />
            <div>
                <div>{Bank_name}</div>
            </div>
            <div>
                <Link to={`/bank/${Bank_id}`}>See Branches</Link>
            </div>
        </div>
    );
}


export default Bank;