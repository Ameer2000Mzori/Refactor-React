import React from 'react'
import { StyledButton, StyledTitle } from '../../../shared/StyledComponent'

const useReducerHook = () => {
  return (
    <>
      <StyledTitle>UseState</StyledTitle>
      <div>
        <StyledButton>increment</StyledButton>
        <StyledButton>decrement</StyledButton>
      </div>
      <StyledButton>rest</StyledButton>
      <StyledTitle></StyledTitle>
    </>
  )
}

export default useReducerHook
