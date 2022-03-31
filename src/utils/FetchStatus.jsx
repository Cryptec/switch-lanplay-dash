import React, { Component } from 'react'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'localhost'
const API_PORT = process.env.REACT_APP_API_PORT || '11451'

class FetchStatus extends Component {
  constructor(props) {
    super(props)
    this.state = {
        isLoading: true, 
        isError: false,
        status: ""
    }
}

componentDidMount = async () => {
    const response = await fetch(`http://${API_ENDPOINT}:${API_PORT}/info`)
    if (response.ok) {
      this.setState({status: 'online'})
      document.getElementById('indicator').style.backgroundColor ='#378805'

    } else {
      this.setState({ status: 'error', isError: true, isLoading: false })
      document.getElementById('indicator').style.backgroundColor ='rgb(209, 13, 13)'
    }
}

  render() {

    return (
        <div id='indicator' style={styles.indicator}></div>
    )
}

}
const styles = {};

styles.indicator = {
  width: '20px',
  height: '20px',
  backgroundColor: 'gray',
  borderRadius: '10px'
}

export default FetchStatus