import { useEffect } from 'react'
import './ItemListContainer.css'
import { useState } from 'react'
import { pedirDatos } from '../../helpers/pedirdatos'
import ItemList from '../ItemsList/ItemsList'
import { useParams, useSearchParams } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';

export const ItemListContainer = ({category}) => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchParams] = useSearchParams()
    const search = searchParams.get('search')
    
    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((data) => {
                if (!category) {
                    setProductos(data)
                } else {
                    setProductos( data.filter((el) => el.category === category) )
                }
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
            
    }, [category])

    const listado = search
        ? productos.filter((el) => el.nombre.toLowerCase().includes(search.toLowerCase())) 
        : productos

    console.log(listado)

    return (
        <div className="container my-5">
            {
            loading
                ?<Spinner animation="border" role="status">
                <span className="Loading visually-hidden">Loading...</span>
                </Spinner>
                : <ItemList items={listado}/>
            }
        </div>
        
    )
}