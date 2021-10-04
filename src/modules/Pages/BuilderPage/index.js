import React, { useEffect, useState } from 'react';
import grapesjs from 'grapesjs';
import styles from './index.module.scss';
import 'grapesjs/dist/css/grapes.min.css';
import grapesJsPreset from 'grapesjs-preset-webpage';

function BuilderPage(props) {
    const [editor,setEditor] = useState(null);
    useEffect(()=>{
        const editor = grapesjs.init({
            container :'#editor',
            plugins:[grapesJsPreset],
            pluginsOpts:{
                grapesJsPreset:{}
            }
        });
        setEditor(editor);
    },[])
    return (
        <div className={styles.wrapper}>
            <div id='editor'>

            </div>
        </div>
    );
}

export default BuilderPage;