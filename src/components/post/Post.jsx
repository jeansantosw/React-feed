import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../avatar/Avatar'
import { Comment } from '../comentPost/Comment'
import style from './Post.module.css'

export function Post(props) {
  const publishedDataFormatted = format(
    props.publishedAt,
    "d 'de' LLLL 'ás' HH:mm'h'",
    {
      locale: ptBR,
    }
  )

  const publishedDataRelativeToNow = formatDistanceToNow(props.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar src={props.author.avatarUrl} />
          <dir className={style.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </dir>
        </div>
        <time
          title={publishedDataFormatted}
          dateTime={props.publishedAt.toISOString()}
        >
          {publishedDataRelativeToNow}
        </time>
      </header>
      <div className={style.content}>
        {props.content.map(line => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>
          } else if (line.type === 'link') {
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            )
          }
        })}
      </div>
      <form className={style.commentForm}>
        <strong>Deixe seu Feedback</strong>
        <textarea placeholder="Deixe seu comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={style.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
