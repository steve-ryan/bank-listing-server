import React from "react";
 function Error({message}){
     return(
         <div className="error">
<p>{message}</p>
         </div>
     );
 }

 Error.defaultProps={
     message:"Sorry, there is a server error. Try again later!!"
 };

 export default Error;