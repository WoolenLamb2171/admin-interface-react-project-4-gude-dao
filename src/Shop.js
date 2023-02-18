import React, { useState } from "react";
import uuid from "react-uuid";
import AddItem from "./components/AddItem.js";
import ItemsList from "./components/ItemsList.js"

export default function Shop() {
  const [item, setItem] = useState("");
  const [discription, setDescription] = useState("");
  const [items, setItems] = useState([]);

  const hendleSubmitButton = (event) => {
    if (!item || !discription) {
      alert("Пожалуйста, заполните все поля");
      event.preventDefault();
      return;
    }

    event.preventDefault();
    setItems([...items, { id: uuid(), name: item, desc: discription }]);

    setDescription("");
    setItem("");
  };

  const handleDeliteButton = (id) => {
    setItems((oldValues) => {
      return oldValues.filter((itm) => itm.id !== id);
    });
  };

  const handleItemChange =(event) => {
    setItem(event.target.value);
  } 

  const handleDiscriptionChange =(event) => {
    setDescription(event.target.value);
  } 


  return (
    <>
      <AddItem 
        item={item} 
        discription={discription} 
        onSubmitButton={hendleSubmitButton}  
        onItemChange={handleItemChange}
        onDiscriptionChange={handleDiscriptionChange}  
      />

      {!items.length ? (
        <div>
          <p className="ui-title">Добавьте первый товар</p>
        </div>
      ) : (
        <></>
      )}

      <ItemsList items={items} onDeliteButton={handleDeliteButton}/>
    </>
  );
}