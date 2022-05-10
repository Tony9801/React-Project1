import React from 'react'
import Button from './Button';

 const Header = (props) => {
   const onClick = () => {
        console.log('Click')
     }

  return (
    <header className='header' >
        <h1>{props.title}</h1>
        <Button color='blue' text='New Button' onClick={onClick}/>
        </header>
  )
}
Header.defaultProps ={
    title : 'default value',
}

// const headerStyle = {
//     color:'red'
// }
export default Header;
