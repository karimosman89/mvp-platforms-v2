# AI MVP Platforms - Setup Instructions

## Quick Start Guide

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Modern web browser

### Installation

1. **Clone or download the project**
   ```bash
   # If using git
   git clone <repository-url>
   cd mvp-platforms
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Project Structure

```
mvp-platforms/
├── src/
│   ├── components/          # Shared UI components
│   ├── pages/              # Main application pages
│   ├── platforms/          # Individual MVP platforms
│   │   ├── oil-gas/
│   │   ├── electricity/
│   │   ├── automotive/
│   │   ├── finance/
│   │   ├── logistics/
│   │   ├── import-export/
│   │   ├── robotics/
│   │   └── healthcare/
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Application entry point
├── public/                 # Static assets
├── package.json
└── README.md
```

### Available Platforms

1. **PredictiveOil Pro** - Oil & Gas predictive maintenance
2. **GridSmart Pro** - Electricity grid management
3. **AutoVision AI** - Automotive quality control
4. **RiskGuard Pro** - Finance risk assessment
5. **LogiSmart** - Logistics route optimization
6. **TradeFlow Pro** - Import/export supply chain
7. **RoboVision** - Robotics computer vision
8. **MedScan AI** - Healthcare medical imaging

### Customization

#### Branding
Edit theme colors in `src/main.tsx`:
```typescript
const theme = createTheme({
  palette: {
    primary: {
      main: '#your-brand-color',
    },
    // ... other theme options
  },
})
```

#### Adding New Platforms
1. Create new component in `src/platforms/[industry]/`
2. Add route in `src/App.tsx`
3. Add platform card in `src/pages/HomePage.tsx`

### Deployment Options

#### Netlify
1. Build the project: `npm run build`
2. Upload `dist/` folder to Netlify
3. Configure redirects for SPA routing

#### Vercel
1. Connect your repository to Vercel
2. Auto-deployment on push

#### Traditional Web Hosting
1. Build: `npm run build`
2. Upload `dist/` contents to web server
3. Configure server for SPA routing

### Demo Features

- **Live Data Simulation** - Real-time updating dashboards
- **Interactive Charts** - Responsive data visualizations
- **Professional UI** - Enterprise-grade design
- **Mobile Responsive** - Works on all devices
- **Demo Mode** - Pre-loaded with sample data

### Technical Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Material-UI v5** - Professional component library
- **Recharts** - Beautiful data visualizations
- **Framer Motion** - Smooth animations
- **Vite** - Fast build tool

### Support

For technical support or customization requests:
- Review the code documentation
- Check component props and interfaces
- Modify sample data for your use case

---

**Built by MiniMax Agent** - Professional AI Solutions for Modern Business