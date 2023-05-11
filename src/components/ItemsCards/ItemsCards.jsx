// import { Link } from "react-router-dom"


// const ItemCard = ({item}) => {

//     return (
//         <div className='col-3 m-2'>
//             <h3>{item.nombre}</h3>
//             <img src={item.img} alt={item.nombre} /> {/* Usando la nueva propiedad imageUrl */}
//             <p>{item.descripcion}</p>
//             <p>Categoria {item.category}</p>
//             <p><strong>Precio: ${item.precio}</strong></p>
//             <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link>
//         </div>
//     )
// }

// export default ItemCard

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemCard = ({item}) => {

    { return (
        <Card style={{ width: '18rem', margin:'1rem' }}>
            <Card.Img variant="top" src={item.img} alt={item.nombre} />
            <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>{item.descripcion}</Card.Text>
                <Button variant="success">Mas info</Button>
            </Card.Body>
        </Card>
        );
    }
}

export default ItemCard;