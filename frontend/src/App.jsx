
import { useCallback, useEffect, useState } from "react";
import { cafesApi } from "./api/client";
import CafeList from "./components/CafeList";
import CafeForm from "./components/CafeForm";
import Login from "./components/Login";
import "./App.css";

export default function App() {
  const [autenticado, setAutenticado] = useState(
    !!localStorage.getItem("access")
  );

  const [cafes, setCafes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [editando, setEditando] = useState(null);

  const cargar = useCallback(async () => {
    try {
      setError(null);
      setCargando(true);

      const datos = await cafesApi.listar();
      setCafes(datos);

    } catch (e) {
      setError("No se pudo cargar la lista. ¿Está encendido el servidor Django?");
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    if (autenticado) {
      cargar();
    }
  }, [cargar, autenticado]);

  const handleGuardado = () => {
    setEditando(null);
    cargar();
  };

  const handleEliminar = async (cafe) => {
    if (!window.confirm("¿Eliminar el café «" + cafe.nombre + "»?")) return;

    try {
      await cafesApi.eliminar(cafe.id);
      cargar();
    } catch (e) {
      setError("No se pudo eliminar el café.");
    }
  };

  const cerrarSesion = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setAutenticado(false);
  };

  if (!autenticado) {
    return (
      <Login onLogin={() => setAutenticado(true)} />
    );
  }

  return (
    <main className="contenedor">
      <h1>Cafés</h1>

      <button onClick={cerrarSesion}>
        Cerrar sesión
      </button>

      <CafeForm
        cafe={editando}
        onGuardado={handleGuardado}
        onCancelar={() => setEditando(null)}
      />

      {cargando && <p className="aviso">Cargando…</p>}

      {error && <p className="aviso error">{error}</p>}

      {!cargando && !error && (
        <CafeList
          cafes={cafes}
          onEditar={setEditando}
          onEliminar={handleEliminar}
        />
      )}
    </main>
  );
}
