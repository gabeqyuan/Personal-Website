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

app.post('/delete', async (req, res) => {
  try {
    const log = req.body 
    if (!log.input || !log.response || Object.keys(log).length !== 2){
      res.status(400).json({message: 'Bad Request'})
      return
    }
    await mongoclient.db('personal-website').collection('logs').deleteOne(log)
    res.status(201).json({message:'Sucsess'})
  } catch (error) {
    console.error(error)
    res.status(500).json({message: 'Error'})
  }
  })

export default App
