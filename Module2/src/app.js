import './app.scss'
// import {init} from './chat.js'
import /*webpackChunkName: "chat" */ {init} from './chat'


const button = document.createElement("button")
button.textContent = 'Open chat'
document.body.appendChild(button)


button.onclick = () => {
    init();
}

if (module.hot) {
    module.hot.accept()
}

// button.onclick = () => {
//     import(/* webpackChunkName: "chat" */ "./chat").then(chat => {
//         chat.init()
//     })
// }