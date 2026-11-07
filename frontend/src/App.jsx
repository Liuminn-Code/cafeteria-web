import { useCallback, useEffect, useState } from "react";
import { cafesApi } from "./api/client";
import CafeList from "./components/CafeList";
import CafeForm from "./components/CafeForm";
import "./App.css";

export default function App() {
  const [cafes, setCafes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

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
    cargar();
  }, [cargar]);

  return (
    <main className="contenedor">
      <h1>Cafés</h1>
      <CafeForm cafe={null} onGuardado={cargar} onCancelar={() => {}} />

      {cargando && <p className="aviso">Cargando…</p>}

      {error && <p className="aviso error">{error}</p>}

      {!cargando && !error && <CafeList cafes={cafes} />}
    </main>
  );
}