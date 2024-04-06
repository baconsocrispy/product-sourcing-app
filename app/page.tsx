'use client'
import { NavMenu } from "@shopify/app-bridge-react";
import { AppProvider } from "@shopify/polaris";
import polarisTranslations from "@shopify/polaris/locales/en.json";
export default function Home() {
  return (
    <AppProvider i18n={ polarisTranslations }>
      <NavMenu >
        <a href="/" rel='home'>Home</a>
      </NavMenu>
    </AppProvider>
  );
}
