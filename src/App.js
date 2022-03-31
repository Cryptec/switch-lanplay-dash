import './App.css'
import FetchIdle from './utils/FetchIdle'
import FetchOnline from './utils/FetchOnline'
import FetchStatus from './utils/FetchStatus'

function App() {

  const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'localhost'
  const API_PORT = process.env.REACT_APP_API_PORT || '11451'
  const SITE_TITLE = process.env.REACT_APP_SITE_TITLE
  return (
    <div className='App'>
      <header className='App-header'>
      <h3 style={styles.title}>{SITE_TITLE}</h3>
        <table style={styles.table}>
          <tr>
            <th>status</th>
            <th>URL</th>
            <th>online / idle</th>
          </tr>
          <tr>
            <td><FetchStatus /></td>
            <td>{API_ENDPOINT}:{API_PORT}</td>
            <td style={styles.onlinerow}>
              <FetchOnline /> / <FetchIdle />
            </td>
          </tr>
        </table>
      </header>
    </div>
  )
}

const styles = {};

styles.title = {
  marginTop: '150px'
}
styles.table = {
  borderRadius: '5px',
  border: '0.5px solid white',
  padding: '5px',
  marginTop: '100px'
}
styles.onlinerow = {
  display: 'flex',
  flexDirection: 'row'
}

export default App
