import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Dynamic Division Director</title>
        <meta property="og:title" content="Dynamic Division Director" />
      </Helmet>
    </div>
  )
}

export default Home
