import { FaCopy, FaBars } from "react-icons/fa6";
import { gitActions } from "../../constants";
import { Button } from "../components";
import { useEffect, useState } from 'react';
import { BsLayoutSidebar, BsLayoutSidebarInset } from "react-icons/bs";

const Editor = () => {

  const [activeTab, setActiveTab] = useState("editor-tab");
  const [markdownContent, setMarkdownContent] = useState("");
  const [editorContent, setEditorContent] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.title = "Make My Markdown | Editor"
  }, [])


  function copyFunction() {
    console.log(window.navigator.clipboard.writeText(markdownContent))
  }

  return (
    <div className="w-full h-screen pt-15 p-4 relative color-theame overflow-hidden montserrat">
      <Button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden bg-transparent p-2 rounded-md w-auto text-xl"
        aria-label="toggle editor option"
        aria-expanded={sidebarOpen}
      >
        {sidebarOpen ? <BsLayoutSidebarInset /> : <BsLayoutSidebar />}
      </Button>
      <div className="flex gap-3 h-full overflow-hidden">


        <aside className={`fixed z-99 shadow-2xl md:absolute ${-sidebarOpen ? "left-4" : "-left-full"} md:left-0 md:relative w-78 h-full editor-theame py-4 px-2 rounded-xl flex flex-col overflow-hidden`}>
          <h1 className="text-xl font-bold mb-2">
            Markdown Options
          </h1>

          <div className="flex-1 w-full overflow-y-auto scroll-style">
            {gitActions.map(({ title, method }) => (
              <Button
                key={title}
                onClick={() => { method(); setSidebarOpen(false) }}
                className="bg-cyan-600 hover:bg-cyan-700 w-full h-auto py-1 my-1"
              >
                {title}
              </Button>
            ))}
          </div>

        </aside>

        <div className="w-full h-full editor-theame rounded-xl overflow-hidden">
          <div className="flex items-center w-full sticky top-0 bg-editor-theame px-4 justify-between border-b border-b-gray-600">
            <div className="flex items-center">
              <Button
                onClick={() => setActiveTab("editor-tab")}
                className={`${activeTab == "editor-tab" ? 'bg-gray-600' : 'bg-transparent'} py-2 px-4 rounded-none`}
                id="editor-tab"
              >
                Editor
              </Button>

              <Button
                onClick={() => setActiveTab("markdown-tab")}
                className={`${activeTab == "markdown-tab" ? 'bg-gray-600' : 'bg-transparent'} py-2 px-4 rounded-none`}
                id="markdown-tab"
              >
                Markdown
              </Button>
            </div>
            <Button
              onClick={copyFunction}
              className="px-2 py-1.5 bg-gray-500"
              title="Copy Markdown"
            >
              <FaCopy />
            </Button>
          </div>
          {
            activeTab === "editor-tab"
              ?
              <textarea
                value={editorContent}
                onChange={e => setEditorContent(e.target.value)}
                autoFocus
                className="w-full h-full p-4 editor-theame resize-none rounded-xl outline-none tracking-wider"></textarea>
              :
              <textarea
                value={markdownContent}
                onChange={e => setMarkdownContent(e.target.value)}
                autoFocus
                className="w-full h-full p-4 editor-theame resize-none rounded-xl outline-none ahm-monospace"></textarea>
          }
        </div>

      </div>
    </div>

  )
}

export default Editor;

