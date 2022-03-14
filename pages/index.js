import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
    return (
      < !doctype html >
        <html lang="en-US">
            <head>
                <meta charset="utf-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1">
                            <title>IV</title>
                            <link href="css/singlePageTemplate.css" rel="stylesheet" type="text/css">
                                <!--The following script tag downloads a font from the Adobe Edge Web Fonts server for use within the web page. We recommend that you do not modify it.-->
                                <script>var __adobewebfontsappname__="dreamweaver"</script>
                                <script src="http://use.edgefonts.net/source-sans-pro:n2:default.js" type="text/javascript"></script>
                                <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
                                <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
                                <!--[if lt IE 9]>
                                <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
                                <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
                                <![endif]-->
                                <style>
                                    html {
                                        background: url("images/background.jpg") no-repeat center center fixed;
                                    -webkit-background-size: cover;
                                    -moz-background-size: cover;
                                    -o-background-size: cover;
                                    background-size: cover;
         }
                                </style>
   </head>
                            <div id="wrapper">
                                <body>
                                    <!-- Main Container -->
                                    <div class="container">
                                        <!-- Navigation -->
                                        <header>
                                            <h1 class="rainbow-text rainbow" >IV</h1>
                                            <nav>
                                                <a href="mailto:ipravdin.official@gmail.com"><u>🖂 EMAIL 🖂</u></a><br><br>
                                                    <a href="https://vimeo.com/user130931720"><u>🖭 VIMEO 🖭</u></a><br><br>
                                                        <a href="https://www.instagram.com/it.is.iv/"><u>🖻 INSTAGRAM 🖻</u></a><br><br>
                                                            <a href="https://foundation.app/@it.is.iv"><u>▲◉◼ FOUNDATION ▲◉◼</u></a><br><br>
               </nav>
            </header>
                                                            <!-- Hero Section -->
                                                            <!-- About Section -->
                                                            <section class="about" id="about">
                                                                <h2 class="hero_header">ABOUT<span class="light"></span></h2>
                                                                <p class="tagline">IV is a transdisciplinary researcher working with AI, emotions, perception, and more</p>
                                                                <p class="tagline">&nbsp;</p>
                                                            </section>
                                                            <!-- Stats Gallery Section -->
                                                            <div class="gallery">
                                                                <div class="thumbnail">
                                                                    <h2 class="stats">RESUME</h2>
                                                                    <h3>GROUP EXHIBITIONS</h3>
                                                                    <p>Envision Arts, Mythical, February - March 2021</p>
                                                                    <p>ArtNumber23, New Era, March 2021</p>
                                                                    <p>Biennial, MOWNA, April - September 2021</p>
                                                                    <p>Computer Vision Art Gallery, CVPR 2021</p>
                                                                    <p>META-MENAGERIE, Ars Electronica Garden NYC 2021</p>
                                                                    <p>&nbsp;</p>
                                                                    <h3>PROJECTS</h3>
                                                                    <p>"This Show is Curated by a Machine" at MOWNA, 2021</p>
                                                                    <p>3D AI Art workshop at Global AI Summit, 2021</p>
                                                                    <p>Pan-Pot Virtual Unreality performance, 2021</p>
                                                                    <p>Future East Festival Virtual Environment, 2021</p>
                                                                    <p>&nbsp;</p>
                                                                </div>
                                                            </div>
                                                            <div class="gallery">
                                                                <div class="thumbnail">
                                                                    <h2 class="stats">WORKS</h2>
                                                                    <h3>3D Collages</h3>
                                                                    <div class="row">
                                                                        <div class="column">
                                                                            <img src="images/3dcollages1.jpg" style="width:100%">
                     </div>
                                                                            <div class="column">
                                                                                <img src="images/3dcollages2.jpg" style="width:100%">
                     </div>
                                                                                <div class="column">
                                                                                    <img src="images/3dcollages3.jpg" style="width:100%">
                     </div>
                                                                                </div>
                                                                                <p>&nbsp;</p>
                                                                                <h3>Transformation</h3>
                                                                                <div class="row">
                                                                                    <div class="column">
                                                                                        <img src="images/3dcollages1.jpg" style="width:100%">
                     </div>
                                                                                        <div class="column">
                                                                                            <img src="images/3dcollages2.jpg" style="width:100%">
                     </div>
                                                                                            <div class="column">
                                                                                                <img src="images/3dcollages3.jpg" style="width:100%">
                     </div>
                                                                                            </div>
                                                                                        </div>

                                                                                    </div>
                                                                                </div>
                                                                                <footer>
                                                                                    <p>&nbsp;</p>
                                                                                </footer>
      </body>
                                                                        </div>
</html>
        )
  
}
