import '@styles/globals.css'

if (typeof window !== "undefined") {
  if(window.innerWidth > 1100){
  // window.addEventListener("load", () => console.log("LOADED"));
  document.addEventListener("DOMContentLoaded", () =>
    Particles.init({
                            selector: '.background',
                            connectParticles: true,
                            color: ["#ffffff"]
                        })
  );
}}

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application
