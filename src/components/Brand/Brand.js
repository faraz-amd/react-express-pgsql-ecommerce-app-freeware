import React from 'react';
import { navigate } from 'gatsby';

import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      {/* <h4>Mercury Sports Gear</h4> */}
      
         <h1 style={{ fontFamily: 'sans-serif', fontSize: '1.8rem', fontWeight: 700 }}>
    Mercury Sports Gear
  </h1>
    </div>
  );
};

export default Brand;
