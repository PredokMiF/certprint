import styledNormalize from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'


const globalStyles = createGlobalStyle`
  ${styledNormalize}

  html, body {
    height: 100%;
    margin: 0;
  }

  body {
    background-color: white;
    color: #333333;
    margin: 0 auto;
    font-size: 16px;
    line-height: 150%;
    width: 100%;
    box-sizing: border-box;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    min-height: 100%;
  }

  #root {
    display: flex;
    min-height: 100%;
  }
`

export default globalStyles
