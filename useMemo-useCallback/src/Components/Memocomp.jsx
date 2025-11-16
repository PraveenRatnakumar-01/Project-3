import React from 'react'
//Memo(): used to control renders
//Whenever props change, components re render

const Memocomp = ({count, User}) => {
    console.log("Memo Component Rendered")
  return (
    <div>
    ******* Memocomp *******             
    Count Value: {count}
    <h2>Login User: {User.name}
        Cart Count: {User.CartCount}
    </h2>
    </div>
  )
}

//const newComp = React.memo(MemoComp)
//export default newComp

export default React.memo(Memocomp)