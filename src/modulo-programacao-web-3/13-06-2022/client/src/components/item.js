function Item({ titulo, quantidade, image }) {
  return (
    <div>
      <h1>{titulo}</h1>
      <p>Quantidade: {quantidade}</p>
      <img
        src={image}
        alt={titulo}
        style={{ height: '100px', width: '100px' }}
      />
    </div>
  );
}

export default Item;
