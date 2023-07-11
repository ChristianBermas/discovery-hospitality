import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <h1>
        Discovery
        <span>Hospitality</span>
      </h1>
      <nav>
        <a>Prime a Hotel & Suites</a>
        <a>Resorts</a>
        <a>KIP & KIN Hostels</a>
        <a>Deals</a>
        <a>Discoveries</a>
      </nav>
    </div>
  );
};

export default NavBar;
