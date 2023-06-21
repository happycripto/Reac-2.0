import ItemCard from "../ItemsCards/ItemsCards";

const ItemList = ({ items, category }) => {
  // Filtrar por categoría si se proporciona
  const filteredItems = category
    ? items.filter((item) => item.category === category)
    : items;
    
  return (
    <div>
      {category ? <h2>{category}</h2> : <h2>Servicios</h2>}
      <hr />
      <div className="row">
        {filteredItems.map((item) => (
          <ItemCard item={item} key={item.id} />
          
        ))}
        
      </div>
      
    </div>
    
  );
};

export default ItemList;
