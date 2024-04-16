import React, { useCallback, useState } from 'react'
import { StyledButton, StyledTitle } from '../../../shared/StyledComponent'

const UseCallBack = () => {
  const [userName, setUserName] = useState()

  const callBackVariable = useCallback(() => {
    setUserName('hello world')
  }, [userName])
  return (
    <>
      <StyledTitle>useCallback</StyledTitle>
      <div>
        <StyledButton
          onClick={() => {
            setUserName(Math.trunc(Math.random() * 100) + 1)
          }}
        >
          restate callback
        </StyledButton>
      </div>
      <StyledButton onClick={() => callBackVariable()}>rest</StyledButton>
      <StyledTitle>{userName}</StyledTitle>
    </>
  )
}

export default UseCallBack
