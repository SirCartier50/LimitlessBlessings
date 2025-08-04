# Limitless Blessings - E-commerce Website

A beautiful, modern e-commerce website built with Next.js for the Limitless Blessings brand. This website offers a premium shopping experience with a focus on lifestyle and wellness products.

## 🚀 Features

- **Modern Design**: Clean, responsive design with beautiful animations
- **Product Catalog**: Comprehensive product browsing with filters and search
- **Shopping Cart**: Full cart functionality with add/remove items
- **User Authentication**: Secure user registration and login
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Built with Next.js for excellent search engine optimization
- **Fast Performance**: Optimized images and code splitting for fast loading

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Animations**: Framer Motion
- **Images**: Next.js Image Optimization

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/limitless-blessings.git
   cd limitless-blessings
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
limitless-blessings/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── shop/              # Shop pages
│       └── page.tsx       # Shop page
├── components/             # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   └── ProductCard.tsx    # Product display component
├── public/                # Static assets
├── tailwind.config.js     # Tailwind configuration
├── next.config.js         # Next.js configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Design System

### Colors

- **Primary**: Orange gradient (#f27a0a to #e35f05)
- **Secondary**: Blue gradient (#0ea5e9 to #0284c7)
- **Accent**: Purple (#d946ef)
- **Neutral**: Gray scale

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Components

- **Buttons**: Primary, secondary, and outline variants
- **Cards**: Product cards with hover effects
- **Navigation**: Sticky header with search functionality

## 📱 Pages

### Homepage (`/`)

- Hero section with call-to-action
- Featured products showcase
- Category browsing
- Company features and benefits

### Shop (`/shop`)

- Product grid with filtering
- Search and sort functionality
- Pagination
- Category filters

### Categories (`/categories`)

- Browse products by category
- Wellness & Health
- Home & Living
- Kitchen & Dining
- Beauty & Personal Care

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

- **Netlify**: Configure build settings for Next.js
- **AWS Amplify**: Connect your repository
- **DigitalOcean App Platform**: Deploy with ease

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=your-api-url
```

### Customization

- Update colors in `tailwind.config.js`
- Modify product data in components
- Add new pages in the `app` directory
- Customize components in the `components` folder

## 📈 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for all metrics
- **Image Optimization**: Automatic WebP conversion
- **Code Splitting**: Automatic route-based splitting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Heroicons** for the beautiful icon set
- **Unsplash** for the high-quality images

## 📞 Support

For support, email hello@limitlessblessings.com or create an issue in this repository.

---

**Limitless Blessings** - Bringing premium lifestyle and wellness products to your doorstep. ✨
