import "../styles/globals.css";
import '../styles/ScrolldownBtn.css';
import '../styles/Hamburger.css';
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
