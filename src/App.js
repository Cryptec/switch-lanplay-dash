import './App.css'
import { IdleStatus, OnlineStatus } from './icons'
import FetchIdle from './utils/FetchIdle'
import FetchOnline from './utils/FetchOnline'
import FetchStatus from './utils/FetchStatus'

function App() {

  const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'localhost'
  const API_PORT = process.env.REACT_APP_API_PORT || '11451'
  const SITE_TITLE = process.env.REACT_APP_SITE_TITLE
  const LANPLAY_URL = process.env.REACT_APP_LANPLAY_URL
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
            <td style={styles.status}><FetchStatus /></td>
            <td style={styles.url}>{LANPLAY_URL}</td>
            <td style={styles.onlinerow}>
              <FetchOnline /><OnlineStatus /> &nbsp; / &nbsp; <FetchIdle /><IdleStatus />
            </td>
          </tr>
        </table>
      </header>
    </div>
  )
}

const styles = {};

styles.title = {
  marginTop: '100px'
}
styles.table = {
  borderRadius: '5px',
  border: '0.5px solid white',
  padding: '5px 15px 5px 15px',
  marginTop: '100px'
}
styles.onlinerow = {
  display: 'flex',
  flexDirection: 'row'
}
styles.url = {
  paddingLeft: '30px',
  paddingRight: '30px'
}
styles.status = {
  display: 'flex',
  fustifyContent: 'center'
}

export default App
