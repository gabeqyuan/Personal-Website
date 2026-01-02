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
        <Projects 
        name="DiscoverWorldly" 
        description={
        <>
        Developed an interactive music discovery platform that allows users to explore global listening trends by selecting
regions on a 3D globe using <b>MapBox API</b>and previewing top tracks.
Integrated <b>Google Gemini API</b> to power a Tinder-style recommendation engine, analyzing user swipe
interactions to generate and save curated 15-song playlists directly to their Spotify library using the <b>Spotify API</b>.
Implemented <b>secure user authentication</b> via <b>Spotify OAuth</b> to manage sessions and personalize data access,
shipping the full-stack application within a 24-hour hackathon timeframe.
        </>
        } 
        github="https://github.com/gabeqyuan/discover-worldly"
      />
        <Projects 
        name="Patriots Win Predictor" 
        description={
        <>
        Built an <b>ML-powered game outcome predictor</b> using historical NFL data.  
        Designed full-stack system with <b>Flask</b> backend, <b>PyTorch</b> model, and <b>React + Tailwind</b> frontend.  
        Visualized 2025 Patriots schedule with <b>dynamic win probability predictions</b>.
        </>
        } 
        github="https://github.com/gabeqyuan/patriots-win-predictor"
      />
        <Projects 
        name="Personalized AI Chatbot" 
        description={
          <>
            <b>Integrated AI Chatbot</b> into Personal Portfolio Website using <b>Google Gemini API</b> and <b>MongoDB</b>
          </>
        } 
        github="https://github.com/gabeqyuan/Personal-Website"
        />

      </div>

      
      <div id="exp">
        <h2>Experiences</h2>
        <Experiences title="Software Engineering Intern" info="Harvard Medical School and Massachusetts General Hospital" dates="June 2022 – August 2023" bullets={[
          'Reduced computation time for brain cancer imaging data by 100× (22 minutes → 13 seconds) by migrating MATLAB maximum likelihood algorithms to PyTorch with GPU acceleration and vectorized matrix operations', 
          'Enabled efficient processing of 15M+ imaging events by implementing scalable, optimized matrix operations',
          'Supported faster examination across 625+ imaging files by building a configurable reconstruction pipeline'
          ]}/>
      
        <Experiences title="Summer Anaylst Intern" info="American Express Global Business Travel" dates="June 2022 – August 2023" bullets={[
          'Improved candidate experience by remodeling the company’s careers website', 
          'Spearheaded a cross-functional initiative to revamp key aspects impacting employee experience and brand image, culminating in a proposal presented to and adopted by the HR Leadership Team including the CEO & CPO',
          'Ensured fair compensation distribution after acquisition by restructuring company job architecture'
          ]}/>
      </div>


    </>
  )
}


export default App
