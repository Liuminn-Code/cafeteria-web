# ☕ Cafeteria Web

## Descripción

Cafeteria Web es una aplicación web desarrollada para la gestión y visualización del inventario de una cafetería. Permite administrar los productos registrados, consultar sus características y controlar las cantidades disponibles mediante una interfaz intuitiva.

El proyecto utiliza Django REST Framework para el desarrollo del backend y React para la interfaz de usuario.

## Funcionalidades principales

- **Inicio de sesión:** autenticación de usuarios mediante JWT.
- **Gestión de cafés:** creación, consulta, edición y eliminación de productos.
- **Dashboard de inventario:** visualización de datos relevantes del inventario.
- **Control de stock:** consulta de las unidades disponibles de cada producto.
- **Información de productos:** registro de nombre, origen, precio, stock, altura, variedad y peso.

## Tecnologías utilizadas

### Backend
- Python
- Django
- Django REST Framework
- Simple JWT
- SQLite

### Frontend
- React
- JavaScript
- Vite
- CSS


## Requisitos previos

Antes de ejecutar el proyecto, es necesario tener instalado:

- Python 3
- Node.js y npm
- Git

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/Liuminn-Code/cafeteria-web.git
cd cafeteria-web
```

### 2. Configurar el backend

Ingresar a la carpeta del backend:

```powershell
cd backend
```

Crear el entorno virtual:

```powershell
python -m venv .venv
```

Activar el entorno virtual:

```powershell
.\.venv\Scripts\Activate.ps1
```

Instalar las dependencias:

```powershell
pip install -r requirements.txt
```

Aplicar las migraciones:

```powershell
python manage.py migrate
```

Iniciar el servidor:

```powershell
python manage.py runserver
```


### 3. Configurar el frontend

Abrir otra terminal e ingresar a la carpeta del frontend:

```powershell
cd frontend
```

Instalar las dependencias:

```powershell
npm install
```

Iniciar el servidor de desarrollo:

```powershell
npm run dev
```

El frontend estará disponible en la dirección indicada por Vite, normalmente:

`http://localhost:5173/`

## API REST

El backend dispone de los siguientes endpoints principales:

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/cafes/` | Obtener cafés |
| POST | `/api/cafes/` | Registrar un café |
| PUT | `/api/cafes/{id}/` | Actualizar un café |
| DELETE | `/api/cafes/{id}/` | Eliminar un café |
| POST | `/api/registro/` | Registrar un usuario |
| POST | `/api/token/` | Iniciar sesión |
| POST | `/api/token/refresh/` | Renovar token |

## Estructura del proyecto

```text
cafeteria-web/
│
├── backend/
│   ├── config/
│   ├── catalogo/
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── index.html
│
└── README.md
```

## Base de datos

El proyecto utiliza SQLite para almacenar la información de los productos y usuarios.

Cada café contiene los siguientes atributos:

- ID
- Nombre
- Origen
- Precio
- Stock
- Altura
- Variedad
- Peso

## Autor

Proyecto desarrollado como parte de un trabajo académico de Ingeniería Civil Informática.

**Repositorio:** [cafeteria-web](https://github.com/Liuminn-Code/cafeteria-web)
