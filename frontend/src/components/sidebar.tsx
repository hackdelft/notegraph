import { h } from "preact";
import style from "/src/style/sidebar.scss";

export default function App() {
    return (
        <div class={style.sidenav}>
            <a class={style.tier_0} href="#">People</a>
            <a class={style.tier_1} href="#">Mark</a>
            <a class={style.tier_2} href="#">John</a>
            <a class={style.tier_0} href="#">Locations</a>
            <a class={style.tier_1} href="#">Los Angeles</a>
        </div>
    );
}