import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useMarkdownStore } from '../../store'

const MarkdownPreview = () => {
  const markdownValue = useMarkdownStore(state => state.markdownValue);

  return (
    <div className="container-markup">
      <div className="markdown-body" style={{ paddingLeft: "30px" }}>
        <Markdown remarkPlugins={remarkGfm}>{markdownValue}</Markdown>
      </div>
    </div>

  );
}

export default MarkdownPreview;