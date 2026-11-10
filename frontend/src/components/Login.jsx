
import { useState } from "react";

export default function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const iniciarSesion = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const respuesta = await fetch(
                "http://127.0.0.1:8000/api/token/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username,
                        password
                    })
                }
            );

            if (!respuesta.ok) {
                throw new Error("Usuario o contraseña incorrectos");
            }

            const datos = await respuesta.json();

            localStorage.setItem("access", datos.access);
            localStorage.setItem("refresh", datos.refresh);

            onLogin();

        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h1>Iniciar sesión</h1>

            <form onSubmit={iniciarSesion}>
                <div>
                    <label>Usuario</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Contraseña</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {error && <p>{error}</p>}

                <button type="submit">
                    Iniciar sesión
                </button>
            </form>
        </div>
    );
}
