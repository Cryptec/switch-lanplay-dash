import React, { Component } from 'react'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'localhost'
const API_PORT = process.env.REACT_APP_API_PORT || '11451'

class FetchOnline extends Component {
  constructor(props) {
    super(props)
    this.state = {
        isLoading: true, 
        isError: false,
        stats: [],
        fetchonline: ""
    }
}

componentDidMount = async () => {
    const response = await fetch(`${API_ENDPOINT}:${API_PORT}/info`)
    if (response.ok) {
      const stats = await response.json()
      this.setState({stats, fetchonline: stats.online, isLoading: false})
      return(true)
    } else {
      this.setState({ isError: true, isLoading: false })
    }
}

  render() {

    return (
        <div>
           {this.state.fetchonline}
        </div>
    )
}

}

export default FetchOnline
