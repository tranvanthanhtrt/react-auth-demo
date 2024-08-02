import 'react'
import { memo } from 'react';
const Counter = ({onCount}) => {
  console.log("counter render", onCount);
  
  return (
    <div>
      Counter component
    </div>
  )
}
export default memo(Counter);