import React from 'react'
import Input from './Input'
import Message from './Message'

function Chat() {
  return (
    <div className="card mt-2" style={ {height: '80vh'}}>
        <div className="card-header">
           chart
        </div>
        <div className="card-body">
        <Message />
        </div>
        <div className="card-footer">
            <Input />
        </div>
    </div>
  )
}

export default Chat
