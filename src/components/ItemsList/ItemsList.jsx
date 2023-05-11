import ItemCard from "../ItemsCards/ItemsCards";

const ItemList = ({ items }) => {
  return (
    <div>
      <h2>Masajes</h2>
      <hr />

      <div className="row">
        {items.map((item) => (
          <ItemCard
            item={item}
            key={item.id}
            // imageUrl={item.img} // Nueva propiedad imageUrl
          />
        ))}
      </div>
    </div>
  );
};

export default ItemList;