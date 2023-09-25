import { useState, useEffect } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useTranslation } from 'react-i18next';
import { CSSTransition } from 'react-transition-group';
import { Link } from "react-router-dom";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Confirm from './Prompt';
import styles from "./Table.module.css"

const ConfigEntries = ({ data, apiEndpoint }) => {
    const [copied, setCopied] = useState(false);
    const [show, setShow] = useState(false);
    useEffect(() => {
        setTimeout(function () {
            setShow(false)
        }, 2000);
    }, [!show]
    )

    const [prompt, setPrompt] = useState({ "active": false })
    const handleDelete = (id) => {
        setPrompt({
            "message": "Are you sure?",
            "apiEndpoint": apiEndpoint + `/${id}`,
            "active": true
        })
    }

    const { t } = useTranslation();
    return (
        data.map(({ name, id }) => (
            <tr style={{ border: 0 }}>
                <td className='name_tableColumn'>
                    <Link to={id} key={id} className='name_id_item' >
                        <div data-testid={"test-" + id + "-name"} key={name}>{name}</div>
                    </Link>
                </td>
                <td>
                    <CopyToClipboard text={id} key={id} onCopy={() => setCopied(true)}>
                        <div id='copy_text' data-testid={"test-" + id + "-id"} type='text' key={id} onClick={() => setShow(!show)}>
                            {id}
                        </div>
                    </CopyToClipboard>
                    <CSSTransition in={show} timeout={300} classNames="alert" unmountOnExit>
                        <div className="alert_show" >{t('Copied') + '!'}</div>
                    </CSSTransition>
                </td>
                <td>
                    <FontAwesomeIcon className={styles["icon"]} icon={faTrash} onClick={() => handleDelete(id)} />
                </td>
                {prompt.active && <Confirm message={prompt.message} apiEndpoint={prompt.apiEndpoint} setPrompt={setPrompt} />}
            </tr>
        ))
    );
}

export default ConfigEntries;