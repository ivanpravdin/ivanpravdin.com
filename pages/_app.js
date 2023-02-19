import '@styles/globals.css'

if (typeof window !== "undefined") {
  // window.addEventListener("load", () => console.log("LOADED"));
  document.addEventListener("DOMContentLoaded", () =>
    console.log("DOMContentLoaded")
  );
}

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application
