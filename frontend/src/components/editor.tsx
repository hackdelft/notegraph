import { h } from "preact";
import { useState } from "preact/hooks";
import MDEditor from "@uiw/react-md-editor";
import text from './examplePage.js';

export default function App() {
    const [value, setValue] = useState(text);
    return (
        <div className="container">
            <MDEditor
                value={value}
                onChange={setValue}
                fullscreen
            />
            {/* <MDEditor.Markdown source={value} /> */}
        </div>
    );
}
