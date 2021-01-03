// tailwind.cssのガイド (https://tailwindcss.com/docs/guides/nextjs)を参照
// import '../styles/globals.css'
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
