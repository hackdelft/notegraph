import { Fragment, h } from "preact";
import Editor from "/src/components/editor";
import Sidebar from "/src/components/sidebar";

import style from "/src/style/sidebar.scss";

export default function App() {
    return (<Fragment>
        <Sidebar />
        <div class={style.main}>
            <Editor />
        </div>
    </Fragment>);
}
