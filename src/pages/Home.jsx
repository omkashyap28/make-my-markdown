import { useState } from "react";
import Button from '../components/Button';
import { FaCopy } from "react-icons/fa6";
import { copyMarkupToClipboard } from '../utils';
import { HtmlEditor, MarkdownEditor, MarkdownPreview } from '../components'
import { useMarkdownStore } from "../store";


const Home = () => {
  const markdownValue = useMarkdownStore(state => state.markdownValue);
  const [activeTab, setActiveTab] = useState("preview");

  return (
    <section className="container montserrat">
      <div className="container-flex">
        <div className="container-editor">
          <div className="container-header">
            <Button className="container-header-button">
              MARKDOWN
            </Button>
            <Button
              onClick={() => copyMarkupToClipboard(markdownValue)}
              className="container-header-button">
              <FaCopy style={{ fontSize: "1.2rem" }} />
            </Button>
          </div>
          <MarkdownEditor />
        </div>
        <div className="markup-container">
          <div className="container-header">
            <div className="">
              <Button
                onClick={() => setActiveTab("preview")}
                className="container-header-button">
                PREVIEW
              </Button>
              <Button
                onClick={() => setActiveTab("html")}
                className="container-header-button">
                HTML
              </Button>
            </div>
            <Button
              // onClick={() => copyMarkupToClipboard(htmlValue)}
              className="container-header-button">
              <FaCopy style={{ fontSize: "1.2rem" }} />
            </Button>
          </div>
          {activeTab === "preview" ? <MarkdownPreview /> : <HtmlEditor />}
        </div>
      </div>
    </section>
  );
}

export default Home;