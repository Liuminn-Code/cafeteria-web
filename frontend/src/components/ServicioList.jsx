// Formatea un número como pesos chilenos: 250000 -> $250.000
const formatoCLP = (valor) =>
Number(valor).toLocaleString("es-CL", { style: "currency", currency: "CLP" });
export default function ServicioList({ servicios }) {
if (servicios.length === 0) {
return <p className="aviso">Aún no hay servicios registrados.</p>;
}
return (
<table className="tabla">
<thead>
<tr>
<th>Nombre</th>
<th>Descripción</th>
<th>Precio</th>
<th>Estado</th>
</tr>
</thead>
<tbody>
{servicios.map((s) => (
// key: identificador único para que React distinga cada fila
<tr key={s.id}>
<td>{s.nombre}</td>
<td>{s.descripcion}</td>
<td>{formatoCLP(s.precio)}</td>
<td>{s.activo ? "Activo" : "Inactivo"}</td>
</tr>
))}
</tbody>
</table>
);
}