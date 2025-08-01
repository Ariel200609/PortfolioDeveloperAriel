# 🚀 Guía de Despliegue - GitHub Pages

Esta guía te ayudará a desplegar el portfolio de Ariel Montoya en GitHub Pages.

## 📋 Prerrequisitos

1. Tener una cuenta de GitHub
2. Tener Node.js instalado (versión 16 o superior)
3. Tener Git configurado en tu máquina

## 🔧 Configuración Inicial

### 1. Crear el repositorio en GitHub

1. Ve a [GitHub](https://github.com) y crea un nuevo repositorio
2. Nombra el repositorio: `PortfolioDeveloperAriel`
3. Hazlo público
4. **NO** inicialices con README, .gitignore o licencia

### 2. Subir el código al repositorio

```bash
# En la carpeta del proyecto
git init
git add .
git commit -m "Initial commit: Portfolio de Ariel Montoya"
git branch -M main
git remote add origin https://github.com/Ariel200609/PortfolioDeveloperAriel.git
git push -u origin main
```

### 3. Instalar dependencias

```bash
npm install
npm install gh-pages --save-dev
```

## 🚀 Despliegue

### Opción 1: Despliegue Manual

1. **Construir el proyecto**:
```bash
npm run build
```

2. **Desplegar**:
```bash
npm run deploy
```

3. **Configurar GitHub Pages**:
   - Ve a tu repositorio en GitHub
   - Ve a Settings > Pages
   - En "Source", selecciona "Deploy from a branch"
   - Selecciona la rama `gh-pages` y la carpeta `/ (root)`
   - Haz clic en "Save"

### Opción 2: Despliegue Automático (Recomendado)

El proyecto incluye GitHub Actions que se ejecutan automáticamente cuando haces push a la rama main.

1. **Hacer cambios y subir**:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

2. **Verificar el despliegue**:
   - Ve a tu repositorio en GitHub
   - Ve a la pestaña "Actions"
   - Verifica que el workflow "Deploy to GitHub Pages" se ejecute correctamente

## 🌐 Acceso al Sitio

Una vez desplegado, tu portfolio estará disponible en:
- **URL**: `https://ariel200609.github.io/PortfolioDeveloperAriel`

## 🔄 Actualizaciones

Para actualizar el sitio:

1. **Hacer cambios en el código**
2. **Probar localmente**:
```bash
npm start
```
3. **Subir cambios**:
```bash
git add .
git commit -m "Update: [descripción de los cambios]"
git push origin main
```
4. **Esperar el despliegue automático** (2-5 minutos)

## 🛠️ Solución de Problemas

### Error 404 en GitHub Pages
- Verifica que la rama `gh-pages` existe
- Asegúrate de que la configuración en Settings > Pages sea correcta
- Espera unos minutos después del despliegue

### El sitio no se actualiza
- Verifica que el workflow de GitHub Actions se ejecutó correctamente
- Revisa los logs en la pestaña "Actions"
- Intenta hacer un nuevo commit y push

### Problemas con las rutas
- El proyecto incluye archivos `404.html` y scripts de redirección
- Si tienes problemas, verifica que estos archivos estén en la carpeta `public/`

## 📱 Configuración Final

Una vez desplegado, tu portfolio estará disponible en:
**https://ariel200609.github.io/PortfolioDeveloperAriel**

### Verificar Despliegue
- El sitio puede tardar unos minutos en estar disponible
- Verifica que todas las secciones funcionen correctamente
- Prueba la navegación y formularios

## 📊 Monitoreo

- **GitHub Actions**: Ve a la pestaña "Actions" para ver el estado del despliegue
- **GitHub Pages**: Ve a Settings > Pages para ver el estado del sitio
- **Analytics**: Considera agregar Google Analytics para monitorear visitas

## 🔒 Seguridad

- El repositorio es público, pero no contiene información sensible
- Las claves API (si las usas) deben estar en variables de entorno
- Considera usar GitHub Secrets para información sensible

## 📞 Soporte

Si tienes problemas con el despliegue:
1. Revisa los logs de GitHub Actions
2. Verifica la configuración en Settings > Pages
3. Asegúrate de que todos los archivos estén en el repositorio
4. Contacta a Ariel: arielmontoya200609@gmail.com 