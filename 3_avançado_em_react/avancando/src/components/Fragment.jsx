import React from 'react'

const Fragment = ({propFragment}) => {
  return (
    <>
        <div>
            <h1>Primeiro Título</h1>
            <h1>Segundo Título</h1>
            <h4>{propFragment}</h4>
        </div>
    </>
  )
}

export default Fragment