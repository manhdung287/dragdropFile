
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [hover, setHoverItem] = useState(false);
  const onChange = (e) => {
    const { files } = e.target;
    setData([...data, files[0]])
  }
  const setHover = () => {
    setHoverItem(!hover)
  }

  const _class = hover ? 'input-file' : '';

  console.log(data)

  return (
    <div className="App">
      <div className='input-wrapper'

      >
        {/* <label htmlFor='inputFile' className={'label-input ' + _class}>
          Click here
        </label> */}
        <input type='file' value='' onChange={onChange}
          onDragLeave={() => setHover(false)}
          onDragEnter={() => setHover(true)}
          onDrop={() => setHover(false)}
          placeholder=''
        />
      </div>
      <div className='file-list'>
        {data.map((item, index) =>
          <div className='item'>
            <p> {item.name}</p>
            <p> {item.type}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function getImageFile(file) {
  switch (file) {
    case file === '':

      break;

    default:
      break;
  }
}

export default App;
