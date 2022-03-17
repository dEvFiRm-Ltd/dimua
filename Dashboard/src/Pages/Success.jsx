import React from 'react'

function Success() {
    React.useEffect(() => {
        window.close();
    }, [])
  return (
    <div>welcome for login</div> 
  )
}

export default Success