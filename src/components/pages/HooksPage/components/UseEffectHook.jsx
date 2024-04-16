import React, { useState, useEffect } from 'react'
import { StyledTitle } from '../../../shared/StyledComponent'

const UseEffectHook = () => {
  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <StyledTitle>useEffect</StyledTitle>

      <StyledTitle>{seconds}</StyledTitle>
    </>
  )
}

export default UseEffectHook
