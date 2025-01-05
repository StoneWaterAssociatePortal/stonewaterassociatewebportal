import Image from 'next/image';
import logo from '../../public/logo.png';  
import styles from './styles/HomePage.module.css';

const HomePage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
        padding: '21px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '20px',
          position: 'relative',
          padding: '16px',
        }}
      >
        <div className={styles.circle} />
        <Image src={logo} alt="StoneWaterAssociate Logo" width={90} height={60} />
        <h1
          style={{
            marginLeft: '10px',
            fontSize: '32px',
            color: '#333',
            fontWeight: '500',
            wordBreak: 'break-word',
          }}
        >
          StoneWaterAssociate
        </h1>
      </div>

      <h2
        style={{
          fontSize: '70px',
          color: '#555',
          marginBottom: '20px',
          fontWeight: '900',
          wordBreak: 'break-word',
          marginTop: '-40px',
        }}
      >
        We're Working on <br/> Something Exciting
      </h2>

      <p
        style={{
          fontSize: '18px',
          color: '#666',
          maxWidth: '600px',
          lineHeight: '1.5',
          fontWeight: '900',
        }}
      >
        The StoneWaterAssociate web portal is currently under construction.
      </p>
    </div>
  );
};

export default HomePage;
