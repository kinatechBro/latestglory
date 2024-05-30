import { useState , useContext } from "react";
import userContext from "./Context";

import React from 'react'

function UserContext() {
    const [isLogged, setisLogged] = useState(null)
  return (
    <div>
        <useContext.provider>
        {isLogged? "": ""}
        </useContext.provider>
    </div>
  )
}

export default UserContext