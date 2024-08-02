import { Button } from 'antd'
import 'react'
import { useCallback, useState } from 'react'
import Counter from '../../components/counter'
import { useDispatch, useSelector } from 'react-redux'
import { getALlPostAction } from '../../actions/posts'
const Home = () => {
  const dispatch = useDispatch()
  const post = useSelector(state => state.postReducer.data)  || []
  const [value, setValue] = useState(0)
  const counter = useCallback(() => {
    console.log('executed Counter function');
  }, [])
  // const myExpensiveValue = useMemo(() => {
  //   console.log('Cal my value');
  //   return 3
  // }, [value])
  const changeValue = () => {
    setValue(value+1)
  }
  const getPost = () => {
    dispatch(getALlPostAction())
  }
  return (
    <div>
      <p>
        This is Homepage {value}
      </p>
      {/* <p>THis is expensive value- {myExpensiveValue}</p> */}
      <Button onClick={changeValue}>Change Value</Button>
      <Button onClick={getPost}>get post</Button>
      <Counter onCount = {counter}/>
      {post.slice(0,10).map(item => (
        <div key={item.id}>
          {item.title}
        </div>
      ))}
    </div>
  )
}
export default Home