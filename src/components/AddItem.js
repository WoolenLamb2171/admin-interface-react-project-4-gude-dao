import React from "react";

const AddItem = (props) =>{
    return(
        <form onSubmit={props.onSubmitButton}>
        <div>
          <label htmlFor="itemName">Название товар:</label>
          <input
            value={props.item}
            onChange={props.onItemChange}
            type="text"
            id="itemName"
            placeholder="Название товара"
            className="ui-textfield"
          />
        </div>
        <div>
          <label htmlFor="discription">Описание товара:</label>
          <input
            value={props.discription}
            onChange={props.onDiscriptionChange}
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
    );
}

export default AddItem