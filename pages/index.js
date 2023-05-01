import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Event App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <img src="" alt="" />
          <a href="">Home</a>
          <a href='events'>Events</a>
          <a href='about-us'>About Us</a>
        </nav>
      </header>
      <main className={`${styles.main} ${inter.className}`}>
        {
          data.map((ev) => (
            <div className='event'>
              <a key={ev.id} href={`/events/${ev.id}`}>
                <Image width={200} height={100} src={ev.image} alt='' />
                <h2>{ev.title}</h2>
                <p>{ev.description}</p>
              </a>
            </div>
          ))
        }


      </main>

      <footer>
        <p>Copyright &copy; 2023 Md. Nasim Reza</p>
      </footer>
    </>
  )
}


export async function getServerSideProps() {
  const { events_categories } = await import('/data/data.json');
  console.log(events_categories);
  return {
    props: {
      data: events_categories,
    }
  }
}