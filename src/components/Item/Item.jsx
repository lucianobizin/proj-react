import { Link } from 'react-router-dom'
import "./Item.css"

const Item = ({ name, price, deliverables, image, category, id}) => {

    return (

        <div className='cardProduct'>
            <img className='imgProduct' src={image} alt={name} />
            <h3>Name: {name} </h3>
            <p>Price: {price} </p>
            <p>ID: {id} </p>
            <p>Deliverables: {deliverables}</p>
            <p>Category: {category}</p>
            <Link to={`/item/${id}`}> See Details </Link>
        </div>
    )
}

export default Item
