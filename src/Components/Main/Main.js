import React, { useState } from "react";
import styles from "./Main.module.css";
import Bounce from "react-reveal/Bounce";
const Main = () => {
  const [value, setValue] = useState("");
  const [flag, setFlag] = useState();
  const [format, setFormat] = useState("");
  const [nextPDate, setNextPDate] = useState("");
  const [formatStr, setFormatStr] = useState("");
  const [daysMissed,setDaysMissed] = useState(0);
  const [gif,setGif] = useState("")
  //<iframe src="https://giphy.com/embed/l4hLU9R1Zjypsd6b6" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/iphone-loading-laptop-l4hLU9R1Zjypsd6b6">via GIPHY</a></p>
  const handleDate = (e) => {
    setValue(e.target.value);
  };

  const isPalindrome = (input) => {
    let reversedString = input.split("").reverse().join("");
    if (reversedString === input) return true;
  };


  const nextPalindrome = () => {
    let temp = new Date(value);
    let count = 0;
    temp.setDate(temp.getDate() + 1);
    while (1) {
      count++;
      setDaysMissed(count);
      let dateString = temp.toISOString().substring(0, 10).replaceAll("-", "");
      let year = dateString.substring(0, 4);
      let month = dateString.substring(4, 6);
      let day = dateString.substring(6, 8);
      //YYYYMMDD
      let dateFormat1 = dateString;
      //ddMMyyyy
      let dateFormat2 = day + month + year;
      //MMDDYY
      let dateFormat3 = month + day + year.substring(2, 4);

      //YYMMDD
      let dateFormat4 = year.substring(2, 4) + month + day;

      if (isPalindrome(dateFormat1)) {
        setNextPDate(year + "-" + month + "-" + day);
        setFormatStr("YYYY-MM-DD");
        break;
      } else if (isPalindrome(dateFormat2)) {
        setNextPDate(day + "-" + month + "-" + year);
        setFormatStr("DD-MM-YYYY");
        break;
      } else if (isPalindrome(dateFormat3)) {
        setNextPDate(month + "-" + day + "-" + year.substring(2, 4));
        setFormatStr("MM-DD-YY");
        break;
      } else if (isPalindrome(dateFormat4)) {
        setFormatStr("YY-MM-DD");
        setNextPDate(year.substring(2, 4) + "-" + month + "-" + day);
        break;
      }
      temp.setDate(temp.getDate() + 1);
    }
  };

  const handleClick = e => {
    e.preventDefault();
    setFlag();
    setGif("https://media.giphy.com/media/VseXvvxwowwCc/giphy.gif?cid=ecf05e47ljo1kgyxk7zgg68mhr81oik9zlv67uuum6d2uz4o&rid=giphy.gif&ct=g");
    let timer = setTimeout(()=>{
      setGif("");
      checkDate(e)
    },3000)
  }

  const checkDate = (e) => {
    
  
    e.preventDefault();
  

    let date = value.replaceAll("-", "");

    let year = date.substring(0, 4);
    let month = date.substring(4, 6);
    let day = date.substring(6, 8);
    //YYYYMMDD
    let dateFormat1 = date;
    //ddMMyyyy
    let dateFormat2 = day + month + year;
    //MMDDYY
    let dateFormat3 = month + day + year.substring(2, 4);

    //YYMMDD
    let dateFormat4 = year.substring(2, 4) + month + day;

    if (isPalindrome(dateFormat1)) {
      setFlag(isPalindrome(dateFormat1));
      setFormat(year + "-" + month + "-" + day);
      setFormatStr("YYYY-MM-DD");
      return;
    } else if (isPalindrome(dateFormat2)) {
      setFlag(isPalindrome(dateFormat2));
      setFormat(day + "-" + month + "-" + year);
      setFormatStr("DD-MM-YYYY");
      return;
    } else if (isPalindrome(dateFormat3)) {
      setFlag(isPalindrome(dateFormat3));
      setFormat(month + "-" + day + "-" + year.substring(2, 4));
      setFormatStr("MM-DD-YY");
      return;
    } else if (isPalindrome(dateFormat4)) {
      setFlag(isPalindrome(dateFormat4));
      setFormat(year.substring(2, 4) + "-" + month + "-" + day);
      setFormatStr("YY-MM-DD");
      return;
    } else {
      setFlag(false);
      nextPalindrome();
    }
  };

  return (
    <div id="main" className={styles.container}>
      <div className={styles.formContainer}>
        <Bounce left>
          <form onSubmit={handleClick}>
            <h2>Enter Your Date Of Birth</h2>
            <input type="Date" value={value} onChange={handleDate} required />
            <button
              onClick={handleClick}
              disabled={value === "" ? true : false}
              style={{ opacity: `${value === "" ? "0.5" : "1"}` }}
            >
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
            <div className={styles.result}>
              <h1>Congratulions!!</h1>
              <h2>
                Your BirthDate is a{" "}
                <span className={styles.textColor}>Palindrome</span>
              </h2>
              <h3>in format : {format}</h3>
            </div>
          </Bounce>
        )}
        {
          gif!=="" && <img src={gif} alt="gifLoading" width="200px" height="200px" />
        }
        {flag === false && (
          <Bounce right>
            <div className={styles.result}>
              <h1>Sorry!! </h1>
              <div>
              <h2>
                Your BirthDate is{" "}
                <span className={styles.textColor}>not a Palindrome</span>
              </h2>
              </div>
              
              <h3>Upcoming Palindrome :  <span className={styles.textColorSmall}>{nextPDate}</span></h3>
      <h3>In Format : {formatStr}</h3>
      <h3>You missed it by :  <span className={styles.textColorSmall}>{daysMissed} </span>Days</h3>  
            </div>
          </Bounce>
        )}
      </div>
      
    </div>
  );
};

export default Main;
