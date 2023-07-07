import React, { useState } from 'react'
import "../index.css"
import IndividualColor from './IndividualColor';
const ListItem = ({ colorPallette }) => {

  const [copied, setCopied] = useState(false);
  const copy = <i className='far fa-copy'></i>;


  const hex = (rgb) => {
    let val = Number(rgb).toString(16);
    if (val.length < 2) {
      val = "0" + val;
    }
    return val;
  }
  return (
    <div>{colorPallette&&(
      <ul className='colors'>
        {colorPallette.map((color,index)=>{
          const rgb = `rgb(${color[0]},${color[1]},${color[2]})`;
          // const rgb = `rgb(${color.join(",")})`;
          // console.log(rgb);
          // console.log(hex(color[0])+hex(color[1])+hex(color[2]));
          const hexVar = `#${hex(color[0])}${hex(color[1])}${hex(color[2])}`;
          // console.log(rgb, hexVar);          
          return <IndividualColor key={index} rgb={rgb} hexVar={hexVar}/>
        })}
      </ul>
    )}</div>
  )
}

export default ListItem




// const rgb = `rgb(${color[0]},${color[1]},${color[2]})`;
// // const rgb = `rgb(${color.join(",")})`;
// // console.log(rgb);
// // console.log(hex(color[0])+hex(color[1])+hex(color[2]));
// const hexVar = `#${hex(color[0])}${hex(color[1])}${hex(color[2])}`;
// // console.log(rgb, hexVar);
