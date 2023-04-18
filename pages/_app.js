import '@styles/globals.css'

useEffect(() => {
  if(window.innerWidth > 1100){ // pJS_desktop and pJS_mobile = my settings functions
if (typeof window !== "undefined") {
  // window.addEventListener("load", () => console.log("LOADED"));
  document.addEventListener("DOMContentLoaded", () =>
    Particles.init({
                            selector: '.background',
                            connectParticles: true,
                            color: ["#ffffff"]
                        })
  );
}}
}, []);


function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application
