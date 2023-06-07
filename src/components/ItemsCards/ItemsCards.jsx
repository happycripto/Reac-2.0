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

