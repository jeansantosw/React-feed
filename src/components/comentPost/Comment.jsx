import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../avatar/Avatar'
import style from './Comment.module.css'

export function Comment(props) {
  
  return (
    <div className={style.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/43581104?v=4"/>
      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
            <strong>Jean Santos</strong>
            <time
              title="25 de Janeiro ás 11:11h"
              dateTime="2023-01-25 11:11:45"
            >
              Cerca de 2h atrás
            </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{props.content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
