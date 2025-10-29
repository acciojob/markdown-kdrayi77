import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

function MarkdownEditor() {
  const [markdownText, setMarkdownText] = useState("");
  const [previewText, setPreviewText] = useState("");
  const [loading, setLoading] = useState(false);

  // Update preview in real-time
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setPreviewText(markdownText);
      setLoading(false);
    }, 200); // slight delay to simulate processing
    return () => clearTimeout(timeout);
  }, [markdownText]);

  return (
    <div className="editor-container">
      <div className="input-section">
        <h2>Markdown Input</h2>
        <textarea
          className="textarea"
          placeholder="Write your Markdown here..."
          value={markdownText}
          onChange={(e) => setMarkdownText(e.target.value)}
        ></textarea>
      </div>

      <div className="preview-section">
        <h2>Preview</h2>
        {loading ? (
          <div className="loading">Rendering Preview...</div>
        ) : (
          <div className="preview">
            <ReactMarkdown>{previewText}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}

export default MarkdownEditor;
