import React from "react";
import Item from "./Item";

const ItemList = (props) =>{
    const list = props.items.map((element) => {
        return (
          <li key={element.id} className="ui-item-list">
            <Item info={element} />
            <button
              className="item-button"
              onClick={() => props.onDeliteButton(element.id)}
            >
              Удалить
            </button>
          </li>
        );
    });

    return (
      <ul className="ui-list">
        {list}
      </ul>
    );

}

export default ItemList;