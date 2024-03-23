import React, { createContext, useReducer } from 'react'
import useAuth from '../custem-hook/Auth'


// context provider
export const ChatContext = createContext()


// context provider
function ChatProvider(props) {
  // custom hook to authcontext
  const {currentUser} =  useAuth()

  const INITAL_STATE = {
    chatId:"null",
    user:{}
  }
  
  //custom reducer
  const chatReducer =(state,action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chartId:
          currentUser.uid > action.payload.uid ? currentUser.uid + action.payload.uid:action.payload.uid + currentUser.uid
        }
        default:
          return state

    }
  }
  // reducer
  const [state,dispatch] = useReducer(chatReducer, INITAL_STATE)
 
  return (
    <ChatContext.Provider value={{ data: state,dispatch }} >
        {
            props.children
        }
    </ChatContext.Provider>
  )
}

export default ChatProvider
