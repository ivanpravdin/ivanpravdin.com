import '@styles/globals.css'

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}


                    window.onload = function() {
                        Particles.init({
                            selector: '.background',
                            connectParticles: true,
                            color: ["#ffffff"]
                        })
                    };

export default Application
