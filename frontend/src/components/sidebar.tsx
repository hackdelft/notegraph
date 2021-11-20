import { h } from "preact";
import style from "/src/style/sidebar.scss";

export default function App() {
    return (
        <div class={style.sidenav}>
            <a href="#">a</a>
            <a href="#">b</a>
            <a href="#">c</a>
            <a href="#">d</a>
        </div>
    );
}