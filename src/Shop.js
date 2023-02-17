import React, { useState } from "react";
import Item from "./Item.js";
import uuid from "react-uuid";

export default function Shop() {
  const [item, setItem] = useState("");
  const [description, setDescription] = useState("");
  const [items, setItems] = useState([]);

  const hendleSubmitButton = (event) => {
    if (!item || !description) {
      alert("Пожалуйста, заполните все поля");
      event.preventDefault();
      return;
    }
    event.preventDefault();
    setItems([...items, { id: uuid(), name: item, desc: description }]);
    // console.log(items);

    setDescription("");
    setItem("");
  };

  const handleDeliteButton = (id) => {
    //Items remove
    setItems((oldValues) => {
      return oldValues.filter((itm) => itm.id !== id);
    });
  };

  const list = items.map((element) => {
    return (
      <li key={element.id} className="ui-item-list">
        <Item info={element} />
        <button
          className="item-button"
          onClick={() => handleDeliteButton(element.id)}
        >
          Удалить
        </button>
      </li>
    );
  });

  return (
    <>
      <form onSubmit={hendleSubmitButton}>
        <div>
          <label htmlFor="itemName">Название товар:</label>
          <input
            value={item}
            onChange={(event) => setItem(event.target.value)}
            type="text"
            id="itemName"
            placeholder="Название товара"
            className="ui-textfield"
          />
        </div>
        <div>
          <label htmlFor="discription">Описание товара:</label>
          <input
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            id="discription"
            type="text"
            placeholder="Описание товара"
            className="ui-textfield"
          />
        </div>
        <div className="form-footer">
          <div className="validation"></div>
          <input type="submit" className="ui-button" value="Добавить" />
        </div>
      </form>

      {!items.length ? (
        <div>
          <p className="ui-title">Добавьте первый товар</p>
        </div>
      ) : (
        <></>
      )}

      <ul className="ui-list">
        {/* <li className="ui-item-list">
          <Item info={items[0]} />
          <button className="item-button">Удалить</button>
        </li> */}
        {list}
      </ul>
    </>
  );
}
