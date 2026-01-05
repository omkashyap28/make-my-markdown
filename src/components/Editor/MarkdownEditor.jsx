import { useRef } from "react";
import { editorConfig, handleEditorWillMount } from '../../utils'
import { Editor } from "@monaco-editor/react";
import { useMarkdownStore } from "../../store";


const MarkdownEditor = () => {

  const markdownValue = useMarkdownStore(state => state.markdownValue);
  const setMarkdownValue = useMarkdownStore(state => state.setMarkdownValue);
  const markdownEditorRef = useRef(null);

  const handleOnMount = (editor) => {
    markdownEditorRef.current = editor;
  }
  

  return (
    <>
      <Editor
        language="markdown"
        theme="my-custom-theme"
        options={editorConfig}
        value={markdownValue}
        onChange={e => setMarkdownValue(e)}
        beforeMount={handleEditorWillMount}
        onMount={handleOnMount}
      />
    </>
  )
}

export default MarkdownEditor;


