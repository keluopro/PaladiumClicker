import React, {useEffect, useState} from "react";
import fetchDataOnPublicURL from "../../FetchData";

const Bugs = () => {


    return (
        <div className={"App-header"} style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/background.png`,
            height: "calc(100vh - 91.4px)",
            justifyContent: ""
        }}>
            <h2 style={{marginTop: "0px"}}>Heuuu, des bugs non il y en a pas 🧐</h2>
            <h4 style={{marginTop: "0px"}}>Working progress</h4>
        </div>
    );
}

export default Bugs;