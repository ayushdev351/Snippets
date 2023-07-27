import ResPageDish from "./ResPageDish";

const DishListAccordian = ({itemCards, title, open, setShowIndex}) => {

    const clickHandler = () => {
        setShowIndex()
    }

    return(
        <div className="accordian">
            <div className="accordian-name" onClick={clickHandler}>
                <h3>{`${title} ⬇️`}</h3>
            </div>
            {
                open ? (itemCards?.map((itemCard) => {
                    return(
                        <ResPageDish 
                        key = {itemCard?.card?.info?.id}
                        name = {itemCard?.card?.info?.name}
                        price = {itemCard?.card?.info?.price}
                        desc = {itemCard?.card?.info?.description}
                        image = {itemCard?.card?.info?.imageId}
                        />
                    )
                })) : (<h1></h1>)
            }
        </div>
    )
}


export default DishListAccordian;