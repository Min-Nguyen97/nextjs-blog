import Head from 'next/head'
import Link from 'next/link'
// import { Images } from '../config'

import Image from 'next/image'

const YourComponent = () => (
  <Image
    src="/img/image1.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
)

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hello world :)))))</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {
          YourComponent()
        }
        <h1>
          go to {' '}
          <Link href="/posts/first-post">
            <span>this page</span>
          </Link>
        </h1>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  )
}
