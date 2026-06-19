# SecureHome Bundle Builder

A modern, interactive React application for building custom security system bundles. This tool allows users to select cameras, plans, sensors, and accessories to create their ideal security system with real-time pricing calculations and savings display.

## 🚀 Features

- **Interactive Accordion UI**: Expandable steps for selecting products by category
- **Product Variants**: Support for color/style variants with individual quantity tracking
- **Real-time Pricing**: Automatic calculation of subtotal, comparison pricing, and savings
- **Review Panel**: Side panel displaying selected items with live total updates
- **Persistent Storage**: Automatically saves user configurations to browser localStorage
- **Responsive Design**: Mobile-friendly layout with Tailwind CSS
- **Type-Safe**: Full TypeScript support with comprehensive type definitions
- **Modern Stack**: Built with React 19, Vite, and Tailwind CSS

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.6
- **Language**: TypeScript 6.0
- **Build Tool**: Vite 8.0
- **Styling**: Tailwind CSS 4.3 with CSS Modules
- **Code Quality**: ESLint with TypeScript support
- **Development Server**: Vite dev server with HMR

## 📁 Project Structure

```
src/
├── components/               # React components
│   ├── AccordionStep.tsx    # Expandable step container
│   ├── ProductCard.tsx      # Individual product card
│   ├── QuantityStepper.tsx  # Quantity increment/decrement control
│   ├── ReviewPanel.tsx      # Order review sidebar
│   └── *.module.css         # Component-scoped styles
├── hooks/
│   └── useBundleState.tsx   # Custom hook for state management
├── types/
│   └── index.ts             # TypeScript type definitions
├── data/
│   └── products.json        # Product catalog data
├── App.tsx                  # Main app component
├── main.tsx                 # Entry point
└── index.css                # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bundle-builder
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Building for Production

Build the project:
```bash
npm run build
```

This runs TypeScript compilation followed by Vite's production build, creating an optimized bundle in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## 📋 Features Overview

### 1. **Multi-Step Configuration**
Users navigate through 4 steps:
- **Step 1**: Choose cameras (outdoor, indoor, doorbell, floodlight)
- **Step 2**: Select a service plan (Basic, Standard, Pro)
- **Step 3**: Add sensors (door/window, motion, glass break, smoke/CO)
- **Step 4**: Add accessories (hub, keypad, siren, range extender)

### 2. **Product Variants**
Products support multiple variants (e.g., color options) with:
- Visual color swatches
- Independent quantity tracking
- Active variant selection

### 3. **Dynamic Pricing**
- Real-time subtotal calculation
- Comparison price display
- Automatic savings calculation
- Monthly pricing for subscriptions ($/mo)

### 4. **Persistent State**
- Automatic localStorage sync on every state change
- Load previous configurations on app restart
- Save/reset functionality

### 5. **Review & Checkout**
- Categorized item listing in the review panel
- Individual item quantity adjustment
- Shipping information
- Financing options
- Checkout simulation

## 🏗️ Component Architecture

### `AccordionStep`
Manages expandable step sections. Props:
- `step`: Step configuration with products
- `isOpen`: Expanded state
- `selectedCount`: Number of selected items
- `onToggle`, `onNext`: Callbacks

### `ProductCard`
Displays individual products with variants and quantity controls.

### `QuantityStepper`
Reusable increment/decrement control with min/max constraints.

### `ReviewPanel`
Side panel showing:
- Summary of selected items by category
- Line-item pricing
- Order totals and savings
- Shipping, guarantee, and financing info

## 🔌 State Management

The `useBundleState` hook manages:
- **steps**: Array of configuration steps with products
- **activeStep**: Currently expanded step index
- **reviewItems**: Derived list of selected items for review panel
- **Pricing**: Automatic calculation of subtotal, compareTotal, and savings
- **selectedCounts**: Number of selected products per step

### Key Functions:
- `setQty()`: Update product/variant quantity
- `setActiveVariant()`: Change active product variant
- `saveSystem()`: Persist state to localStorage
- `resetSystem()`: Clear all selections

## 📦 Data Structure

Products are organized in JSON format with:
- **Product fields**: id, name, description, price, comparePrice, image, badge
- **Variants**: Optional color/style variants with qty tracking
- **Categories**: Mapped to review panel sections

## 🎨 Styling

- **Tailwind CSS**: Utility-first styling for responsive design
- **CSS Modules**: Component-scoped styles to prevent conflicts
- **Custom Properties**: CSS variables for theming (colors, spacing)

## 🔐 TypeScript Support

Full type safety with:
- `Step`: Configuration steps
- `Product`: Product definition with variants
- `Variant`: Color/style option with quantity
- `ReviewItem`: Selected item for review
- Component props interfaces for all React components

## 📱 Responsive Design

- Mobile-first approach
- Flexible grid layouts
- Touch-friendly controls
- Adaptive typography and spacing

## 🔍 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite development server with HMR |
| `npm run build` | Compile TypeScript and build production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port.

### Build Errors
- Clear `node_modules` and reinstall: `rm -r node_modules && npm install`
- Check TypeScript errors: `npm run build` (runs `tsc -b`)
- Verify Node.js version compatibility

### localStorage Issues
The app uses `bundle-builder-config` as the storage key. Clear browser storage to reset:
```javascript
localStorage.removeItem('bundle-builder-config');
```

## 📄 License

This project is private. All rights reserved.

## 🤝 Contributing

For local development:
1. Create a feature branch
2. Make your changes
3. Run `npm run lint` to check code quality
4. Commit and push
5. Submit a pull request

## 📞 Support

For issues or questions, please check the documentation or contact the development team.
