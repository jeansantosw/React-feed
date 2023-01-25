import { PencilLine, PencilSimple } from 'phosphor-react'
import { Avatar } from '../avatar/Avatar'

import style from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <img
        className={style.cover}
        src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt=""
      />
      <div className={style.profile}>
        <Avatar
          src="https://avatars.githubusercontent.com/u/43581104?v=4"
        />
        <strong>Jean Santos</strong>
        <span>Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar Perfil
        </a>
      </footer>
    </aside>
  )
}
