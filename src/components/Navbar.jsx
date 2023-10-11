/*
   1. Функция: Если у тебя задача создать Footer, что ты делаешь
     1.1 Создаёшь export default function Nav() {} или стрелочную функцию const Nav = () => {}
     1.2 Прописываешь в самой функции return (You code)! Обязательно return, так как ты тут его не вызываешь
     , а вызываешь в index.js По примеру App.js ты там увидишь.
     1.3 Стили, то есть css у насть в sass. Ты прописываешь import from './url style
     1.4 Если не понятно по ts,js обращаешься в инет, так же по стилям
     1.5 Так как мы имеем дело с TSX а не JSX, мы хуярим на TypeScript - это значит большие проблемы
     в будущем. Ну это не Next.js и тут не такой ебучий SRT.
     1.6 Чтобы
*/

import style from '../style/Navbar.scss'

export default function Navbar() {

    return (
        <div style={style.navbar}>

        </div>
    )

}