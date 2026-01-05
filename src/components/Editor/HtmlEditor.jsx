import { useRef, useEffect } from "react";
import { editorConfig, handleEditorWillMount } from '../../utils'
import { Editor } from "@monaco-editor/react";
import { remark } from "remark";
import html from "remark-html";
import { useMarkdownStore } from "../../store";



const HtmlEditor = () => {
  const markdownValue = useMarkdownStore(state => state.markdownValue);
  const htmlValue = useMarkdownStore(state => state.htmlValue);
  const setHtmlValue = useMarkdownStore(state => state.setHtmlValue);
  const hmtlEditorRef = useRef(null);

  useEffect(() => {
    const convertToHtml = async () => {
      const result = await remark()
        .use(html)
        .process(markdownValue);

      setHtmlValue(result.toString());
    };

    convertToHtml();
  }, [markdownValue, setHtmlValue]);


  const handleOnMount = (editor) => {
    hmtlEditorRef.current = editor;
  }

  return (
    <>
      <div className="container-markup">
        <Editor
          language="html"
          theme="my-custom-theme"
          options={editorConfig}
          value={htmlValue}
          beforeMount={handleEditorWillMount}
          onMount={handleOnMount}
        />
      </div>
    </>
  );
}

export default HtmlEditor;