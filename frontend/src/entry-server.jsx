import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'


export function render(url) {
  // console.log(url);
  if (url !== "/") {
    url = "/" + url;
  }
  const html = ReactDOMServer.renderToString(

    <StaticRouter location={url} >
        <App />
    </StaticRouter>
  )
  return { html }
}
