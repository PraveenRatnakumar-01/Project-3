import React from 'react'

const CallbackComp = ({newcount, handleClick}) => {
    console.log("Callback component rendered")
  return (
    <div>CallbackComp
        count : {newcount}
        <button onClick={handleClick}>Click Here</button>
    </div>
  )
}

export default React.memo(CallbackComp)