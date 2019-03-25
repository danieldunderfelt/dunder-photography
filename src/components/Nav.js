import React from 'react'
import styles from '../style/Header.module.scss'
import { Link } from 'gatsby'
import {
  IoMdMail,
  IoMdBook,
  IoMdArrowRoundBack,
  IoMdApps,
} from 'react-icons/io'

const Nav = ({ close }) => {
  return (
    <div className={styles.NavContent}>
      <Link to={'/'} onClick={close}>
        <IoMdArrowRoundBack color="#dddddd" /> Home
      </Link>
      <Link to={'/tags'} onClick={close}>
        <IoMdApps color="#dddddd" /> Subjects
      </Link>
      <a href="https://danieldunderfelt.com">
        <IoMdBook color="#dddddd" /> Blog
      </a>
      <a href="mailto:daniel@developsuperpowers.com">
        <IoMdMail color="#dddddd" /> Email me
      </a>
      <p>
        Hello, I'm Daniel Dunderfelt and these are some of my photos. I
        currently use a Canon EOS R, but some older photos are taken with the
        Canon EOS 80D.
      </p>
      <p>
        I'm a hobby photographer and web development is my day job, so if you
        wanted to meet developer-Daniel click the{' '}
        <a href="https://danieldunderfelt.com">link to the blog</a>. But I do
        hope you have a look at the photos before you go!
      </p>
      <p>
        <a
          rel="license"
          href="http://creativecommons.org/licenses/by-nc/4.0/"
          style={{ padding: 0, background: 'none' }}>
          <img
            alt="Creative Commons License"
            style={{ borderWidth: 0 }}
            src="https://i.creativecommons.org/l/by-nc/4.0/80x15.png"
          />
        </a>
      </p>
      <p>
        All images as found on this website are free for non-commercial use and
        sharing with attribution (link to this page).{' '}
        <a href="mailto:daniel@developsuperpowers.com">Contact me</a> for
        commercial licenses and higher resolution files.
      </p>
    </div>
  )
}

export default Nav
