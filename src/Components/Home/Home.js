import React from "react";
import styles from "./Home.module.css";
import Jump from "react-reveal/Jump";
import Zoom from 'react-reveal/Zoom';
import {Link} from 'react-scroll'
import cake from "../../Assets/cake.png"
const Home = () => {
  return (
    <div className={styles.parent}>
     
      <div className={styles.container}>
        <h1>
          Is your <span className={styles.textColor}>Birthdate</span> a{" "}
        </h1>
        <Jump>
          <h1 className={styles.textColor}>Palindrome?</h1>
        </Jump>
        <button><a href ="#main">Check Out</a></button>
        <h4>
          A palindrome is a word/number which <br></br>reads the same backward
          as forward
        </h4>
      </div>
      <div className={styles.cake}>
      <Zoom right>
      <img src={cake}  alt="cake" />
      </Zoom>
       
      </div>
    </div>
  );
};

export default Home;
