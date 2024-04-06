// library
import type { Metadata } from "next";

// components
import Script from "next/script";

// styles
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: [ "latin" ] });

export const metadata: Metadata = {
  title: "Product Sourcing App",
  description: `
    A Shopify embedded app to facilitate drop-shipping between Shopify 
    merchants, with improved shipping calculations, share splitting, customer 
    notifications and general ease of use. Built with Next.js.
  `,
  verification: {
    other: {
      'shopify-api-key': process.env.SHOPIFY_APP_CLIENT_ID ?? 'Error retrieving key'
    }
  }
};

 const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={ inter.className }>
        { children }
        <Script 
          src="https://cdn.shopify.com/shopifycloud/app-bridge.js" 
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
};

export default RootLayout;
