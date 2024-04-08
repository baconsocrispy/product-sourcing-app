// library
import type { Metadata } from "next";

// data
import { shopifyAuth } from "@/shopify.config";

// components
import { AppProvider } from "@shopify/polaris";
import { NavMenu } from '@shopify/app-bridge-react';
import Script from "next/script";

export const metadata: Metadata = {
  title: "Product Sourcing App",
  description: `
    A Shopify embedded app to facilitate drop-shipping between Shopify 
    merchants, with improved shipping calculations, share splitting, customer 
    notifications and general ease of use. Built with Next.js.
  `,
  verification: {
    other: {
      'shopify-api-key': shopifyAuth.clientId
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
      <body>
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
