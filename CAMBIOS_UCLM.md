# Registro de Cambios - Tema UCLM

Este documento registra todos los cambios realizados en el tema de Zendesk para la UCLM antes de cada subida a GitHub.

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

- **4.13.2.1** (11/11/2025) - Setup inicial UCLM + página selector de solicitudes + estilos personalizados
