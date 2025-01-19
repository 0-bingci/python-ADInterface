import React from 'react'
import Link from "next/link";
import styles from "./header.module.css";
const Header=function Header() {
    return (
    <div className={styles.big}>
        <div className={styles.title} >metabubble</div>
        <Link className={styles.Link} href='/'>首页</Link>
        <Link className={styles.Link} href='/main'>人员管理</Link>
        <Link className={styles.Link} href='/login'>退出登录</Link>
    </div>
    );
  }

export default Header