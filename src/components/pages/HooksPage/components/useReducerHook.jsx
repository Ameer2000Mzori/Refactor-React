import React, { useReducer, useState } from 'react'
import { StyledButton, StyledTitle } from '../../../shared/StyledComponent'

const reducer = (state, action) => {
  if (action.type === 'CALL_NAME') {
    console.log(action.payload)
    return state + ' hello'
  }
  if (action.type === 'REST_NAME') {
    console.log(action.payload)
    return action.payload
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

  const restName = (userName) => {
    dispatch({ type: 'REST_NAME', payload: userName })
  }

  return (
    <>
      <StyledTitle>useReducer</StyledTitle>
      <div>
        <StyledButton onClick={() => changeName(newName)}>
          add hello
        </StyledButton>
        <StyledButton onClick={() => restName('test name')}>rest</StyledButton>
      </div>
      <StyledTitle>{state}</StyledTitle>
    </>
  )
}

export default useReducerHook
