import React from 'react';
import { exportComponentAsPNG } from 'react-component-export-image';
import styles from '../styles/Button.module.css';
 

function Button({componentRef}) { 
    return (<>
        <div className={styles.buttonContainer}>  <button className={styles.button}  onClick={() => exportComponentAsPNG(componentRef)}>
            Download
        </button></div>
    </>);
} 

export default Button
