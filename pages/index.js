import Head from 'next/head'
import Image from 'next/image'
// import Component from './project'
import Header from '~/components/Header'
import HeroComponent from '~/components/Hero'
import About from '~/components/About'
import FeaturedProduct from '~/components/Featured'
import Footer from '~/components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>AgCera Nutrition: Transforming Lives</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Header */}
      <div className='py-5'>
        <Header />
      </div>
      <div>
        {/* Hero  */}
        <HeroComponent />
      </div>

      <main>
        {/* About */}
        <About />
        {/* Featured Product */}
        <FeaturedProduct />
        {/* Footer */}
        <Footer />
      </main>

      {/* <footer>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
