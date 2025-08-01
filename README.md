# Portfolio de Ariel Montoya

Un portfolio personal moderno y elegante para Ariel Montoya, desarrollador en formación.

## 🚀 Características

- **Diseño Moderno**: Interfaz elegante con tema oscuro y acentos en azul eléctrico
- **Animaciones Fluidas**: Animaciones suaves con Framer Motion
- **Responsive**: Optimizado para móviles, tablets y escritorio
- **Secciones Completas**: Hero, About, Projects, Contact y Footer
- **Efectos Visuales**: Partículas animadas, gradientes y efectos de hover
- **Formulario de Contacto**: Formulario funcional con validación
- **Navegación Suave**: Scroll suave entre secciones

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework principal
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de estilos
- **Framer Motion** - Animaciones
- **React Scroll** - Navegación suave
- **Lucide React** - Iconos
- **GitHub Pages** - Hosting y despliegue

## 🎨 Paleta de Colores

```css
#00437, #00649, #061191, #101FCD, #3E90EB, #70B5FF
```

## 📁 Estructura del Proyecto

```
PortfolioAriel/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── ParticleBackground.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/Ariel200609/PortfolioDeveloperAriel.git
cd PortfolioDeveloperAriel
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm start
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm test` - Ejecuta las pruebas
- `npm run eject` - Expone la configuración de webpack
- `npm run deploy` - Despliega en GitHub Pages

### Despliegue en GitHub Pages

El proyecto está configurado para desplegarse automáticamente en GitHub Pages.

1. **Desplegar**:
```bash
npm run deploy
```

2. **Configurar GitHub Pages**:
   - Ve a tu repositorio en GitHub
   - Ve a Settings > Pages
   - En "Source", selecciona "Deploy from a branch"
   - Selecciona la rama `gh-pages` y la carpeta `/ (root)`
   - Guarda los cambios

El sitio estará disponible en: `https://ariel200609.github.io/PortfolioDeveloperAriel`

## 📱 Secciones del Portfolio

### 🏠 Hero Section
- Nombre y título profesional
- Animación de typing
- Botones CTA
- Enlaces a redes sociales
- Fondo con partículas animadas

### 👨‍💻 About Section
- Información personal
- Educación y experiencia
- Barras de habilidades animadas
- Herramientas y tecnologías

### 🚀 Projects Section
- Proyectos destacados
- Grid de todos los proyectos
- Tecnologías utilizadas
- Enlaces a GitHub y demos

### 📞 Contact Section
- Formulario de contacto
- Información de contacto
- Enlaces a redes sociales
- Razones para trabajar juntos

### 🦶 Footer
- Información de contacto
- Enlaces rápidos
- Redes sociales
- Copyright

## 🎯 Características Técnicas

### Animaciones
- Scroll reveal animations
- Hover effects en tarjetas
- Typing animation en hero
- Particle background
- Smooth transitions

### Responsive Design
- Mobile-first approach
- Breakpoints optimizados
- Navegación móvil
- Grid layouts adaptativos

### Performance
- Lazy loading de componentes
- Optimización de imágenes
- Code splitting
- Bundle optimization

## 🔧 Personalización

### Cambiar Información Personal
Edita los archivos de componentes para actualizar:
- Información personal en `About.tsx`
- Proyectos en `Projects.tsx`
- Contacto en `Contact.tsx`
- Redes sociales en todos los componentes

### Cambiar Colores
Modifica `tailwind.config.js` para cambiar la paleta de colores:

```javascript
colors: {
  primary: {
    100: '#00437',
    200: '#00649',
    // ... más colores
  }
}
```

### Agregar Nuevas Secciones
1. Crea un nuevo componente en `src/components/`
2. Importa y agrega a `App.tsx`
3. Actualiza la navegación en `Navbar.tsx`

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👨‍💻 Autor

**Ariel Montoya**
- Email: arielmontoya200609@gmail.com
- GitHub: [@Ariel200609](https://github.com/Ariel200609)
- Instagram: [@developerariel_](https://instagram.com/developerariel_)
- WhatsApp: +54 2923 659973

## 🙏 Agradecimientos

- Framer Motion por las animaciones
- Tailwind CSS por el sistema de diseño
- Lucide por los iconos
- React Scroll por la navegación suave 