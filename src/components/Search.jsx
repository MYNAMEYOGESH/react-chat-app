import React, { useRef, useState } from 'react'
import useAuth from '../custem-hook/Auth'
import {collection,
query,
where,
getDocs,
doc,
setDoc,
updateDoc,
getDoc,
serverTimestamp}
 from 'firebase/firestore'
 import { db } from '../fireConfig'
 import { Toast } from 'react-toastify'
function Search() {
  const fUser = useRef()
  const { currentUser } = useAuth()
  const [user,setUser] = useState(null)

  //search handler

  const handleSearch = async () => {

  }

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch()
  }
  return (
    <div className='form-group'>
        <input type="search" ref={fUser} onKeyDown={handleKey} className='form-control' placeholder='Search Username'/>
    </div>
  )
}

export default Search