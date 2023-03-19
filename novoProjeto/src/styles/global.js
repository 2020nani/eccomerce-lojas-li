import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle `
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');


* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body {
    background: linear-gradient(#ffcbdb, #ffffff);
    -webkit-font-smoothing: antialiased;
}

body, input, button {
    font: 14px Roboto, sans-serif;
}

#root {
    margin: 0 auto;
    padding: 0 20px 50px;
}

button {
    cursor: pointer
}

`