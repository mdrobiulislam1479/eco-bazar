# Eco Bazar

An eco-friendly e-commerce platform built with Next.js, Redux Toolkit, and modern web technologies. This project provides a complete shopping experience with user authentication, product browsing, cart management, wishlist functionality, and secure checkout.

## 🚀 Features

- **User Authentication**: Secure login and registration using NextAuth.js
- **Product Management**: Browse products by category, search, and detailed product views
- **Shopping Cart**: Add, remove, and manage cart items with Redux state management
- **Wishlist**: Save favorite products for later
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Interactive Maps**: Location-based features using Leaflet
- **Image Galleries**: Product image carousels with Swiper
- **Order Management**: Complete checkout process with order tracking
- **Newsletter Subscription**: Email marketing integration
- **Testimonials**: Customer reviews and ratings

## 🛒 Shopping Features

- **Product Catalog**: Browse products with filtering and search
- **Product Details**: Detailed product information with image galleries
- **Cart Management**: Add/remove items, quantity updates
- **Wishlist**: Save products for future purchases
- **Checkout Process**: Secure order placement with billing information
- **Order History**: Track past orders

## 🛠️ Tech Stack

- **Frontend**: Next.js 16, React 19
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **Database**: MongoDB
- **Maps**: Leaflet & React Leaflet
- **Icons**: Lucide React, React Icons
- **UI Components**: Custom component library
- **Alerts**: SweetAlert2
- **Image Carousels**: Swiper

## 📋 Prerequisites

- Node.js (version 18 or higher)
- MongoDB database
- npm or yarn package manager

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd eco-bazar
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory and add the following variables:

   ```env
   NEXTAUTH_URL=
   NEXTAUTH_SECRET=
   MONGODB_URI=
   ```

4. **Database Setup**
   Ensure MongoDB is running and accessible with the provided connection string.

## 🚀 Running the Application

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 📁 Project Structure

```
eco-bazar/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── api/            # API routes
│   │   ├── auth/           # Authentication pages
│   │   ├── cart/           # Shopping cart page
│   │   ├── checkout/       # Checkout process
│   │   ├── shop/           # Product listing and details
│   │   └── wishlist/       # Wishlist page
│   ├── components/         # Reusable React components
│   │   ├── home/          # Homepage components
│   │   ├── shared/        # Shared layout components
│   │   ├── ui/            # UI component library
│   │   └── ...            # Feature-specific components
│   ├── lib/               # Utility functions and configurations
│   ├── providers/         # Context providers
│   └── redux/             # Redux store and slices
├── public/                # Static assets
├── package.json
├── next.config.mjs
├── tailwind.config.mjs
└── README.md
```
