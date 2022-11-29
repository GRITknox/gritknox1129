import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}
      //centered
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
    <header>
      <p> 

      <img src={"gritbplanet.png"} 
      alt="big dumb dummy" 
      width ="250" 
      height ="250"
      />
        
      </p>
      <p>
       Still trying.  Still failing.  Still learning.
      </p>
    </header>
   </div>
  
  )
}
