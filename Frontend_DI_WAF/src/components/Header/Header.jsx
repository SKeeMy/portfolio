import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import '../../utils/i18next'
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import i18n from '../../utils/i18next';
import styles from './Header.module.css'




function Header() {
    const [show, setShow] = useState(false);
    const changeLanguage = (ln) => {
        return () => {
            i18n.changeLanguage(ln);
        }
    }

    return (
        <header className={styles["header"]}>
            <div className={styles["header_wrapper"]}>
                <div className={styles["header_items"]}>
                    <div className={styles["header_title"]}>
                        <h1>
                            DI_WAF
                        </h1>
                    </div>
                    <div className={styles["header_lang"]}>
                        <span onClick={() => setShow(!show)}><FontAwesomeIcon icon={faGlobe} /></span>
                        <CSSTransition in={show} timeout={300} classNames="alert" unmountOnExit>
                            <div className={styles["lang_menu"]}>
                                <ul>
                                    <li>
                                        <button onClick={changeLanguage("en")} onClickCapture={() => setShow(!show)}>English</button>
                                    </li>
                                    <li>
                                        <button onClick={changeLanguage("ru")} onClickCapture={() => setShow(!show)}>Русский</button>
                                    </li>
                                </ul>
                            </div>
                        </CSSTransition>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;



