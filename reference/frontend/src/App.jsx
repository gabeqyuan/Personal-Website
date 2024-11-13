import Navbar from './components/navbar/navbar'
import Profile from './components/profile/profile'
import About from './components/about/about'
import Projects from './components/projects/projects'
import Experiences from './components/experiences/experiences'
import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <Profile/>
      <About/>
      <div id="projects">
        <h2>Projects</h2>
        <Projects name="Project 1" description="Project 1 Description" github="https://github.com"/>
        <Projects name="Project 2" description="Project 2 Description" github="https://github.com"/>
      </div>
      <div id="exp">
        <h2>Experiences</h2>
        <Experiences title="Experience 1" info="Experience 1 Description" dates="Date 1 – Date 2" bullets={['Bullet 1', 'Bullet 2']}/>
        <Experiences title="Experience 2" info="Experience 2 Description" dates="Date 1 – Date 2" bullets={['Bullet 1', 'Bullet 2', 'Bullet 3']}/>
      </div>
    </>
  )
}

export default App
