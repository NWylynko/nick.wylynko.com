import React from 'react'
import {useSpring, animated} from 'react-spring'

interface Props {
  
}

const Index = (props: Props) => {
  
  return (
    <div>
      <p>second</p>
      <Counter />
    </div>
  )
}

const Counter = () => {
  const props = useSpring({ number: 1, from: { number: 0 } })
  return <animated.span>{props.number}</animated.span>
}

export default Index