# Gran Milla

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

Gran Milla es una aplicación web desarrollada en **React + TypeScript** que propone recorrer y descubrir distintos destinos turísticos de Argentina a través de una experiencia visual simple y clara.

El proyecto busca presentar destinos, paisajes y cultura del país mediante una interfaz moderna y ligera, priorizando claridad, accesibilidad y rendimiento.

---

# Stack tecnológico

- React 18
- TypeScript
- Vite (build tool)
- CSS3
- HTML5

Herramientas de desarrollo:

- Node.js
- npm
- Git
- GitHub

---

# Arquitectura del proyecto

El proyecto sigue una arquitectura simple orientada a componentes.

```
Gran-Milla
│
├── public
│   ├── images
│   │   ├── bariloche.jpg
│   │   ├── cordoba.jpg
│   │   ├── el-calafate.jpg
│   │   ├── iguazu.jpg
│   │   ├── mar-del-plata.jpg
│   │   ├── mendoza.jpg
│   │   ├── purmamarca.jpg
│   │   ├── salta.jpeg
│   │   ├── san-martin-andes.jpg
│   │   └── ushuaia.jpg
│   │
│   ├── favicon.png
│   └── logo.png
│
├── src
│   │
│   ├── components
│   │   └── ContactForm.tsx
│   │
│   ├── config
│   │   └── env.ts
│   │
│   ├── styles
│   │   └── global.css
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

# Estructura de componentes

### App.tsx

Componente principal de la aplicación.

Responsabilidades:

- Renderizar la estructura general de la página
- Mostrar la introducción del proyecto
- Integrar los componentes secundarios
- Conectar variables de entorno

---

### ContactForm.tsx

Componente encargado de gestionar el formulario de contacto.

Funciones principales:

- Captura de datos del usuario
- Validación básica
- Simulación de envío de formulario

---

# Variables de entorno

El proyecto utiliza variables de entorno para configurar información de la aplicación.

Archivo:

```
.env
```

Ejemplo:

```
VITE_APP_NAME=Gran Milla
```

Las variables son gestionadas desde:

```
src/config/env.ts
```

Esto permite centralizar la configuración del proyecto.

---

# Instalación del proyecto

### 1 Clonar el repositorio

```bash
git clone https://github.com/usuario/gran-milla.git
```

### 2 Entrar al directorio

```bash
cd gran-milla
```

### 3 Instalar dependencias

```bash
npm install
```

### 4 Ejecutar el proyecto

```bash
npm run dev
```

El proyecto se ejecutará en:

```
http://localhost:5173
```

---

# Scripts disponibles

### Desarrollo

```
npm run dev
```

Inicia el servidor de desarrollo usando Vite.

---

### Build de producción

```
npm run build
```

Genera los archivos optimizados para producción.

---

### Vista previa del build

```
npm run preview
```

Permite probar el build generado localmente.

---

# Objetivos del proyecto

Gran Milla fue creado con los siguientes objetivos:

- Practicar desarrollo frontend moderno con React
- Aplicar TypeScript en proyectos reales
- Construir una experiencia web simple y clara
- Desarrollar una base escalable para futuras funcionalidades

---

# Posibles mejoras futuras

- Sistema de rutas con React Router
- Base de datos de destinos
- Filtros de búsqueda por región
- Integración con APIs turísticas
- Sistema de favoritos
- Panel de administración de destinos
