import { Component, ReactElement, useState } from "react";
import { renderToString } from 'react-dom/server';
import { SimplePrettify } from "./SimplePrettify";

export const ReactToHTML = (ReactComponent: any) => {

  const componentString = renderToString(ReactComponent());

  return componentString
}
