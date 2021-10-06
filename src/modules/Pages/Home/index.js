import { banner } from '../../ultils/exampleData';
import styles from './index.module.scss';

function Home() {


  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <img src={banner} alt='banner' />
        <div className={styles.contentBanner}>

        </div>
        <div className=' container'>
          <p className={styles.text}> Xin chào !</p>
        </div>
      </div>
      <div className="container">
        Chào mừng đến website
      </div>
    </div>

  );
}



export default Home;
