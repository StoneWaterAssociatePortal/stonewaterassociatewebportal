import Image from 'next/image';
import logo from '../../public/logo.png';  
import styles from './styles/HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt="StoneWaterAssociate Logo" width={90} height={60} className={styles.logo} />
        <h1 className={styles.title}>StoneWaterAssociate</h1>
      </div>

      <h2 className={styles.subHeader}>
        We're Working on <br /> Something Exciting
      </h2>

      <p className={styles.description}>
        The StoneWaterAssociate web portal is currently under construction.
      </p>
    </div>
  );
};

export default HomePage;
