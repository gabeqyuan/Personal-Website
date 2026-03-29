import { useState } from 'react'
import './chat.css'

const API_BASE = import.meta.env.VITE_API_BASE || '/.netlify/functions'

function Chat() {
    const [messages, setMessages] = useState([])
    const [userInput, setUserInput] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    async function getResponse() {
        if (!userInput || loading) return
        setError(null)
        setLoading(true)
        try {
            const response = await fetch(`${API_BASE}/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userInput })
            })
            if (!response.ok) {
                throw new Error(`Request failed: ${response.status}`)
            }
            const { message } = await response.json()
            setMessages([...messages, userInput, message])
            setUserInput('')
        } catch (error) {
            console.error(error)
            setError('Chat is temporarily unavailable. Please try again later.')
        } finally {
            setLoading(false)
        }
    }

    function deleteChatbox(index){
        let newMessagess = [...messages]
        newMessagess.splice(index,2)
    fetch(`${API_BASE}/delete`, {
            method: 'POST', 
            headers:{
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                input: messages[index], 
                response: messages[index + 1]
            })
        })
        setMessages(newMessagess)
    }
    return (
        <div id="chat">
            <form onSubmit={(e) => e.preventDefault()}>
                <h2>Ask Me A Question</h2>
                <input
                    type="text"
                    name='user-input'
                    id="questionInput"
                    placeholder="What would you like to ask?"
                    value={userInput}
                    onChange={e => setUserInput(e.target.value)}
                    disabled={loading}
                />
                <button type="submit" onClick={getResponse} disabled={loading}>
                    {loading ? 'Sending...' : 'Submit'}
                </button>
            </form>
            {error && <div className="chat-error">{error}</div>}
            {
                messages.map((text, index) => (
                    <div key={index} className="chatbox">
                        {index % 2 == 0 && <button className='x'
                        onClick={() => deleteChatbox(index)}>X</button>}
                        <p className={index % 2 == 0 ? "user-message" : "chatbot-response"}>{text}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Chat