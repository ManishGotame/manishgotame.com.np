/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <title>Manish Gotame</title>
        <meta
          name='description'
          content='Full Stack Developer, cyclist, and occasional essayist.'
        />
        <meta
          name='keywords'
          content='Manish Gotame, Full Stack Developer, Web Development, JavaScript, React, Next.js, Cycling, Technical Writing, Software Engineering'
        />
        <meta name='author' content='Manish Gotame' />

        {/* Open Graph for social media */}
        <meta
          property='og:title'
          content='Manish Gotame - Software Developer'
        />
        <meta
          property='og:description'
          content='Full Stack Developer, cyclist, and occasional essayist.'
        />
        <meta
          property='og:image'
          content='https://personal-site.s3.ap-southeast-2.amazonaws.com/meta_img.png'
        />
        <meta property='og:url' content='https://manishgotame.com.np' />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Manish Gotame' />

        {/* Twitter Meta Tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@manishgotame' />
        <meta name='twitter:creator' content='@manishgotame' />
        <meta
          name='twitter:title'
          content='Manish Gotame - Software Developer'
        />
        <meta
          name='twitter:description'
          content='Full Stack Developer, cyclist, and occasional essayist.'
        />
        <meta
          name='twitter:image'
          content='https://personal-site.s3.ap-southeast-2.amazonaws.com/meta_img.png'
        />

        {/* Favicon */}
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />

        {/* Additional SEO tags */}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#ffffff' />
        <link rel='canonical' href='https://manishgotame.com.np' />
      </Head>
      <body className='antialiased'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
