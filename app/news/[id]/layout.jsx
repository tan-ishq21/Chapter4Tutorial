import React from 'react'

const DynamicLayoutId = ({children , modal}) => {
  return (
    <>
      {modal}
      {children}
    </>
  )
}

export default DynamicLayoutId
