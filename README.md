# 🏠 ALX Property Listing App

A modern, responsive property listing application built with Next.js, TypeScript, and Tailwind CSS. Discover and book beautiful properties worldwide with an intuitive user interface and seamless booking experience.

![Property Listing App](https://img.shields.io/badge/Next.js-15.3.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **🏠 Property Listings**: Browse through a curated collection of luxury properties worldwide
- **🔍 Advanced Filtering**: Filter properties by category, price, rating, and amenities
- **📱 Responsive Design**: Fully responsive design that works on desktop, tablet, and mobile
- **⭐ Rating System**: View property ratings and reviews
- **💰 Dynamic Pricing**: Support for discounts and special offers
- **📖 Property Details**: Detailed property pages with comprehensive information
- **📅 Booking System**: Integrated booking form with payment processing
- **🎨 Modern UI**: Beautiful, modern interface with smooth animations
- **⚡ Performance**: Optimized for fast loading and smooth user experience

## 🚀 Live Demo

[View Live Demo](https://your-deployment-url.com)

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.3.2](https://nextjs.org/) with App Router
- **Language**: [TypeScript 5.0](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Icons**: Custom SVG icons and PNG assets
- **Deployment**: Vercel, Netlify, or any static hosting platform

## 📦 Installation

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/alx-listing-app-deployed.git
   cd alx-listing-app-deployed
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install additional dependencies**
   ```bash
   npm install axios
   # or
   yarn add axios
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Project Structure

```
alx-listing-app-deployed/
├── components/                 # Reusable React components
│   ├── booking/               # Booking-related components
│   │   ├── BookingForm.tsx
│   │   ├── CancellationPolicy.tsx
│   │   └── OrderSummary.tsx
│   ├── common/                # Shared UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Pill.tsx
│   ├── layout/                # Layout components
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── Layout.tsx
│   └── property/              # Property-related components
│       └── ReviewSection.tsx
├── constants/                 # Application constants
│   └── index.ts              # Property data and sample listings
├── interfaces/                # TypeScript type definitions
│   └── index.ts              # Property and component interfaces
├── pages/                     # Next.js pages
│   ├── api/                   # API routes
│   │   └── hello.ts
│   ├── booking/               # Booking pages
│   │   └── index.tsx
│   ├── property/              # Property detail pages
│   │   └── [id].tsx
│   ├── _app.tsx              # App wrapper
│   ├── _document.tsx         # Document wrapper
│   └── index.tsx             # Home page
├── public/                    # Static assets
│   └── assets/
│       ├── icons/            # Application icons
│       ├── images/           # Property images
│       └── logos/            # Property type logos
├── styles/                    # Global styles
│   └── globals.css
└── README.md                 # This file
```

## 🎯 Key Components

### Home Page (`pages/index.tsx`)
- Hero section with search functionality
- Property filtering and sorting
- Responsive property grid
- Mobile-optimized filter section

### Property Cards (`components/common/Card.tsx`)
- Displays property information
- Price calculations with discounts
- Rating display
- Category tags

### Booking System (`pages/booking/index.tsx`)
- Multi-step booking form
- Payment integration
- Order summary
- Cancellation policy

### Property Details (`pages/property/[id].tsx`)
- Detailed property information
- Image gallery
- Reviews and ratings
- Booking integration

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# API Configuration
NEXT_PUBLIC_API_URL=your_api_url_here

# Payment Gateway (if using)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key_here

# Analytics (optional)
NEXT_PUBLIC_GA_TRACKING_ID=your_ga_tracking_id
```

### Tailwind CSS Configuration

The project uses Tailwind CSS 4.0 with custom configurations. The main configuration is in `tailwind.config.js` and PostCSS configuration in `postcss.config.mjs`.

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository**
   - Push your code to GitHub
   - Connect your repository to Vercel

2. **Deploy**
   ```bash
   npm run build
   vercel --prod
   ```

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `out` folder to Netlify
   - Or connect your GitHub repository

### Other Platforms

The application can be deployed to any static hosting platform that supports Next.js:

- **AWS S3 + CloudFront**
- **Google Cloud Storage**
- **Azure Static Web Apps**
- **DigitalOcean App Platform**

## 📱 API Endpoints

The application includes the following API endpoints (to be implemented):

- `GET /api/properties` - Get all properties
- `GET /api/properties/[id]` - Get property details
- `GET /api/properties/[id]/reviews` - Get property reviews
- `POST /api/bookings` - Create a new booking

## 🎨 Customization

### Adding New Properties

1. Edit `constants/index.ts`
2. Add new property objects to the `PROPERTYLISTINGSAMPLE` array
3. Follow the `PropertyProps` interface structure

### Styling

- Modify `styles/globals.css` for global styles
- Use Tailwind CSS classes for component styling
- Custom CSS variables are defined in the global styles

### Images

- Add new property images to `public/assets/images/listing_images/`
- Update image paths in the property data
- Ensure images are optimized for web (recommended: WebP format)

## 🧪 Testing

```bash
# Run linting
npm run lint

# Run type checking
npx tsc --noEmit

# Run build
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Property images and data are for demonstration purposes
- Icons sourced from various icon libraries
- Built with modern web technologies and best practices

## 📞 Support

For support and questions:

- Create an issue in the GitHub repository
- Contact: your-email@example.com
- Documentation: [Wiki](https://github.com/yourusername/alx-listing-app-deployed/wiki)

---

**Made with ❤️ by [Your Name]**

*This project was created as part of the ALX Software Engineering program.*
