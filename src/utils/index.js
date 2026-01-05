export const editorConfig = {
  minimap: { enabled: false },
  fontSize: 18,
  wordWrap: "on",
  automaticLayout: "auto",
  lineDecorationsWidth: 0,
  lineNumbers: "on",
  renderLineHighlight: false,
  padding: 16,
  smoothScrolling: true,
  stickyScroll: { enabled: false },
  scrollBeyondLastLine: false,
};

export const copyMarkupToClipboard = (markup) => {
  navigator.clipboard.writeText(markup);
};

export const handleEditorWillMount = (monaco) => {
  monaco.editor.defineTheme("my-custom-theme", {
    base: "vs-dark",
    inherit: true,
    rules: [],
    colors: {
      "editor.background": "#0D1117",
    },
  });
};
