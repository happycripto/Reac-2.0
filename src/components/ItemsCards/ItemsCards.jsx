import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"


const ItemCard = ({item}) => {

    { return (
        <Card style={{ width: '18rem', margin:'1rem' }}>
            <Card.Img variant="top" src={item.img} alt={item.nombre} />
            <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>{item.descripcion}</Card.Text>
                <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link>
            </Card.Body>
        </Card>
        );
    }
}

export default ItemCard;

