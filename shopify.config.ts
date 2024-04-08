// Shopify App Bridge React 4.x.x simplifies the configuration process. 
// Apps no longer need to use a React Provider or the host config. Instead, 
// they only need to provide their API key to the app-bridge.js script.

// App Bridge 4.x.x docs: https://shopify.dev/docs/api/app-bridge/migration-guide

export const shopifyAuth = {
  clientId: process.env.SHOPIFY_APP_CLIENT_ID as string,
  clientSecret: process.env.SHOPIFY_APP_CLIENT_SECRET as string,
  grantType: process.env.SHOPIFY_APP_GRANT_TYPE as string
};