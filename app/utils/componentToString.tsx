import { ReactElement } from "react";
import { renderToString } from 'react-dom/server';

function simpleFormatCode(code: string): string {
  let indentLevel = 0;
  const indentSize = 2; // Change this to control the number of spaces per indent
  let formattedCode = '';
  let isInTag = false;

  for (let i = 0; i < code.length; i++) {
      const char = code[i];

      if (char === '<' && code[i + 1] !== '/') {
          // Opening tag
          formattedCode += '\n' + ' '.repeat(indentLevel * indentSize) + char;
          indentLevel++;
          isInTag = true;
      } else if (char === '>' && isInTag) {
          // End of a tag
          formattedCode += char;
          isInTag = false;
      } else if (char === '<' && code[i + 1] === '/') {
          // Closing tag
          indentLevel--;
          formattedCode += '\n' + ' '.repeat(indentLevel * indentSize) + char;
      } else {
          formattedCode += char;
      }
  }

  return formattedCode.trim();
}


export default function ComponentToString(component: any) {

  const componentString = renderToString(component);
  console.log(componentString);

  const formattedCode = simpleFormatCode(componentString);


  return <code className="language-html">{formattedCode}</code>
}
