import './globals.css';
import { Outfit } from 'next/font/google';  // Importing the font from Next.js

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],  // Choose font weights you want
});

export const metadata = {
  title: 'Blogzz',
  description:
    'Blogzz is a modern blogging platform built with Next.js, Tailwind CSS, and MongoDB. It features a sleek, responsive design, an intuitive admin panel for managing posts effortlessly, and an email subscription system to grow your audience. Blogzz is perfect for creating, managing, and sharing your personal content with ease.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.className}>  {/* Apply the font */}
      <body>
        {children}
      </body>
    </html>
  );
}
