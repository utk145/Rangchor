

function App() {


  return (
    <>
      <header>
        <h1>Rangchor.app</h1>
        <div className="inp">
          <label htmlFor="file">Upload Image <i class="fa-regular fa-images fa-bounce"></i></label>
          <input type="file" id="file" hidden />
          {/* Make sure that htmlFor and id matches */}
        </div>
      </header>
    </>
  )
}

export default App
