import { h } from "preact";
import style from "/src/style/sidebar.scss";

export default function App() {
    return (
        <div class={style.sidenav}>
            <a class={style.tier_0} href="#">People</a>
            <a class={style.tier_1} href="/people/mark">Mark</a>
            <a class={style.tier_1} href="/people/john">John</a>
            <a class={style.tier_0} href="#">Locations</a>
            <a class={style.tier_1} href="/locations/los_angeles">Los Angeles</a>
        </div>
    );
}