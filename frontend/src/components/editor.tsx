import { h } from "preact";
import { useState } from "preact/hooks";
import MDEditor from "@uiw/react-md-editor";

export default function App() {
    const [value, setValue] = useState("**Hello world!!!**");
    return (
        <div className="container">
            <MDEditor
                value={value}
                onChange={setValue}
                height={600}
            />
            {/* <MDEditor.Markdown source={value} /> */}
        </div>
    );
}