import Head from 'next/head'
import Image from 'next/image'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
    return (
        <div class="container">
	   <head>
    <title>IV Pravdin</title>
    <link rel="stylesheet" href="/styles/globals.css"></link>
</head>

<body>
    <div class="gradient"></div>

    <div class="card">
        <div class="top">
            <div class="dots">
                <div class="dot dot-1"></div>
                <div class="dot dot-2"></div>
                <div class="dot dot-3"></div>
            </div>
            <p class="g-color">_&gt;</p>
        </div>
        <div class="bottom">
            <p class="code">
                <span class="red">function</span> <span class="violet">hello</span><span class="blue">(</span><span
                    class="blue">)</span><span class="blue">/{</span><br></br>
                <span class="red space-4">for</span><span class="orange">(</span><span class="red">let</span> <span
                    class="white">i</span> <span class="red">=</span> <span class="blue">0</span> <span class="white">;
                    i</span> <span class="red">&lt;</span> <span class="blue">10</span> <span class="white">;
                    i</span><span class="red">++</span><span class="orange">)</span><span
                    class="orange space-4">/{</span><br></br>
                <span class="blue space-4x2">console</span><span class="white">.</span><span
                    class="violet">log(</span><span class="blue">`</span><span class="orange">Hi! My name is
                    IV.</span><span class="blue">`</span><span class="violet">)</span><span class="white">;</span><br></br>
                <span class="blue space-4x2">console</span><span class="white">.</span><span
                    class="violet">log(</span><span class="blue">`</span><span class="orange">I am a CS student at
                    Tufts.</span><span class="blue">`</span><span class="violet">)</span><span
                    class="white">;</span><br></br>
                <span class="blue space-4x2">console</span><span class="white">.</span><span
                    class="violet">log(</span><span class="blue">`</span><span class="orange">You can find my resume <a
                        class="resume"
                        href="https://drive.google.com/file/d/1xP38WneC1cDi0XH9ZRbZ3PcYdNlaMiOR/view?usp=sharing">here</a>.</span><span
                    class="blue">`</span><span class="violet">)</span><span class="white">;</span><br></br>
                <span class="blue space-4x2">console</span><span class="white">.</span><span
                    class="violet">log(</span><span class="blue">`</span><span class="orange">And my LinkedIn <a
                        class="linkedin" href="https://www.linkedin.com/in/iv-pravdin/">here</a>.</span><span
                    class="blue">`</span><span class="violet">)</span><span class="white">;</span><br></br>
                <span class="blue space-4x2">console</span><span class="white">.</span><span
                    class="violet">log(</span><span class="blue">`</span><span class="orange">Have a nice
                    day!</span><span class="blue">`</span><span class="violet">)</span><span class="white">;</span><br></br>
                <span class="orange space-4">}</span><br></br>
                <span class="blue">}</span><br></br>
                <br></br>
                <span class="violet">hello</span><span class="blue">()</span><span class="white">;</span>
            </p>
        </div>
    </div>

</body>
	</div>
	)
}
