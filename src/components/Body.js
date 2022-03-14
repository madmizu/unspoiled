import SectionCard from "./SectionCard.js";
import { useState } from "react";
import Purchases from './Purchases.js';
import Inventory from './Inventory.js';
import Recipes from './Recipes.js';

function Body ({inventory, shoppingList, handleItemDelete, createNewPurchase, newPurchaseInstance, createNewItem}) {
const [body, setBody] = useState("home");


    return (
        <div className = "container-fluid">
            <br/>
            <br/>
            <div className="row">
                
            {body === "home" ?
                <>
                    <div className="col-sm-3 border">
                        <SectionCard title = "Bought It" changeSection = {()=>setBody("purchases")}/>
                    </div>
                    <div className="col-sm-3 border">
                        <SectionCard title = "Have It" changeSection = {()=>setBody("inventory")}/>
                    </div>
                    <div className="col-sm-3 border">
                        <SectionCard title = "Need It" changeSection = {()=>setBody("shoppingList")}/>
                    </div>
                    <div className="col-sm-3 border">
                    <SectionCard title = "Cook It" changeSection = {()=>setBody("recipes")}/>
                    
                    </div>
                    <br/>
                    <br/>
                    <div className = "foodLoop">
                    <br/>
                    <br/>
                        {/* <img className = "homeImage" src = "https://i.ibb.co/gdFP2jy/foodloop.gif" alt = {"foodLoop"} /> */}
                    </div>
                </> : <></> }
            {body === "purchases" ?
                <Purchases returnHome = {()=>setBody("home")} body={body} setBody={setBody} createNewPurchase={createNewPurchase}
                createNewItem={createNewItem} newPurchaseInstance={newPurchaseInstance}/> : null }
            {body === "inventory" ?
                <Inventory returnHome = {()=>setBody("home")} itemsToRender={inventory} handleItemDelete={handleItemDelete} body={body}/> : null }
            {body === "shoppingList" ?
                <Inventory returnHome = {()=>setBody("home")} itemsToRender={shoppingList} handleItemDelete={handleItemDelete} body={body} /> : null }
            {body === "recipes" ?
                <Recipes 
                    returnHome = {()=>setBody("home")}
                        /> : null }
            </div>
        </div>
    )
}

export default Body;