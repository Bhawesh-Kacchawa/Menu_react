const FoodItemCard = ({item})=>{
    return <section>
        <div className="menu-item">
            <img src={item.img} alt="img" className="img" />
        </div>
        <div className="item-info">
            <header>
            <h5>{item.title}</h5>
            <h5 className="item-price">$ {item.price}</h5>
            </header>
            <p className="item-text">{item.desc}</p>
        </div>
    </section>
}

export default FoodItemCard