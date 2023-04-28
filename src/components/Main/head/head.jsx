import React, { useRef, useEffect } from 'react';

import LOGO from '../../../img/other/MAIN_PIC.jpg'
// import LOGO from '../../../img/other/LOGO_SMILE.mp4'
import styles from './head.module.scss'


const Head = () => {
  return (
    <section className={styles.main}>
      <div className={styles.main_services}>
      {/* <video className={styles.main_logo_img} src={LOGO} autoPlay loop muted />   */}

      <img className={styles.main_logo_img} src={LOGO}/>
      </div>
    </section>
  );
};

export default Head;