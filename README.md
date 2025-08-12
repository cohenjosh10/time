# Moonphase Tracker

A beautiful, watch-inspired moon phase tracker built with Next.js. Displays the current lunar age and phase with an elegant watch-style visualization.

## Features

- **Real-time moon phase calculation** using astronomical data
- **Watch-style moon phase display** with realistic lunar surface details
- **Responsive design** optimized for both desktop and mobile
- **PWA support** for mobile app-like experience
- **Clean, minimal interface** focused on lunar data

## Tech Stack

- **Next.js 14** - React framework with static export
- **TypeScript** - Type-safe development
- **CSS Modules** - Scoped styling
- **lunarphase-js** - Accurate lunar calculations

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint
```

## Deployment Options

### 1. Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push to main branch

### 2. Netlify

1. Push your code to GitHub
2. Connect your repository to [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `out`

### 3. AWS S3 + CloudFront

1. Build the static files: `npm run build`
2. Upload the `out/` directory to an S3 bucket
3. Configure CloudFront distribution for global CDN
4. Set up custom domain (optional)

### 4. GitHub Pages

1. Enable GitHub Actions in your repository
2. The included workflow will build and deploy automatically
3. Enable GitHub Pages in repository settings

## Environment Variables

No environment variables required - the app uses client-side lunar calculations.

## PWA Features

- Installable on mobile devices
- Offline-ready static content
- App-like experience with custom theme colors

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - feel free to use for personal or commercial projects.
