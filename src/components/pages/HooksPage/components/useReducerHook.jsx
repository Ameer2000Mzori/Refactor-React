import React, { useReducer, useState } from 'react'
import { StyledButton, StyledTitle } from '../../../shared/StyledComponent'

const reducer = (state, action) => {
  if (action.type === 'CALL_NAME') {
    console.log(action.payload)
    return state
  }
  console.log('There is no name input')
  return state
}

const useReducerHook = () => {
  const [newName, setNewName] = useState('test name')
  const [state, dispatch] = useReducer(reducer, newName)

  const changeName = (userName) => {
    dispatch({ type: 'CALL_NAME', payload: userName })
  }

  return (
    <>
      <StyledTitle>useReducer</StyledTitle>

      <StyledButton onClick={() => changeName(newName)}>rest</StyledButton>
      <StyledTitle>{newName}</StyledTitle>
    </>
  )
}

export default useReducerHook
