import React from 'react'
import styles from './Footer_logo.module.css'
import {BiLogoFacebook} from 'react-icons/Bi'
import {BiLogoInstagram} from 'react-icons/Bi'
import {BiLogoTwitter} from 'react-icons/Bi'
import {BiLogoSnapchat} from 'react-icons/Bi'
import {BiLogoYoutube} from 'react-icons/Bi'

const Footer_logo = () => {
  return (
   
        <div className={`${styles.container}`}>
    <a href="#"><BiLogoFacebook/></a>
    <a href="#"><BiLogoInstagram/></a>
    <a href="#"><BiLogoTwitter/></a>
    <a href="#"><BiLogoYoutube/></a>
    <a href="#"><BiLogoSnapchat/></a>
    </div>
  )
}

export default Footer_logo