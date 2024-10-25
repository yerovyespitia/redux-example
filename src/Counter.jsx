import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/counterSlice'

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Cuenta: {count}</h2>
      <button onClick={() => dispatch(increment())}>Aumentar</button>
      <button onClick={() => dispatch(decrement())}>Restar</button>
    </div>
  )
}

export default Counter
