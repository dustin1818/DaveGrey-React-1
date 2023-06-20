import React from 'react'

const Footer = ({length}) => {
    const today = new Date;
    return (
    <footer>

    <p>{length} List {((length === 0) || (length === 1)) ? 'Item' : 'Items'}</p>

    </footer>
  )
}

export default Footer;