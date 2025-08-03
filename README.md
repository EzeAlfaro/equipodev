# Portfolio Profesional

Un sitio web moderno de portfolio para un equipo de desarrollo freelancer, construido con React, TypeScript y Tailwind CSS.

## Tecnologías Utilizadas

- **React 19** con TypeScript
- **Vite** como bundler y servidor de desarrollo
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones
- **React Hook Form** para manejo de formularios
- **EmailJS** para envío de emails

## Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── layout/         # Componentes de layout (Header, Footer)
│   ├── sections/       # Secciones de la página
│   └── ui/            # Componentes UI reutilizables
├── data/              # Datos mock y configuración
├── types/             # Definiciones de tipos TypeScript
└── utils/             # Funciones utilitarias
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

## Configuración Completada

✅ Proyecto React con TypeScript usando Vite  
✅ Tailwind CSS configurado  
✅ Framer Motion instalado  
✅ React Hook Form y EmailJS instalados  
✅ Estructura de carpetas creada (components, types, data, utils)  

## Despliegue en Netlify

Este proyecto está configurado para ser desplegado fácilmente en Netlify. Se han agregado los archivos de configuración necesarios para manejar correctamente el enrutamiento de SPA.

### Archivos de configuración para Netlify

- `netlify.toml` - Configuración principal para Netlify
- `public/_redirects` - Reglas de redirección para SPA

### Pasos para desplegar en Netlify

1. **Desde la interfaz de Netlify:**
   - Inicia sesión en tu cuenta de Netlify
   - Haz clic en "New site from Git"
   - Conecta con tu repositorio de GitHub/GitLab/Bitbucket
   - Selecciona el repositorio de este proyecto
   - Configuración de build:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Haz clic en "Deploy site"

2. **Desde la línea de comandos (CLI):**
   - Instala Netlify CLI: `npm install -g netlify-cli`
   - Ejecuta `netlify login` para autenticarte
   - Ejecuta `netlify init` y sigue las instrucciones
   - Despliega con `netlify deploy --prod`

3. **Despliegue manual:**
   - Ejecuta `npm run build` para generar la carpeta `dist`
   - Arrastra y suelta la carpeta `dist` en la sección de despliegue manual de Netlify

### Solución de problemas comunes

- **Problema de rutas:** Si encuentras errores 404 al recargar páginas, verifica que los archivos `netlify.toml` y `public/_redirects` estén correctamente configurados.
- **Recursos no encontrados:** Asegúrate de que todas las rutas a recursos (imágenes, CSS, JS) sean relativas y no absolutas.
- **Variables de entorno:** Si usas variables de entorno, configúralas en la sección de "Environment variables" en el panel de Netlify.