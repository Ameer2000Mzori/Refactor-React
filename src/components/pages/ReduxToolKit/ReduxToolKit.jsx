import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../../../future/Users/UsersSlice'

const ReduxToolKit = () => {
  const dispatch = useDispatch()

  const users = useSelector((state) => state.Users.userList)

  const addNewUser = (userName) => {
    dispatch(addUser(userName))
  }

  console.log(users)
  return (
    <>
      <button onClick={() => addNewUser('new Name')}>add user </button>
      <div>
        {users?.map((user, index) => (
          <div key={index}>{user.name}</div>
        ))}
      </div>
    </>
  )
}

export default ReduxToolKit
