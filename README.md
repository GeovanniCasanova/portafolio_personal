# Portafolio Personal - Geovanni Casanova

Este es mi portafolio personal desarrollado con React + Vite y Tailwind CSS. Presenta mi experiencia, proyectos y habilidades como desarrollador Full Stack.

## 🚀 Demo

Puedes ver el portafolio en vivo aquí: [https://geovannicasanova.github.io/portafolio_personal/](https://geovannicasanova.github.io/portafolio_personal/)

## 🛠️ Tecnologías Utilizadas

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Lucide Icons
- Google Fonts (Space Grotesk, Inter)

## ⚙️ Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/GeovanniCasanova/portafolio_personal.git
cd portafolio_personal
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## 📦 Build y Deploy

### Build Local
Para crear una build local:
```bash
npm run build
```

### Deploy a GitHub Pages
Hay dos maneras de hacer deploy:

1. **Manual**:
```bash
npm run deploy
```

2. **Automático** (usando GitHub Actions):
- Cada push a la rama `main` activará el deploy automáticamente
- No se requiere ningún comando adicional
- El workflow está configurado en `.github/workflows/deploy.yml`

## 🎨 Características

- Diseño responsivo
- Animaciones suaves con Framer Motion
- Efectos de parallax
- Modo oscuro por defecto
- Secciones interactivas
- Optimizado para SEO

## 📁 Estructura del Proyecto

```
portafolio_personal/
├── src/
│   ├── App.jsx          # Componente principal
│   ├── index.css        # Estilos globales
│   └── main.jsx         # Punto de entrada
├── public/              # Archivos estáticos
├── .github/             # Configuración de GitHub Actions
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🔄 Updates y Mantenimiento

Para actualizar el portafolio:

1. Realiza tus cambios localmente
2. Commit y push a la rama main:
```bash
git add .
git commit -m "Descripción de los cambios"
git push origin main
```
3. GitHub Actions se encargará del deploy automáticamente

## 📄 Licencia

MIT License - Siéntete libre de usar este código como inspiración para tu propio portafolio.

## 👤 Autor

- Geovanni Daniel Casanova Cruz
- Email: daniel.casanovac13@gmail.com
- GitHub: [@GeovanniCasanova](https://github.com/GeovanniCasanova)
