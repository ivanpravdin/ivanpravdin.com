import Head from 'next/head'
import Image from 'next/image'
import Header from '@components/Header'
import Footer from '@components/Footer'
import collages3d1 from '../images/3dcollages1.jpg'
import collages3d2 from '../images/3dcollages2.jpg'
import collages3d3 from '../images/3dcollages3.jpg'

export default function Home() {
    return (
        <div class="container">
   <head>
      
	  
      <title>IV</title>
	   
   </head>
   <div id="wrapper">
	   <script src="https://unpkg.com/cursor-effects@latest/dist/browser.js"></script>
	   <script type="module">
		   new cursoreffects.fairyDustCursor();
	   </script>
	    <main>
	    <header>
               <h1 class="rainbow-text rainbow" >IV</h1>
               <nav>
                  <a href="mailto:ipravdin.official@gmail.com"><u><u class="symbol">🖂</u> EMAIL <u class='symbol'>🖂</u></u></a><br/><br/>
                  <a href="https://vimeo.com/user130931720"><u><u class="symbol">🖭</u> VIMEO <u class='symbol'>🖭</u></u></a><br/><br/>
                  <a href="https://www.instagram.com/it.is.iv/"><u><u class="symbol">🖻</u> INSTAGRAM <u class='symbol'>🖻</u></u></a><br/><br/>
                  <a href="https://foundation.app/@it.is.iv"><u><u class="symbol">▲◉◼</u> FOUNDATION <u class='symbol'>▲◉◼</u></u></a><br/><br/>
               </nav>
            </header>
	    <section class="about" id="about">
               <h2 class="hero_header">ABOUT<span class="light"></span></h2>
               <p class="tagline">IV is a creative technologist working with AI, code, performance, and more</p>
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
		  <p>Sculptures for ___WIRE metaverse, 2022</p>
		  <p>Vibration Check Live Coding performance, NYC, 2022</p>
		  <p>HarvardHack project, 2022</p>
		  <p>Technopagan Solsitice Algorave Live Coding performance, NYC, 2022</p>
	 	  <p>MIT Reality Hack project, 2022</p>
                  <br/>
               </div>
            </div>
	    <div class="gallery">
               <div class="thumbnail">
                  <h2 class="stats">EDUCATION</h2>
                  <p>School of the Museum of Fine Arts at Tufts University, BFA + BA/BS, 2022 - present</p>
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
