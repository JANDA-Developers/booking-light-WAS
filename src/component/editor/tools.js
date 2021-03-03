import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import List from "@editorjs/list";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Image from "@editorjs/image";
import Raw from "@editorjs/raw";
import Header from "@editorjs/header";
// import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
// import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import SimpleImage from "@editorjs/simple-image";
// import Paragraph from 'editorjs-paragraph-with-alignment';

const uploadUrl = 'https://kbsjl5pnsi.execute-api.ap-northeast-2.amazonaws.com/dev/upload';

const fileAction = uploadUrl;
const fetchAction = ""

export const EDITOR_JS_TOOLS = {
  embed: Embed,
  table: Table,
  marker: Marker,
  list: List,
  // warning: Warning,
  linkTool: LinkTool,
  image: {
    class: Image,
    config: {
        endpoints: {
            byFile: fileAction, // Your backend file uploader endpoint
            byUrl: fetchAction, // Your endpoint that provides uploading by Url
        }
    }
  },
  // paragraph: {
  //   class: Paragraph,
  //   inlineToolbar: true,
  // },
  raw: Raw,
  header: Header,
  // quote: Quote,
  // checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
};

export default EDITOR_JS_TOOLS;
