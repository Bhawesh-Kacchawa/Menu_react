import { useState } from "react";
import data from "./data"
import FoodItemCard from "./FoodItemCard";

const App = () => {
  const [items, setItems] = useState(data)
  const [isSelect, setIsSelect] = useState(false)
  const [selectedItem, setSelectedItem] = useState()

  const showFullMenu = () => {
    setIsSelect(false)
    setItems(data)
  }

  const showSelected = (buttonText) => {
    const filterItems = items.filter((item) => item.category == buttonText)
    // console.log(filterItems);
    setSelectedItem(filterItems)
    setIsSelect(true)
  }

  // console.log(items);

  return <div className="menu">
    <h1 className="title">Our Menu</h1>
    <div className="btn-container ">
      <button className="btn" onClick={showFullMenu}>All</button>
      <button className="btn" onClick={() => showSelected("shakes")}>shakes</button>
      <button className="btn" onClick={() => showSelected("breakfast")}>Breakfast</button>
      <button className="btn" onClick={() => showSelected("lunch")}>Lunch</button>
    </div>

    {isSelect ? <section className="section-center">
      {selectedItem.map((item) => {
        return <FoodItemCard item={item} />
      })}
    </section> :
      <section className="section-center">
        {items.map((item) => {
          return <FoodItemCard item={item} />
        })}
      </section>

    }


  </div>;
};
export default App;
