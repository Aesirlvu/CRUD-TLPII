# Backend CRUD con Express y MySQL

Este proyecto implementa operaciones CRUD (Crear, Leer, Actualizar, Eliminar) utilizando Node.js con el framework Express y una conexión a una base de datos MySQL a través del módulo MySQL2. Proporciona una API RESTful para interactuar con la base de datos de manera eficiente y segura.

## Tecnologías Utilizadas

- Node.js
- Express.js
- MySQL2
- dotenv (para variables de entorno)
- morgan (para logging)
- cors (para manejo de CORS)

## Instalación

1. Clona este repositorio:

   ```
   git clone https://github.com/tu-usuario/tu-proyecto.git
   cd tu-proyecto
   ```
2. Instala las dependencias:

   ```
   npm install *dependencias*
   ```
3. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias:

   ```
   DB_HOST=localhost
   DB_USER=tu_usuario
   DB_PASSWORD=tu_contraseña
   DB_DATABASE=nombre_de_tu_base_de_datos
   PORT=3000
   ```
4. Asegúrate de tener MySQL instalado y corriendo en tu sistema.
5. configura el script que inicializa el servidor, para ello debemos configurar dentro del package.json lo siguiente:

   ```javascript
   "scripts": {
       "dev": "node --watch main.js" 
     }
   ```

   - Ya no es necesario instalar "Nodemon" para reiniciar la ejecución del servidor al producirse algún cambio, ya que se existe el método nativo de Node: "node -- watch tu_archivo"

## Uso

1. Inicia el servidor:

   ```
   npm run dev
   ```
2. El servidor estará disponible en `http://localhost:3000` (o el puerto que hayas configurado).
3. Utiliza las siguientes rutas para interactuar con la API:

   - `GET /api/tasks`: Obtener todos los items
   - `GET /api/task/:id`: Obtener un item específico
   - `POST /api/task`: Crear un nuevo item
   - `PUT /api/task/:id`: Actualizar un item existente
   - `DELETE /api/task/:id`: Eliminar un item
