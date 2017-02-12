// Components
import Head from 'next/head'
const colors  = {
  accent: '#DA37CF',
  copy: '#444',
  bg: '#fff',
}

export default ({ children }) => (
  <main>
    <Head>
      <title>Sublime Text, Atom & VS Code snippet generator</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel='stylesheet' href='https://cdn.rawgit.com/TryKickoff/kickoff/72581bbd/assets/dist/css/kickoff.css'/>
    </Head>

    {children}

    <style jsx global>{`
      body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        background-color: ${colors.bg};
        font-weight: 300;
      }

      h1,
      h2,
      h3 {
        color: ${colors.accent};
        font-weight: 300;
        margin-bottom: 1rem;
      }

      main {
        padding: 30px;
      }

      @media (min-width: 750px) {
        main {
          padding: 45px;
        }
      }

      .form-controlGroup {
        margin: 1rem 0;
      }

      @media (min-width: 750px) {
        .form-input--textarea {
          height: 190px;
        }
      }

      small code {
        font-size: 14px;
        color: ${colors.accent};
        background-color: ${colors.bg};
        padding: 0;
      }
    `}</style>
  </main>
)