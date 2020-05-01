import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { selectTodos } from 'selectors'
import { loadTodos } from 'slices/todo'

export const TodoList: React.FC = () => {
  const { todos } = useSelector(selectTodos)

  const dispatch = useDispatch()

  const _loadTodos = () => dispatch(loadTodos())

  useEffect(() => {
    _loadTodos()
  }, [])

  return (
    <div>
      {todos.slice(0, 10).map((todo) => {
        return <h5 key={todo.id}>{todo.title}</h5>
      })}
    </div>
  )
}
