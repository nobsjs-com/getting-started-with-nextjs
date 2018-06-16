import Link from 'next/link'

const color = '#8795a1'

export default () => (
  <div>
    <h1>Wohoo, I'm Home!</h1>
    <Link href='/about'>Learn about me!</Link>
    <br />
    <a href='/coming-soon'>What's coming next?</a>
    <style jsx>{`
      div {
        width: 400px;
        margin: 0 auto;
      }

      h1 {
        color: ${color};
        text-transform: uppercase;
      }
    `}</style>
  </div>
)
