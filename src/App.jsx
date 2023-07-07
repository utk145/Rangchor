import { DisplayImage } from "./components/DisplayImage"
import ColorThief from "colorthief";
import { useState } from "react";

function App() {

  const [uploaded, setUploaded] = useState(null);
  const [colorPallette, setColorPalette] = useState(null);

  const uploadImage = (event) => {
    const uploadedFile = event.target.files[0];
    // console.log(event);
    const tmp = new FileReader();
    tmp.onload = async (event) => {
      const image = new Image();
      image.onload = () => {
        const color = new ColorThief();
        const palette = color.getPalette(image, 20);
        setColorPalette(palette);
        setUploaded(event.target.result);
      }
      image.src = event.target.result;
    }
    console.log(tmp);
    tmp.readAsDataURL(uploadedFile);
  }

  return (
    <>
      <header>
        <h1>Rangchor<span style={{fontWeight:400,padding:0,margin:0}}>.</span>app</h1>
        <div className="inp">
          <label htmlFor="file">Upload Image {uploaded?<i className="fa-regular fa-images"></i>:<i class="fa-regular fa-images fa-bounce"></i>}</label>
          <input type="file" id="file" hidden onChange={uploadImage} />
          {/* Make sure that htmlFor and id matches */}
        </div>
      </header>
      <main className="main"><DisplayImage uploaded={uploaded} colorPallette={colorPallette} /></main>
    </>
  )
}

export default App

