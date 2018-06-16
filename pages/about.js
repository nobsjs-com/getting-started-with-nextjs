import Link from 'next/link'

export default () => (
  <div>
    <h1>About Hello World</h1>
    <p>It's pretty alright!</p>
    <Link prefetch href='/'>
      Return home
    </Link>
  </div>
)
