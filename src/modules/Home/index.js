

import { useState } from 'react';
import { IMAGES } from '../../assets/images';

function Home() {
  const [data, setData] = useState([]);
  const [hover, setHoverItem] = useState(false);
  const onChange = (e) => {
    const { files } = e.target;
    setData([...data, files[0]])
  }
  const setHover = () => {
    setHoverItem(!hover)
  }
  const onDelete=(file)=>{
    const newData = data.filter(x=>x!== file);
    setData(newData)
  }
  const _class = hover ? 'input-file' : '';
 
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
          className={_class}
        />
      </div>
      <div className='file-list'>
        {data.map((item, index) =>
          <div className='item'>
            <img alt='null' src={getImageFile(item.type)} className='img'/>
            <p>{item.name}</p>
            <p> {Math.round(item.size /1024) } kb</p>
            <div onClick={()=>onDelete(item)} className='btn-del'>
              X
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function getImageFile(file) {
  const type = file.split('/')[1];

  switch (type) {
    case 'jpeg':
      return IMAGES.jpeg
    case 'png':
      return IMAGES.png

    default: return IMAGES.file

  }
}

export default Home;
