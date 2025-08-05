# UtopiaGaming - Minecraft Server Hosting Landing Page

A stunning, Minecraft-themed landing page for UtopiaGaming's server hosting services. Built with React, Vite, and Framer Motion for smooth animations and interactions.

## Features

### 🎮 Minecraft-Themed Design
- Pixelated grass block tile patterns using authentic Minecraft colors
- Stylized Minecraft world aesthetic with square tiles
- Custom color palette: `#4a6f28`, `#5b8731`, `#3e5c20`, `#527a2d`, `#5b8b32`

### 🎬 Video Integration
- Background videos for hero and content sections
- Autoplay, muted, and loop functionality
- WebM/MP4 format support with poster fallbacks
- Progressive loading for performance

### ✨ Animations & Interactions
- Smooth scroll transitions between sections
- Pixel tile building animation from bottom to top
- Hover effects with radial spotlight animations
- Framer Motion powered animations
- Intersection Observer for scroll-triggered animations

### 📱 Responsive Design
- Mobile-first approach
- Adaptive navigation (hides elements on smaller screens)
- Maintains functionality across all device sizes
- Optimized for desktop as primary target

### 🎯 Key Sections
1. **Hero Section**: Full viewport with animated tile pattern and call-to-action
2. **Content Sections**: Three sections with background videos
   - "Ready to Play"
   - "With Mods?"
   - "Console and Settings"
3. **Footer**: Order Now button with pixel styling and company information

## Technical Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Intersection Observer** - Scroll animations
- **Open Sans** - Corporate font family

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Video Assets Required

Place the following video files in the `public/` directory:

- `minecraft-bg.webm` / `minecraft-bg.mp4` - Hero background video
- `ready-to-play.webm` / `ready-to-play.mp4` - Ready to Play section
- `with-mods.webm` / `with-mods.mp4` - With Mods section
- `console-settings.webm` / `console-settings.mp4` - Console and Settings section

### Poster Images
- `minecraft-bg-poster.jpg` - Hero video poster
- `ready-to-play-poster.jpg` - Ready to Play poster
- `with-mods-poster.jpg` - With Mods poster
- `console-settings-poster.jpg` - Console and Settings poster

## Customization

### Colors
Minecraft tile colors are defined in `src/components/MinecraftTilePattern.jsx`:
```javascript
const minecraftColors = {
  grass1: '#4a6f28',
  grass2: '#5b8731', 
  grass3: '#3e5c20',
  grass4: '#527a2d',
  grass5: '#5b8b32'
}
```

### Content
- Update text content in respective component files
- Modify company information in `src/components/Footer.jsx`
- Adjust navigation links in `src/components/Navigation.jsx`

### Animations
- Animation timing and effects can be customized in component files
- Scroll behavior is controlled by `react-intersection-observer`
- Framer Motion animations can be adjusted for different effects

## Performance Features

- **Lazy Loading**: Videos and images load progressively
- **Fallbacks**: Poster images for video loading failures
- **Optimized Animations**: Hardware-accelerated CSS transforms
- **Responsive Images**: Adaptive sizing for different screen sizes
- **Smooth Scrolling**: Native smooth scroll behavior

## Browser Support

- Modern browsers with ES6+ support
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

The project is ready for deployment on any static hosting service:

- **Vercel**: Connect GitHub repository
- **Netlify**: Drag and drop build folder
- **GitHub Pages**: Use GitHub Actions
- **Traditional hosting**: Upload build folder

## Company Information

**Pein GbR - UtopiaGaming**
- Address: Käthe-Kollwitz-Weg 24, 23558 Lübeck, Deutschland
- Email: info@pein-gbr.de
- Phone: +49 (0) 451 / 3050 6865
- Website: www.pein-gbr.de

## License

This project is proprietary to Pein GbR - UtopiaGaming.

---

Built with ❤️ for the Minecraft community
