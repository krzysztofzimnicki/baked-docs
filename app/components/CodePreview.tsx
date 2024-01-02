import { useState } from "react"
import { ReactToString } from '../utils/ReactToString'
import { ReactToHTML } from "../utils/ReactToHTML";

interface ICodePreview {
  component: Element;
}

export const CodePreview = ({ component }: ICodePreview) => {

  // isHTMLPreview = true => display HTMl of React Component
  // isHTMLPreview = true => display React Component with Props
  const [isHTMLPreview, setIsHTMLPreview] = useState(false);

  const ReactPreview = ReactToString(component);
  const HTMLPreview = ReactToHTML(component);

  return (

    <div>
      <button onClick={() => setIsHTMLPreview(!isHTMLPreview)}>Toogle Preview</button>
      <div>
        {isHTMLPreview ? (
          <div><code>{HTMLPreview}</code></div>
        ) : (
          <div><code>{ReactPreview}</code></div>)}
      </div>
    </div>

  )

}
