import React, {useEffect} from "react";
import {useState} from "react";
import "./BuildingList.css";
import useSWR from 'swr';
import {isVisible} from "@testing-library/user-event/dist/utils";


const fetcher = (...args) => fetch(...args, {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}).then(response => response.json());
const BuildingList = () => {

    const {
        data: buildingList,
        error,
        isValidating,
    } = useSWR('/Building.json', fetcher);

    if (error) return <div>Failed to load</div>
    if (isValidating) return <div>Loading...</div>

    if (buildingList)
        console.log(buildingList[0])


    function getImgPath(index, price) {
        if (price === -1)
            return "/ImgBuilding/unknown.png";
        else
            return "/ImgBuilding/" + (index + 1) + ".png";
    }

    function convertToInt(str) {
        if (typeof str === "number")
            return parseInt(str)
        else if (typeof str === "string") {
            return parseInt(str.replace(/\s/g, ''))
        } else
            console.error("Error in convertToInt function")
        return -1
    }

    function convertToFloat(str) {
        if (typeof str === "number")
            return parseFloat(str)
        else if (typeof str === "string") {
            return parseFloat(str.replace(/\s/g, '').replace(/,/g, '.'))
        } else
            console.error("Error in convertToFloat function")
        return -1
    }

    return (
        <ul className={"ul-horizontal"}>
            {
                buildingList && buildingList.map((building, index) => (
                    <Building buildingName={building["building_name"]} imgPath={getImgPath(index, building["price"])}
                              baseProductionLevel0={convertToFloat(building["base_production"])}
                              priceLevel0={convertToInt(building["price"])}/>
                ))
            }
        </ul>
    )
}


const Building = ({buildingName, imgPath, baseProductionLevel0, priceLevel0}) => {
    const [baseProduction, setBaseProduction] = useState(baseProductionLevel0)
    const [price, setPrice] = useState(priceLevel0)
    const [level, setLevel] = useState(1)

    const buy = () => {
        if (level === 99) {
            console.log("You have reached the maximum level for this building!")
            return
        }
        setPrice(priceLevel0 * Math.pow(1.10, level))
        setBaseProduction(baseProduction * level)
        setLevel(level + 1)
        console.log(`You bought a ${buildingName} for ${price} coins!`)
    }

    function printPricePretty(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return (
        <ul className={"Info-Building-list"}>
            <div className="imageWrapper">
                <img src={process.env.PUBLIC_URL + "/" + imgPath} alt="image" className={"Building-img"}></img>
                <div className="cornerLink">{buildingName}</div>
            </div>
            <li>Base Production: {printPricePretty(baseProduction.toFixed(2))}</li>
            <li>Level: {level}</li>
            <div>Price : {printPricePretty(price)}$</div>
            <button onClick={buy}>Buy</button>
        </ul>
    );
}
export default BuildingList;
