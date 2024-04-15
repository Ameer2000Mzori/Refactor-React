import React, { useState } from 'react'
import { StyledButton, StyledTitle } from '../../../shared/StyledComponent'

const UseStateHook = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <StyledTitle>this is useState</StyledTitle>
      <div>
        <StyledButton onClick={() => setCount((p) => (p += 1))}>
          increment
        </StyledButton>

        <StyledButton onClick={() => setCount((p) => (p -= 1))}>
          decrement
        </StyledButton>
      </div>
      <StyledButton onClick={() => setCount(0)}>rest</StyledButton>
      <StyledTitle>{count}</StyledTitle>
    </>
  )
}

export default UseStateHook
