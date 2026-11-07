const BASE = "/api";

async function request(ruta, opciones = {}) {
  const { headers, ...resto } = opciones;
  const respuesta = await fetch(BASE + ruta, {
    ...resto,
    headers: { "Content-Type": "application/json", ...headers },
  });

  if (!respuesta.ok) {
    let detalle = null;
    try {
      detalle = await respuesta.json();
    } catch {
    }
    const error = new Error("Error " + respuesta.status);
    error.status = respuesta.status;
    error.detalle = detalle;
    throw error;
  }

  if (respuesta.status === 204) return null;
  return respuesta.json();
}

export const cafesApi = {
  listar: () => request("/cafes/"),
  crear: (datos) =>
    request("/cafes/", { method: "POST", body: JSON.stringify(datos) }),
  actualizar: (id, datos) =>
    request("/cafes/" + id + "/", { method: "PUT", body: JSON.stringify(datos) }),
  eliminar: (id) => request("/cafes/" + id + "/", { method: "DELETE" }),
};