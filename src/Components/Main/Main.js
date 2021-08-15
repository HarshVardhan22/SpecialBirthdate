import React, { useState } from "react";
import styles from "./Main.module.css";
import Bounce from "react-reveal/Bounce";
const Main = () => {
  const [value, setValue] = useState("");
  const [flag, setFlag] = useState();
  const [format, setFormat] = useState("");
  const handleDate = (e) => {
    setValue(e.target.value);
  };

  const isPalindrome = (input) => {
    let reversedString = input.split("").reverse().join("");
    if (reversedString === input) return true;
  };

  const checkDate = (e) => {
    e.preventDefault();
    let date = value.replaceAll("-", "");

    let year = date.substring(0, 4);
    let month = date.substring(4, 6);
    let day = date.substring(6, 8);
    let dateFormat1 = date;
    let dateFormat2 = day + month + year;
    let dateFormat3 = month + day + year.substring(0, 2);
    let dateFormat4 = month.substring(0, 1) + day + year;

    if (isPalindrome(dateFormat1)) {
      setFlag(isPalindrome(dateFormat1));
      setFormat(year + "-" + month + "-" + day);
      return;
    } else if (isPalindrome(dateFormat2)) {
      setFlag(isPalindrome(dateFormat2));
      setFormat(day + "-" + month + "-" + year);
      return;
    } else if (isPalindrome(dateFormat3)) {
      setFlag(isPalindrome(dateFormat2));
      setFormat(month + "-" + day + "-" + year.substring(0, 2));
      return;
    } else if (isPalindrome(dateFormat4)) {
      setFlag(isPalindrome(dateFormat2));
      setFormat(month.substring(0, 1) + "-" + day + "-" + year);
      return;
    } else {
      setFlag(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <Bounce left>
          <form onSubmit={checkDate}>
            <h2>Enter Your Date Of Birth</h2>
            <input type="Date" value={value} onChange={handleDate} required />
            <button onClick={checkDate} disabled={value === "" ? true : false}>
              Check
            </button>
            <p>20-02-2002 is an example of</p>
            <p>Palindromic Birthdate</p>
          </form>
        </Bounce>
      </div>
      <div className={styles.rightContainer}>
        {flag === true && (
          <Bounce right>
            <div className={styles.success}>
              <h1>Congratulions!!</h1>
              <h2>
                Your BirthDate is a{" "}
                <span className={styles.textColor}>Palindrome</span>
              </h2>
              <h3>in format : {format}</h3>
            </div>
          </Bounce>
        )}
        {flag === false && (
          <Bounce right>
            <div className={styles.fail}>
              <h1>Sorry!! </h1>
              <h2>
                Your BirthDate is{" "}
                <span className={styles.textColor}>not a Palindrome</span>
              </h2>
            </div>
          </Bounce>
        )}
      </div>
    </div>
  );
};

export default Main;
