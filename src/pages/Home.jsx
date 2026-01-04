import { Editor } from "@monaco-editor/react";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Button from '../components/Button';
import { FaCopy } from "react-icons/fa6";
import { copyMarkupToClipboard, editorConfig, handleEditorWillMount } from './utils';
import { remark } from "remark";
import html from "remark-html";


const Home = () => {

  const [markdownValue, setMarkdownValue] = useState("");
  const [activeTab, setActiveTab] = useState("preview");
  const [htmlValue, setHtmlValue] = useState("");

  useEffect(() => {
    const convertToHtml = async () => {
      const result = await remark()
        .use(html)
        .process(markdownValue);

      setHtmlValue(result.toString());
    };

    convertToHtml();
  }, [markdownValue]);

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
          <Editor
            language="markdown"
            theme="my-custom-theme"
            options={editorConfig}
            value={markdownValue}
            onChange={e => setMarkdownValue(e)}
            beforeMount={handleEditorWillMount}
          />
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
              onClick={() => copyMarkupToClipboard(htmlValue)}
              className="container-header-button">
              <FaCopy style={{ fontSize: "1.2rem" }} />
            </Button>
          </div>
          <div className="container-markup">
            {
              activeTab === "preview" ?
                <div className="markdown-body" style={{ paddingLeft: "30px" }}>
                  <Markdown remarkPlugins={remarkGfm}>{markdownValue}</Markdown>
                </div>
                :
                <Editor
                  language="html"
                  theme="my-custom-theme"
                  options={editorConfig}
                  value={htmlValue}
                  beforeMount={handleEditorWillMount} />
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;