import React from "react";
import logo from "../../images/assetmark_logo_1.jpg";
import iconclose from "../../images/card_close_red.png";
import styles from "./widget.module.css";

type TAppProps = {
  list:string;
};

const WidgetComponent: React.FC<TAppProps> = props => {
  return (
    <div className={styles.cardItem}>
      <span className={styles.card_span} onClick={(e)=>console.log(alert(1))}>
        <img className={styles.card_close} src={iconclose} alt="closeicon"></img>
      </span>
      <img className={styles.card_img_top} src={logo} alt="logo"></img>
      <div className={styles.card_body}>
        <div className={styles.card_title}>Card Title - {props.list}</div>
        <p className={styles.card_text}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export default WidgetComponent;
