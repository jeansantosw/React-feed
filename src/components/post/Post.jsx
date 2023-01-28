import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'

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

  // Using states from my post component
  const [comments, setComments] = useState(['Mais comentário!!'])
  const [newCommentText, setNewCommentText] = useState('')

  // Date formatting variables
  const publishedDataRelativeToNow = formatDistanceToNow(props.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  // Post component functions
  function handleCreateNewComment() {
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function hendleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
    event.target.setCustomValidity('')
  }

  function deletComment(commentToDelete) {
    const commentWithoutDeletdOne = comments.filter(comment => {
      return comment != commentToDelete;
    })
    setComments(commentWithoutDeletdOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

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
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            )
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={style.commentForm}>
        <strong>Deixe seu Feedback</strong>
        <textarea
          onChange={handleNewCommentChange}
          name="comment"
          value={newCommentText}
          onInvalid={hendleNewCommentInvalid}
          placeholder="Deixe seu comentário"
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>
      <div className={style.commentList}>
       
        {comments.map(comment => {
          return (
           
            <Comment
              key={comment}
              content={comment}
              onDeletComment={deletComment}
            />
          )
        })}
      </div>
    </article>
  )
}
