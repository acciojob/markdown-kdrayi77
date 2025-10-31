import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import '../styles/App.css'

const App = () => {
    const [markdownContent, setMarkdownContent] = useState("");
    const [loading, setLoading] = useState(true);

    const handleChange = (e) => {
        setMarkdownContent(e.target.value);
    }

    const changeLoadingVar = () => {
        setLoading(false);
    }

    useEffect(() => {
        setTimeout(changeLoadingVar, 3000);
    }, []);

    return (
        <>
            {
                loading ? (
                    <div>
                        <h1>Loading...</h1>
                    </div >
                ) : (
                    <div className="app">
                        <textarea onChange={handleChange} />
                        <ReactMarkdown className="preview" children={markdownContent} />
                    </div>
                )}
        </>
    )
};

export default App;
