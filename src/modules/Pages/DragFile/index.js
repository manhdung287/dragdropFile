

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { IMAGES } from '../../../assets/images';
import styles from './index.module.scss';

function DragFile() {

  const [data, setData] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    const newfile = acceptedFiles;
    const newData = [...data];
    newData.push(newfile[0]);
    setData(newData);
  }, [data]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const _isDrop = isDragActive ? styles.dropClass : '';
  console.log(data)

  return (
    <div className='container'>
      <div {...getRootProps()} className={styles.wrapper}>
        <div className={styles.dropZone + ' ' + _isDrop}>
          <img src={IMAGES.uploadbg} alt='upload' className={styles.imageUpload} />
          <input {...getInputProps()} />
        </div>
        <div className={styles.list}>
          {data.map((item, index) =>
            <div className={styles.item} key={item.lastModified + index}>
              <div>
                <img className={styles.imgFile} alt='img' src={imageFiletype(item.type)} />
              </div>
              <p className={styles.nameFile}>{item.name}</p>
              <p>{Math.round((item.size) / 1024)} kb</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
function imageFiletype(type) {
  switch (type) {
    case 'image/jpeg':
      return IMAGES.jpeg
    case 'image/png':
      return IMAGES.png
    case 'video/mp4':
      return IMAGES.media
    case 'text/html':
      return IMAGES.html
    default:
      return IMAGES.file;
  }
}
export default DragFile;
