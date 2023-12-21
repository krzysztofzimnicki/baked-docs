import { ReactElement } from "react";
import { renderToString } from 'react-dom/server';

export default function ComponentToString(component: any) {

  const componentString = renderToString(component);
  console.log(componentString);

  return <pre>{componentString}</pre>
}
