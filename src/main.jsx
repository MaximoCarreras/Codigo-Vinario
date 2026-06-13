import { LanguageProvider } from './context/LanguageContext';
// ... adentro del render:
<LanguageProvider>
  <CartProvider>
    <App />
  </CartProvider>
</LanguageProvider>