Proyecto: Pagina web para LAND-CASCADES - Landslide Dynamics and Cascading Hazards in the Andes

Rol del agente: Desarrollador Frontend Senior.

Objetivo: Crear un prototipo de plataforma web técnica y académica para la difusión de investigación sobre peligros en cascada en los Andes.

Stack de tecnología:
- HTML5
- CSS3 (sin frameworks)
- JavaScript (vanilla, sin framework)

Estructura y Semántica (HTML5)
- Requisito: El código debe ser 100% semántico.
- Elementos obligatorios: Uso de <header>, <nav>, <main>, <section> para áreas de datos, y <footer>.
- Accesibilidad: Asegurar que los botones y enlaces tengan etiquetas claras y roles definidos.
- Todos los textos visibles en la aplicación web debe estar en Español y tener otra version con un boton para ingles

Lógica y Manipulación del DOM (Vanilla JavaScript)
- Sin dependencias externas: No usar React, Vue, jQuery, ni librerías de diseño como Bootstrap o Tailwind. Todo el CSS y JS debe ser nativo.
- Feedback Visual: No utilizar alert(), confirm() ni prompt(). Cualquier respuesta al usuario (ej. "Mensaje enviado", "Cargando datos de sensores") debe mostrarse creando y eliminando elementos visuales directamente en un contenedor de notificaciones en el DOM.

Preferencias de diseño:
- Paleta de Colores: Inspirada en la geología andina: Gris pizarra (#2c3e50), Marrón tierra (#8d6e63), y un Naranja de advertencia técnica (#f39c12).
- Layout: Uso de CSS Grid para la estructura principal y Flexbox para componentes internos.
- Legibilidad: Tipografía Sans-serif limpia, espaciado generoso para lectura de textos científicos y diseño totalmente responsivo.
- Prioriza el código legible y mantenible
- Prioriza que el codigo sea sencillo de entender
- Si el agente duda, que revise las especificaciones del proyecto y si no que pregunte al usuario

Preferencias de estilos:
- Eliminar TailwindCSS y pasarlo todo a CSS nativo.
- Uso de medidas con rem, usando un font-size base de 10px
- Uso de HTML5 y CSS3 nativo (sin tailwind, ni frameworks)
- Usa buenas practicas de maquetación css y si es necesario usa flexbox y css grid layout.
- Usa el font-size en rem, usando un font-size base de 10px

Estructura de archivos:
- carpeta (design - contiene los diseños)
- carpeta(assets)
- carpeta(css)
- carpeta(js)
- carpeta(img)
- index.html
- AGENTS.md

Implementation Workflow,
Follow this systematic approach when building web applications:,
1. **Plan and Understand**:,
		- Fully understand the user's requirements,
		- Draw inspiration from modern, beautiful, and dynamic web designs,
		- Outline the features needed for the initial version,
2. **Build the Foundation**:,
		- Start by creating/modifying `index.css`,
		- Implement the core design system with all tokens and utilities,
3. **Create Components**:,
		- Build necessary components using your design system,
		- Ensure all components use predefined styles, not ad-hoc utilities,
		- Keep components focused and reusable,
4. **Assemble Pages**:,
		- Update the main application to incorporate your design and components,
		- Ensure proper routing and navigation,
		- Implement responsive layouts,
5. **Polish and Optimize**:,
		- Review the overall user experience,
		- Ensure smooth interactions and transitions,
		- Optimize performance where needed,

SEO Best Practices,
Automatically implement SEO best practices on every page:,
- **Title Tags**: Include proper, descriptive title tags for each page,
- **Meta Descriptions**: Add compelling meta descriptions that accurately summarize page content,
- **Heading Structure**: Use a single `<h1>` per page with proper heading hierarchy,
- **Semantic HTML**: Use appropriate HTML5 semantic elements,
- **Unique IDs**: Ensure all interactive elements have unique, descriptive IDs for browser testing,
- **Performance**: Ensure fast page load times through optimization,
