import dynamic from "next/dynamic";
import Head from 'next/head';
import Image from 'next/image';
import React, { useRef } from 'react';
import styles from '../styles/Home.module.css';




const Button = dynamic(() => import("../components/Button"), {
  ssr: false,
});
// eslint-disable-next-line react/display-name
const ComponentToPrint = React.forwardRef((props, ref) => (
  <div ref={ref}><main className={styles.main}> 
  <div className={styles.thumbnail}> 
    <Image src="/certificate.svg" alt="Certificate" name="background"
      layout='intrinsic'
      width={2366}
      height={2954}
    />
    <div className= {styles.centered}>
      {props.first_name} {props.last_name}
    </div>
  </div>
</main></div>
));



function Home({first_name, last_name}) {
  const componentRef = useRef();  
  return (
    <div>
      <Head>
        <title>Your certificate</title>
        <meta name="description" content="Ponderium Puzzle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>  
      <React.Fragment>
        <ComponentToPrint ref={componentRef}  first_name={first_name} last_name={last_name}/>
        <Button componentRef={componentRef}/>
      </React.Fragment>
    </div>
  ) 
}

Home.getInitialProps = async ({ query }) => {
  let {first_name, last_name} = query
  first_name = capitalizeFirstLetter(first_name);
  last_name = capitalizeFirstLetter(last_name);

  return {first_name, last_name}
}

function capitalizeFirstLetter(string) {
  try {
  var a = string.charAt(0).toUpperCase() + string.slice(1);
      } 
  catch{
  var a =  string
  }
  return a
}

export default Home
