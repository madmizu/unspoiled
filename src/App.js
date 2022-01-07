import './App.css';
import { useState, useEffect } from 'react';

import Header from './components/Header.js';
import Body from './components/Body.js';
import HomeImage from './components/HomeImage.js';

function App() {
  const [groceryItems, setGroceryItems] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  const [spoilDates, setSpoilDates] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [newPurchaseInstance,setNewPurchaseInstance] = useState();

  // READ: fetch request for data from local API
  useEffect(()=> {
    //get grocery items
    fetch('http://localhost:9292/grocery-items')
    .then(res => res.json())
    .then(setGroceryItems)
    //get inventory items
    fetch('http://localhost:9292/inventory')
    .then(res => res.json())
    .then(setInventory)
    //get shopping list items
    fetch('http://localhost:9292/shopping-list')
    .then(res => res.json())
    .then(setShoppingList)
  }, [])

  // DELETE: Removes item from Inventory or Shopping List & resets state accordingly
  function handleItemDelete (section, id) {
    const url = `http://localhost:9292/${section}/${id}`
    fetch(url,{
        method:'DELETE',
        headers:{'Content-Type':'application/json'}
    })
    .then(res => res.json())
    .then(data => {
      section === "inventory" ?
      setInventory(inventory.filter(item => item.id !== id)) :
      setShoppingList(shoppingList.filter(item => item.id !== id))
      console.log(data)
    })
  }

  // Create new purchase instance
  function createNewPurchase (purchaseData) {
    fetch('http://localhost:9292/purchases',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(purchaseData)
      })
      .then(res => res.json())
      .then(newPurchase => {
        setPurchases([newPurchase,...purchases])
        setNewPurchaseInstance(newPurchase)
  })
  }

  //Create new instances from form entry
  function createNewItem (formData) {
    // Create new spoil date
    fetch('http://localhost:9292/spoil-dates',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(formData)
      })
      .then(res => res.json())
      .then(newSpoilDate => {
        setSpoilDates([newSpoilDate,...spoilDates])
    })

    .then(()=> {
    // Create new Grocery Item
    fetch('http://localhost:9292/grocery-items',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(formData)
      })
      .then(res => res.json())
      .then(newGroceryItem => {
        setGroceryItems([newGroceryItem,...groceryItems])
    })

    .then(()=> {
    // Create new inventory item
    fetch('http://localhost:9292/inventory',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(formData)
      })
      .then(res => res.json())
      .then(newInventoryItem => {
        console.log(newInventoryItem)
        setInventory([newInventoryItem,...inventory])
    })
    })
    })
    


  }

  return (
    <div className="container-fluid border">
      <Header />
      <Body
        inventory={inventory}
        shoppingList={shoppingList}
        handleItemDelete={handleItemDelete}
        postGroceryItem={createNewItem}
        groceryItems={groceryItems}
        createNewPurchase={createNewPurchase}
        createNewItem={createNewItem}
        newPurchaseInstance={newPurchaseInstance}
      />      
      <HomeImage />
    </div>
  );
}

export default App;
