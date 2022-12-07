import styles from "../../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
            <div className={styles.headerTitle}>Seja Bem-Vindo(a)</div>
            <div className={styles.headerSubtitle}>O que deseja para hoje?</div>
          </div>
         
          <div className={styles.headerTopRight}>

          </div>

          <div className={styles.headerBottom}>
            Busca          
          </div>
        </div>
       
      </header>
    </div>
  );
};

export default Home;
