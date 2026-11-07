import { useEffect, useState } from "react";
import { cafesApi } from "../api/client";

const VACIO = {
  nombre: "",
  origen: "",
  precio: "",
  stock: "",
  altura: "",
  variedad: "",
  peso: 250,
};

export default function CafeForm({ cafe, onGuardado, onCancelar }) {
  const [form, setForm] = useState(VACIO);
  const [errores, setErrores] = useState({});
  const [enviando, setEnviando] = useState(false);

  useEffect(() => {
    setForm(cafe ? { ...cafe } : VACIO);
    setErrores({});
  }, [cafe]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setErrores({});

    try {
      const datos = {
        ...form,
        precio: Number(form.precio),
        stock: Number(form.stock),
        altura: Number(form.altura),
        peso: Number(form.peso),
      };

      if (cafe) {
        await cafesApi.actualizar(cafe.id, datos);
      } else {
        await cafesApi.crear(datos);
      }

      setForm(VACIO);
      onGuardado();
    } catch (err) {
      if (err.status === 400 && err.detalle) {
        setErrores(err.detalle);
      } else {
        setErrores({
          general: ["No se pudo guardar. Intenta nuevamente."],
        });
      }
    } finally {
      setEnviando(false);
    }
  };

  const mensajes = (campo) =>
    errores[campo]?.map((m) => (
      <span key={m} className="campo-error">{m}</span>
    ));

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <h2>{cafe ? "Editar café" : "Nuevo café"}</h2>

      {errores.general && (
        <p className="campo-error">{errores.general.join(" ")}</p>
      )}

      <label>
        Nombre
        <input name="nombre" value={form.nombre} onChange={handleChange} />
        {mensajes("nombre")}
      </label>

      <label>
        Origen
        <input name="origen" value={form.origen} onChange={handleChange} />
        {mensajes("origen")}
      </label>

      <label>
        Precio (CLP)
        <input name="precio" type="number" value={form.precio} onChange={handleChange} />
        {mensajes("precio")}
      </label>

      <label>
        Stock
        <input name="stock" type="number" value={form.stock} onChange={handleChange} />
        {mensajes("stock")}
      </label>

      <label>
        Altura (m s. n. m.)
        <input name="altura" type="number" value={form.altura} onChange={handleChange} />
        {mensajes("altura")}
      </label>

      <label>
        Variedad
        <input name="variedad" value={form.variedad} onChange={handleChange} />
        {mensajes("variedad")}
      </label>

      <label>
        Peso (gramos)
        <input name="peso" type="number" value={form.peso} onChange={handleChange} />
        {mensajes("peso")}
      </label>

      <div className="acciones">
        <button type="submit" disabled={enviando}>
          {enviando ? "Guardando..." : "Guardar"}
        </button>

        <button type="button" onClick={onCancelar}>
          Cancelar
        </button>
      </div>
    </form>
  );
}