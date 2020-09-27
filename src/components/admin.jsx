import React from 'react'

const Admin=(props)=>{

   return(
       <React.Fragment>
           year:{props.match.params.year};
           month:{props.match.params.month};

       </React.Fragment>
   )
}


export default Admin;