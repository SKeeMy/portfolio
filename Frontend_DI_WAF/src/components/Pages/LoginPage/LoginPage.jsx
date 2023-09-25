import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useTranslation } from 'react-i18next';
import { createRef } from 'react';
import styles from './LoginPage.module.css'
import * as netutils from "../../../utils/net";
import { API_AUTH } from '../../../constants/api';

function LoginPage() {

    let textInputPass = createRef();

    const { t } = useTranslation();
    const [show, setShow] = useState(false);
    useEffect(() => {
        setTimeout(function () {
            setShow(true)
        }, 500);
    }, [!show]
    );
    const [auth, setAuth] = useState(false);
    useEffect(() => {
        setTimeout(function () {
            setAuth(true)
        }, 1500);
    }, [!auth]
    );

    const [passwordError, setPasswordError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        let res = await netutils.PUT(API_AUTH, { password: textInputPass.current.value })
        if (res === false) {
            setPasswordError(t("Invalid credentials"))
        } else {
            let token = res.sessionToken;
            localStorage.setItem('sessionToken', token)
            navigate("/monitoring")
        }
    }

    return (
        <div onLoad={() => setShow(show)} className={styles["login_wrapper"]}>
            <CSSTransition in={show} timeout={300} classNames='alert' unmountOnExit>
                <div className={styles["log_window"]}>
                    <div className={styles['auth_wrapper']}>
                        <div className={styles['auth_items']}>
                            <div className={styles['auth_title']}>
                                <h1 onLoad={() => setAuth(auth)}>{t('Authentication')}</h1>
                                <h2>DI_WAF</h2>
                            </div>
                            <CSSTransition in={auth} timeout={800} classNames='alert' unmountOnExit>
                                <div className={styles['auth_inputs']}>
                                    <form onSubmit={handleSubmit}>
                                        <div className={styles['auth_inputs_items']}>
                                            <div className={styles['form_group']}>
                                                <input name='login' type='text' className={styles['auth_input']} placeholder=' ' />
                                                <label htmlFor='' className={styles['auth_label']}>{t('Login')}</label>
                                            </div>
                                            <div className={styles['form_group']}>
                                                <input name='password' type='password' className={styles['auth_input']} placeholder=' ' ref={textInputPass} />
                                                <label htmlFor='' className={styles['auth_label']}>{t('Password')} </label>
                                                {passwordError && <div className={styles['error_auth']}>{passwordError}</div>}
                                            </div>
                                            <button className={styles['submit_btn']}>{t('Submit')}</button>
                                        </div>
                                    </form>
                                </div>
                            </CSSTransition>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default LoginPage