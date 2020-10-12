import React from "react";
import "./styles.css";

export function initNetlifyIdentity() {
  console.log("initCalled");
  const script = document.createElement("script");

  script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
  script.async = true;

  document.body.appendChild(script);
}
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2
        onClick={() => {
          console.log("clicked");
        }}
      >
        Login
      </h2>
    </div>
  );
}
