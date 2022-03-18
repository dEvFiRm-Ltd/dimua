import React from 'react'

function Success() {
    React.useEffect(() => {
        window.close()
    }, [])
    
  return (
    <div>Success</div>
  )
}

export default Success