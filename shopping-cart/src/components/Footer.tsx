import React from 'react'

type PropsType = {
  viewCart: boolean,
}

const Footer = ({ viewCart }: PropsType) => {


  const year: number = new Date().getFullYear()
  
  return (
    <div className='footer'>

      {viewCart
        ? <p>Shopping Cart &copy; {year}</p>
        : (
            <>
                <p>Total Items: </p>
                <p>Total Price: </p>
                <p>Shopping Cart &copy; {year}</p>
            </>
        ) }
    </div>
  )
}

export default Footer