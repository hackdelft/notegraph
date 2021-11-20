import { h } from "preact";
import { useState } from "preact/hooks";
import MDEditor from "@uiw/react-md-editor";

export default function App() {
    const [value, setValue] = useState(window.location.pathname);
    return (
        <div className="container">
            <MDEditor
                value={value}
                onChange={setValue}
                height={600}
            />
            <p></p>
        </div>
    );
}