# Notas sobre Playwright

## Problema con Headless
En esta versión de Playwright, el modo **headless** no funciona correctamente. Es necesario ejecutarlo en modo no headless para poder ver la página correctamente.

## Verificar y Actualizar Librerías
1. Verifica si alguna librería está desactualizada con:
   ```bash
   npm outdated
**Si necesitas actualizar los navegadores que utiliza Playwright, ejecuta:**
npx playwright install

Inicializar un Proyecto Playwright
Para configurar un nuevo proyecto Playwright, utiliza el siguiente comando:

> npm init playwright@latest

Para correr las pruebas en tu proyecto, usa:
> npx playwright test
