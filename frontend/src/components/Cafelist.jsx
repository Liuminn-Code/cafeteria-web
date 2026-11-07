// Formatea un número como pesos chilenos
const formatoCLP = (valor) =>
  Number(valor).toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
  });

export default function CafeList({ cafes }) {
  if (cafes.length === 0) {
    return <p className="aviso">Aún no hay cafés registrados.</p>;
  }

  return (
    <table className="tabla">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Origen</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Altura</th>
          <th>Variedad</th>
          <th>Peso (g)</th>
        </tr>
      </thead>

      <tbody>
        {cafes.map((c) => (
          <tr key={c.id}>
            <td>{c.nombre}</td>
            <td>{c.origen}</td>
            <td>{formatoCLP(c.precio)}</td>
            <td>{c.stock}</td>
            <td>{c.altura}</td>
            <td>{c.variedad}</td>
            <td>{c.peso}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}