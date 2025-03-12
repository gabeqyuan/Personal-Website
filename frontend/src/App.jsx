import Navbar from './components/navbar/navbar'
import Profile from './components/profile/profile'
import About from './components/about/about'
import Projects from './components/projects/projects'
import Experiences from './components/experiences/experiences'
import Chat from './components/chat/chat'
import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <Profile/>
      <Chat/>
      <About/>
      <div id="projects">
        <h2>Projects</h2>
        <Projects name="Personalized AI Chatbot " description="<b>Integrated AI Chatbot</b> into Personal Portfolio Website using <b>Google Gemini API</b> and <b>MongoDB</b>" See Code="https://github.com/gabeqyuan/Personal-Website"/>

      </div>
      <div id="exp">
        <h2>Experiences</h2>
        <Experiences title="Summer Intern" info="American Express Global Business Travel" dates="June 2022 – August 2023" bullets={[
          'Improved candidate experience by remodeling the company’s careers website', 
          'Spearheaded a cross-functional initiative to revamp key aspects impacting employee experience and brand image, culminating in a proposal presented to and adopted by the HR Leadership Team including the CEO & CPO',
          'Ensured fair compensation distribution after acquisition by restructuring company job architecture'
          ]}/>
      </div>
    </>
  )
}


export default App
