import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
    return (
        <div class="container">
   <head>
      <style>
                                    main {
                                        background: url("images/background.jpg") no-repeat center center fixed;
                                    -webkit-background-size: cover;
                                    -moz-background-size: cover;
                                    -o-background-size: cover;
                                    background-size: cover;
         }
                     </style>
	  
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
	    </main>
      
   </div>
	   </div>
        )
  
}
