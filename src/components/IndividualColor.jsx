import React, { useState } from 'react'

const IndividualColor = ({ rgb, hexVar }) => {
  const [copied, setCopied] = useState(false);
  const colorCopyHandle = (event)=>{
    const color = event.target.innerText;
    navigator.clipboard.writeText(color);
  };
  return (
    <li style={{ background: rgb }}><span onClick={(event) => {
      colorCopyHandle(event);
      setCopied(true);
      setTimeout(()=>{setCopied(false)},2000);
    }}>{copied ? "Copied" : hexVar}<i className='far fa-copy'></i></span></li>
  )
}

export default IndividualColor