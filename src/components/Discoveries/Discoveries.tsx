import styles from './Discoveries.module.css';

const Discoveries = () => {
  return (
    <div className={styles.container}>
      <div className={styles.divHeader}>
        <h1>THE COLLECTION</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui maxime
          quia voluptatem unde repellat nobis, sapiente at neque, aspernatur
          voluptate nihil, minima quidem tempore aliquid accusamus nemo
          consequuntur nulla adipisci!
        </p>
      </div>
      <div className={styles.divSub}>
        <div className={styles.divPrimea}>
          <h1 style={{ color: 'black' }}>Primea</h1>
          <span>Hotels & Suites</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            consectetur voluptatem ratione, laboriosam, at hic magnam ut ullam
            quam, veritatis maiores saepe molestiae placeat delectus.
          </p>
          <span
            style={{
              border: '1px solid maroon',
              color: 'maroon',
              padding: 3,
            }}
          >
            Discover
          </span>
        </div>
        <div className={styles.divDiscovery}>
          <h1 style={{ color: 'black' }}>Discovery</h1>
          <span>Resorts</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            consectetur voluptatem ratione, laboriosam, at hic magnam ut ullam
            quam, veritatis maiores saepe molestiae placeat delectus.
          </p>
          <span
            style={{
              border: '1px solid maroon',
              color: 'maroon',
              padding: 3,
            }}
          >
            Discover
          </span>
        </div>
        <div className={styles.divKipAndKin}>
          <h1 style={{ color: 'black' }}>KIP & KIN</h1>
          <span>Hotels</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            consectetur voluptatem ratione, laboriosam, at hic magnam ut ullam
            quam, veritatis maiores saepe molestiae placeat delectus.
          </p>
          <span
            style={{
              border: '1px solid maroon',
              color: 'maroon',
              padding: 3,
            }}
          >
            Discover
          </span>
        </div>
      </div>
    </div>
  );
};

export default Discoveries;
