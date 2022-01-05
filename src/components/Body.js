import SectionCard from "./SectionCard.js";
import { useState } from "react";
import Transactions from './Transactions.js';
import Inventory from './Inventory.js';
import ShoppingList from './ShoppingList.js';
import Recipes from './Recipes.js';

function Body () {
const [body, setBody] = useState("home");
const [shoppingList, setShoppingList] = useState("true");

    return (
        <div className = "body">
            {body === "home" ?
                <div className = "cards">
                    <SectionCard title = "Bought It" changeSection = {()=>setBody("transactions")}/>
                    <SectionCard title = "Have It" changeSection = {()=>setBody("inventory")}/>
                    <SectionCard title = "Need It" changeSection = {()=>setBody("shoppingList")}/>
                    <SectionCard title = "Cook It" changeSection = {()=>setBody("recipes")}/>
                </div> : <></> }
            {body === "transactions" ?
                <Transactions returnHome = {()=>setBody("home")} /> : null }
            {body === "inventory" ?
                <Inventory returnHome = {()=>setBody("home")} /> : null }
            {body === "shoppingList" ?
                <ShoppingList returnHome = {()=>setBody("home")} /> : null }
            {body === "recipes" ?
                <Recipes 
                    returnHome = {()=>setBody("home")}
                    addToList = {setShoppingList}
                        /> : null }
        </div>
    )
}

export default Body;