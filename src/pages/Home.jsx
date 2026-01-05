import { useEffect, useState } from "react";
import Button from '../components/Button';
import { copyMarkupToClipboard, updateCopyStatus } from '../utils';
import { HtmlEditor, MarkdownEditor, MarkdownPreview } from '../components'
import { useMarkdownStore } from "../store";
import { LuClipboard, LuClipboardCheck } from "react-icons/lu";

const Home = () => {
  const markdownValue = useMarkdownStore(state => state.markdownValue);
  const htmlValue = useMarkdownStore(state => state.htmlValue);
  const [activeTab, setActiveTab] = useState("preview");

  const [markdownCopyStatus, setMarkdownCopyStatus] = useState(false);
  const [htmlCopyStatus, setHtmlCopyStatus] = useState(false);

  useEffect(() => {
    if (markdownCopyStatus) {
      updateCopyStatus(setMarkdownCopyStatus)
    }
    if (htmlCopyStatus) {
      updateCopyStatus(setHtmlCopyStatus)
    }
  }, [markdownCopyStatus, htmlCopyStatus])

  return (
    <section className="container montserrat">
      <div className="container-flex">
        <div className="container-editor">
          <div className="container-header">
            <Button
              title="Markdown Tab"
              className="container-header-button active">
              MARKDOWN
            </Button>
            <Button
              title="Copy Markdown"
              onClick={() => {
                copyMarkupToClipboard(markdownValue)
                setMarkdownCopyStatus(true)
              }}
              className="container-header-button copy">
              {
                markdownCopyStatus ?
                  <LuClipboardCheck className="copy-btn" />
                  :
                  <LuClipboard className="copy-btn" />
              }

            </Button>
          </div>
          <MarkdownEditor />
        </div>
        <div className="markup-container">
          <div className="container-header">
            <div className="">
              <Button
                title="Preview Tab"
                onClick={() => setActiveTab("preview")}
                className={`container-header-button ${activeTab === "preview" ? "active" : ""}`}>
                PREVIEW
              </Button>
              <Button
                title="HTML Tab"
                onClick={() => setActiveTab("html")}
                className={`container-header-button ${activeTab !== "preview" ? "active" : ""}`}>
                HTML
              </Button>
            </div>
            <Button
              title="Copy HTML"
              onClick={() => {
                copyMarkupToClipboard(htmlValue)
                setHtmlCopyStatus(true)
              }}
              className="container-header-button copy">
              {htmlCopyStatus ?
                <LuClipboardCheck className="copy-btn" />
                :
                <LuClipboard className="copy-btn" />
              }
            </Button>
          </div>
          {activeTab === "preview" ? <MarkdownPreview /> : <HtmlEditor />}
        </div>
      </div>
    </section>
  );
}

export default Home;