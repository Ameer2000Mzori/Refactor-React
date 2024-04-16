import React, { useRef } from 'react'
import { StyledButton, StyledTitle } from '../../../shared/StyledComponent'

const UseRefHook = () => {
  const buttonRef = useRef(null)

  const changeColor = () => {
    buttonRef.current.style.backgroundColor = 'red'
  }

  const restChangeColor = () => {
    buttonRef.current.style.backgroundColor = '#4834'
  }

  return (
    <>
      <StyledTitle>UseRef</StyledTitle>
      <StyledButton className="w-[150px]" ref={buttonRef} onClick={changeColor}>
        Change Color
      </StyledButton>

      <StyledButton onClick={restChangeColor}>rest</StyledButton>
    </>
  )
}

export default UseRefHook
