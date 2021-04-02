import { useRouter } from 'next/router'
import Header from '../../components/header'

const PostList = () => {
  const router = useRouter()

  return (
    <>
      <Header />
      <h1>Post List</h1>
      <ul>
        <li>Fitst Post</li>
        <li>Second Post</li>
      </ul>
    </>
  )
}

export default PostList
