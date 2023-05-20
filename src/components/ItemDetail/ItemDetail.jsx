import "./ItemDetail.css"

const ItemDetail = ({id, name, price, deliverables, image}) => {
    return (
        <div className='ItemContainer'>
            <h2>Name: {name} </h2>
            <h3>Price: {price} </h3>
            <h3>ID: {id} </h3>
            <p>Deliverables: {deliverables} </p>
            <img src={image} alt={name} />
        </div>
    )
}

export default ItemDetail
