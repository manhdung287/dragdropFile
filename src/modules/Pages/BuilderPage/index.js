import React, { useEffect, useState } from 'react';
import grapesjs from 'grapesjs';
import styles from './index.module.scss';
import 'grapesjs/dist/css/grapes.min.css';
import grapesJsPreset from 'grapesjs-preset-webpage';

function BuilderPage() {
    return (
        <div className={styles.wrapper}>
           
            <Editor />
        </div>
    );
}

function Editor() {
    const [editor, setEditor] = useState(null);
    useEffect(() => {
        const editor = grapesjs.init({
            container: '#editor',
            plugins: [grapesJsPreset],
            pluginsOpts: {
                grapesJsPreset: {}
            },

        });
        setEditor(editor);
    }, [])
    console.log(editor);
    return (
        <div className={styles.wrapperEditor}>
            <div id='editor'>
            </div>
        </div>
    );
}
export default BuilderPage;