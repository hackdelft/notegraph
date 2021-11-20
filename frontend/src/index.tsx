/**
 * Include the debug code if it's a development build.
 * This has to be the first import, therefore the non-standard ordering.
 */
if (process.env.NODE_ENV === "development") {
    import("preact/debug");
}

import { h, render } from "preact";

import "./global.scss";

/**
 * Start the application.
 */
const start = (): void => {
    render(<h1>Hello Notegraph!</h1>, document.body);
};

/**
 * Let's start!
 */
start();
