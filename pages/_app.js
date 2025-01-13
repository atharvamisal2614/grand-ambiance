// pages/_app.js
import { useState, useEffect } from "react";
import Loader from "@/Components/Loader"
import "../styles/globals.css"; // Ensure Tailwind CSS is imported

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds loader
    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  if (loading) {
    return <Loader />;
  }

  return <Component {...pageProps} />;
}

export default MyApp;
