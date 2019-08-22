import React from 'react'
import ReactDOM from 'react-dom'
import lowloader from 'lowloader'
import singleSpaReact from 'single-spa-react'
import App from './App'

const el = document.getElementById('app-standalone')

if (el) {
  ReactDOM.render(<App />, el)
}

const domElementGetter = () => {
  let el = document.getElementById('mf-file')
  if (!el) {
    el = document.createElement('div')
    el.id = 'mf-file'
    document.body.appendChild(el)
  }
  return el
}

const app = singleSpaReact({
  React,
  ReactDOM,
  domElementGetter,
  rootComponent: App,
  App
})

export function bootstrap() {
  return app.bootstrap()
}

export function mount() {
  return app.mount()
}

export function unmount() {
  return app.unmount()
}

lowloader.export(app)
