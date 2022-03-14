import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import collages3d1 from '/images/3dcollages1.jpg'

export default function Home() {
    return (
        <div class="container">
   <head>
      
	  
      <title>IV</title>
	   
   </head>
   <div id="wrapper">
	    <main>
	    <header>
               <h1 class="rainbow-text rainbow" >IV</h1>
               <nav>
                  <a href="mailto:ipravdin.official@gmail.com"><u>🖂 EMAIL 🖂</u></a><br/><br/>
                  <a href="https://vimeo.com/user130931720"><u>🖭 VIMEO 🖭</u></a><br/><br/>
                  <a href="https://www.instagram.com/it.is.iv/"><u>🖻 INSTAGRAM 🖻</u></a><br/><br/>
                  <a href="https://foundation.app/@it.is.iv"><u>▲◉◼ FOUNDATION ▲◉◼</u></a><br/><br/>
               </nav>
            </header>
	    <section class="about" id="about">
               <h2 class="hero_header">ABOUT<span class="light"></span></h2>
               <p class="tagline">IV is a transdisciplinary researcher working with AI, emotions, perception, and more</p>
               <br/>
            </section>
	    <div class="gallery">
               <div class="thumbnail">
                  <h2 class="stats">RESUME</h2>
                  <h3>GROUP EXHIBITIONS</h3>
                  <p>Envision Arts, Mythical, February - March 2021</p>
                  <p>ArtNumber23, New Era, March 2021</p>
                  <p>Biennial, MOWNA, April - September 2021</p>
                  <p>Computer Vision Art Gallery, CVPR 2021</p>
                  <p>META-MENAGERIE, Ars Electronica Garden NYC 2021</p>
                  <br/>
                  <h3>PROJECTS</h3>
                  <p>"This Show is Curated by a Machine" at MOWNA, 2021</p>
                  <p>3D AI Art workshop at Global AI Summit, 2021</p>
                  <p>Pan-Pot Virtual Unreality performance, 2021</p>
                  <p>Future East Festival Virtual Environment, 2021</p>
                  <br/>
               </div>
            </div>
	    <div class="gallery">
               <div class="thumbnail">
                  <h2 class="stats">WORKS</h2>
                  <h3>3D Collages</h3>
                  <div class="row">
                     <div class="column">
                        <img src={collages3d1}  style={{ width: '100%' }} />
                     </div>
                     <div class="column">
                        
                     </div>
                     <div class="column">
                        
                     </div>
                  </div>
				   <br/>
				   
               
				</div>
            </div>
         
         <footer>
           <br/>
         </footer>
	    </main>
      
   </div>
	   </div>
        )
  
}
