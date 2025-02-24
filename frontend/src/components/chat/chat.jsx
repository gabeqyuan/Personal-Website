import { useState } from 'react'
import './chat.css'

function Chat() {
    const [messages, setMessages] = useState([])
    const [userInput, setUserInput] = useState('')

    async function getResponse() {
        try {
            if (!userInput) return
            const response = await fetch('https://gabeyuan-690cc132abfa.herokuapp.com/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userInput })
            })
            if (!response.ok) {
                throw new Error('Oops, something went wrong!')
            }
            const { message } = await response.json()
            setMessages([...messages, userInput, message])
        } catch (error) {
            console.error(error)
            return 'Oops, something went wrong!'
        }
    }

    function deleteChatbox(index){
        let newMessagess = [...messages]
        newMessagess.splice(index,2)
        fetch('https://gabeyuan-690cc132abfa.herokuapp.com/delete', {
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
                <input type="text" name='user-input' id="questionInput" 
                    placeholder="What would you like to ask?" 
                    onChange={e => setUserInput(e.target.value)}/>
                <button type="submit" onClick={getResponse}>Submit</button>
            </form>
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