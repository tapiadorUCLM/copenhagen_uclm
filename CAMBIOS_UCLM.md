# Registro de Cambios - Tema UCLM

Este documento registra todos los cambios realizados en el tema de Zendesk para la UCLM antes de cada subida a GitHub.

---

## Versión 4.13.2.5 (19 noviembre 2025)

### Mejoras de estilos en página principal
- **Archivo**: `assets/uclm-styles.css`
  - Añadidos estilos a `.blocks-item` para unificar apariencia con bloques de solicitud
  - Características del diseño:
    - Sombra inicial: `0 1px 3px rgba(0, 0, 0, 0.08)`
    - Efecto hover: sombra más pronunciada `0 4px 12px rgba(0, 0, 0, 0.15)` con elevación `translateY(-2px)`
    - Transiciones suaves para shadow y transform (0.3s y 0.2s respectivamente)
    - Supresión de subrayado en hover para `.blocks-item-link`

### Mejoras visuales en página de categorías
- **Archivo**: `assets/uclm-styles.css`
  - Bloque de descripción de categoría (`.page-header-description`):
    - Fondo gris claro (#f8f9fa) con padding 16px/20px
    - Borde izquierdo de 4px color #e0e0e0
    - Border-radius 8px y márgenes verticales ajustados
    - Color de texto #5a5a5a con line-height 1.6
  - Tarjetas de sección (`.section-tree .section`):
    - Fondo blanco con borde #e8e8e8 y border-radius 6px
    - Padding 20px con sombra sutil `0 1px 3px rgba(0, 0, 0, 0.06)`
    - Efecto hover: sombra más pronunciada y elevación de 1px
  - Títulos de sección (`.section-tree-title`):
    - Font-size 20px, font-weight 600, margen inferior 12px
    - Enlaces en color #2F3941 que cambian a #1f73b7 en hover
    - Transición suave de color (0.2s ease)
  - Lista de artículos (`.article-list-item`):
    - Estilo muy sutil con fondo #fafbfc
    - Padding 8px/12px, border-radius 4px, margen 4px vertical
    - Hover cambia fondo a #f0f2f4
  - Enlaces de artículos (`.article-list-link`):
    - Color #555 que cambia a #1f73b7 en hover
    - Font-size 14px sin decoración de texto
  - Artículos promocionados (`.article-promoted`):
    - Destacado sutil con fondo #fff8e5
    - Borde izquierdo de 3px color #f5a623
    - Hover cambia fondo a #fff3d6
  - Enlace "Ver todos" (`.see-all-articles`):
    - Display inline-block con padding 8px/16px
    - Fondo #f0f7ff con color #1f73b7
    - Border-radius 4px con transiciones suaves
    - Hover cambia a fondo #e0efff y color #0f3554
  - Mensaje categoría vacía (`.category-empty`):
    - Padding 20px, texto centrado, color #999
    - Fondo #f8f9fa con borde dashed #ddd y border-radius 6px

### Estilos para región de navegación
- **Archivo**: `assets/uclm-styles.css`
  - Región sub-nav (`.sub-nav`):
    - Fondo #f8f9fa con padding 16px/20px
    - Margin-bottom 24px con border-radius 6px
    - Sombra sutil `0 1px 2px rgba(0, 0, 0, 0.05)`
    - Borde 1px sólido #e8e8e8
  - Responsive (<768px):
    - Padding reducido a 12px/16px
    - Margin-bottom reducido a 16px

### Notas técnicas
- Todos los cambios son exclusivamente CSS, no requieren build para visualizarse
- Mantiene consistencia visual con diseño corporativo UCLM
- Sistema de sombras y hover unificado en toda la interfaz
- Diseño responsive con ajustes específicos para móviles (<768px)

---

## Versión 4.13.2.4 (14 noviembre 2025)

### Callout configurable en "Nueva solicitud"
- **Archivo**: `manifest.json`
  - Nueva sección `new_request_page_group_label` con variables:
    - `show_request_callout` (checkbox) para activar/desactivar el callout
    - `request_callout_text` (text) para definir el mensaje a mostrar
    - `request_callout_type` (list) con opciones: `info`, `warning`, `danger` (por defecto: `info`)
- **Archivo**: `templates/new_request_page.hbs`
  - Renderiza un callout justo debajo del `<h1>` si está activado y con texto
  - Usa clases `callout callout-{{settings.request_callout_type}}` y un icono SVG según el tipo
- **Archivo**: `assets/uclm-styles.css`
  - Estilos del callout (`.callout`, `.callout-info`, `.callout-warning`, `.callout-danger`)
  - Diseño con border-left de 4px, fondo suave por tipo y comportamiento responsive

### Notas técnicas
- Sin cambios en JS. Los estilos residen en `assets/uclm-styles.css` (no requiere build para visualizarse en preview)
- Recomendado ejecutar `build` antes de publicar para asegurar assets actualizados

---

## Versión 4.13.2.3 (12 noviembre 2025)

### Plantilla de correo electrónico personalizada
- **Archivo**: `plantilla_correo/plantilla_correo.html`
  - Creada plantilla HTML responsive para notificaciones por email de Zendesk
  - Estructura de diseño:
    - Fondo gris claro (#f5f5f5) con contenedor blanco centrado
    - Contenedor con box-shadow suave y esquinas redondeadas (8px)
    - Ancho máximo 600px para compatibilidad con clientes de correo
  - Header personalizado:
    - Logo de la UCLM (Logo_UCLM_40.jpg desde assets)
    - Subtítulo de instrucciones en español
  - Secciones principales:
    - Área de contenido para mensajes con bloques diferenciados
    - Sección CTA (Call-to-Action) con información de contacto UCLM
    - Footer con copyright y redes sociales
  - Identidad corporativa:
    - Color corporativo UCLM (#b30033) en botones, enlaces e iconos
    - Botones de acción redondeados con estilo corporativo
  - Integración de redes sociales:
    - Font Awesome 5.15.4 CDN con integridad SRI
    - Iconos de LinkedIn, X (Twitter), Facebook, Instagram, YouTube
    - Círculos de 36px con fondo corporativo (#b30033)
    - Centrado perfecto usando flexbox (align-items/justify-content)
    - Enlaces a perfiles oficiales de la UCLM
  - Información de contacto:
    - Teléfono: 926 29 53 00
    - Portal de soporte: soporte.uclm.es
    - Dirección física completa

### Notas técnicas
- Plantilla HTML compatible con principales clientes de correo (Gmail, Outlook web, Apple Mail, etc.)
- Estilos definidos en `<style>` para máxima compatibilidad
- CDN externo para Font Awesome (soportado por la mayoría de clientes modernos)
- Helper `{{asset}}` listo para integración con sistema de assets de Zendesk
- Sin dependencias de JavaScript; todo CSS puro

---

## Versión 4.13.2.2 (11 noviembre 2025)

### Tipografías del tema
- **Archivo**: `manifest.json`
  - Añadidas opciones de fuente: Montserrat y Roboto en `heading_font` y `text_font`
  - Establecidos valores por defecto:
    - Títulos (`$heading_font`): Montserrat
    - Texto (`$text_font`): Roboto

### Integración de recursos externos
- **Archivo**: `templates/document_head.hbs`
  - Añadidas fuentes de Google Fonts (Montserrat y Roboto) con `preconnect` y `<link rel="stylesheet">`

### Estilos personalizados UCLM
- **Archivo**: `assets/uclm-styles.css`
  - Grid forzado a 3 columnas en ≥992px para mostrar 3 bloques por fila en escritorio

### Notas técnicas
- Sin cambios funcionales en JS; afecta configuración y estilos
- Recomendado ejecutar build antes de publicar para asegurar `style.css`/assets actualizados

---

## Versión 4.13.2.1 (11 noviembre 2025)

### Configuración del entorno de desarrollo
- **README.md actualizado**
  - Añadida documentación sobre Yarn 4 (Berry) y Corepack
  - Incluidas instrucciones para resolver errores comunes:
    - Error "No such file or directory: 'install'"
    - Error 403 al ejecutar `yarn start` (requiere `zcli login`)
  - Añadidas comandos recomendados usando `corepack yarn`
  - Sección de solución de problemas con ejemplos prácticos

### Nueva página personalizada: Selector de solicitudes
- **Archivo**: `templates/custom_pages/new_request_custom.hbs`
  - Creada página personalizada para selección de tipos de solicitudes
  - Grid responsive con 6 categorías de servicio:
    - Soporte técnico (ticket_form_id=123)
    - Servicios académicos (ticket_form_id=456)
    - Infraestructuras (ticket_form_id=789)
    - Biblioteca (ticket_form_id=101)
    - Seguridad (ticket_form_id=102)
    - Otros servicios (formulario genérico)
  - Cada bloque incluye icono de Font Awesome, título y descripción
  - Integración con búsqueda y breadcrumbs

### Estilos personalizados UCLM
- **Archivo**: `assets/uclm-styles.css`
  - Creado sistema de grid responsive para bloques de solicitud
  - Características de diseño:
    - Fondo blanco con borde #EEEEEE
    - Bordes redondeados (5px)
    - Sombra suave con efecto hover (elevación + sombra intensificada)
    - Iconos de Font Awesome en el fondo (color #DDDDDD)
    - Iconos posicionados abajo-izquierda como marca de agua
  - Responsive: 1 columna en móviles (<768px)
  - Uso de `:has()` para detección automática de iconos

### Integración de recursos externos
- **Archivo**: `templates/document_head.hbs`
  - Añadido CDN de Font Awesome 5.15.4 con integridad SRI
  - Importación de `uclm-styles.css` usando helper `{{asset}}`
  - Estilos disponibles globalmente en todo el sitio

### Documentación para agentes de IA
- **Archivo**: `.github/copilot-instructions.md`
  - Creado guía completa para agentes de IA (GitHub Copilot)
  - Documentación de arquitectura (templates, styles, React modules)
  - Workflows de desarrollo (build, test, i18n, a11y, deploy)
  - Convenciones específicas del proyecto
  - Gotchas y referencias clave

### Notas técnicas
- Build exitoso sin errores
- Compatible con Yarn 4.10.3 via Corepack
- Todos los módulos React compilados correctamente
- Import map actualizado automáticamente

---

## Plantilla para futuras versiones

```markdown
## Versión X.X.X.X (fecha)

### Categoría de cambios
- **Archivo afectado**: `ruta/al/archivo`
  - Descripción del cambio
  - Justificación o contexto
  - Impacto en funcionalidad

### Notas técnicas
- Información sobre build, tests, compatibilidad
- Advertencias o consideraciones especiales
```

---

## Instrucciones de uso

1. Antes de cada commit importante, añade una nueva sección con:
   - Versión del `manifest.json`
   - Fecha del cambio
   - Descripción detallada de modificaciones por categoría
   - Archivos afectados
   - Notas técnicas relevantes

2. Mantén el formato consistente usando markdown
3. Incluye contexto suficiente para que otro desarrollador entienda el cambio
4. Si es un cambio que afecta a usuarios finales, márcalo claramente

---

## Historial de versiones

- **4.13.2.5** (19/11/2025) - Mejoras visuales: estilos para blocks-item, página de categorías y región sub-nav
- **4.13.2.4** (14/11/2025) - Callout configurable en Nueva solicitud (settings + template + estilos)
- **4.13.2.3** (12/11/2025) - Plantilla de correo electrónico personalizada con branding UCLM
- **4.13.2.2** (11/11/2025) - Google Fonts + nuevas opciones tipográficas (Montserrat/Roboto) + grid 3 columnas en escritorio
- **4.13.2.1** (11/11/2025) - Setup inicial UCLM + página selector de solicitudes + estilos personalizados
