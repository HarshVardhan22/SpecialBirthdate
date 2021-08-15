import styles from './App.module.css';
import Home from './Components/Home/Home';

import Main from './Components/Main/Main';

const App = () => {
  return (
    <div className={styles.container}>
      <section className="home"><Home/></section>
      <section className="main"><Main/></section>
      
    </div>
  );
}

export default App;
