import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hey Guys! I am a Japanese software developer.</p>
        <p>
          I work for educating software developers in Myanmar.
          <br/>
          I have been creating Japanese leaning resources on <a href="https://www.facebook.com/reytechmyanmar" rel="noopener noreferrer">Facebook</a>.
        </p>
        <p>
          Just contact me on{' '}<a href="https://www.facebook.com/yoshihito.koyama.73" rel="noopener noreferrer">my Facebook page</a>.
        </p>
      </section>
    </Layout>
  )
}