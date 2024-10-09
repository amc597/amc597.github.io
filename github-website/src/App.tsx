import gsap from 'gsap';
import './App.css';

const hero = document.querySelector(".hero-secondary")
const tl = gsap.timeline({ delay: 1 })

tl.to(hero, {
    "--maskSize1": "20%",
    duration: 0.5,
    ease: "back.out(2)",
}).to(hero, {
    "--maskSize2": "28%",
    "--maskSize3": "calc(28% + 0.1rem)",
    duration: 0.5,
    delay: 0.5,
    ease: "back.out(2)",
})

window.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e
    const x = Math.round((clientX / window.innerWidth) * 100)
    const y = Math.round((clientY / window.innerHeight) * 100)

    gsap.to(hero, {
        "--x": `${x}%`,
        "--y": `${y}%`,
        duration: 0.3,
        ease: "sine.out",
    })
})

function App() {
  return (
    <div className="App">
          <div className="wrapper">
              <div className="hero">
                  <h1 className="hero-heading">Hi, I'm Kartik</h1>
                  <p>A web developer.</p>
              </div>
              <div className="hero hero-secondary" aria-hidden="true">
                  <h1 className="hero-heading">Hi, I'm Kartik</h1>
                  <p>A web developer.</p>
              </div>
          </div>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"></script>
    </div>
  );
}

export default App;
