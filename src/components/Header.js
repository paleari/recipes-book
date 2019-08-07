import React from 'react';
import styles from './styles/header.module.scss';
import texts from './texts';

const Header = () => (
    <header className={styles.header}>
        <div className={styles.header__title}>{texts.TITLE_HEADER}</div>
    </header>
)

export default Header;