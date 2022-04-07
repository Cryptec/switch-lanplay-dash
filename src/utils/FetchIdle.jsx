import React, { Component } from 'react'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'localhost'
const API_PORT = process.env.REACT_APP_API_PORT || '11451'

class FetchIdle extends Component {
  constructor(props) {
    super(props)
    this.state = {
        isLoading: true, 
        isError: false,
        stats: [],
        fetchidle: ""
    }
}

componentDidMount = async () => {
    const response = await fetch(`${API_ENDPOINT}${API_PORT}`)
    if (response.ok) {
      const stats = await response.json()
      this.setState({stats, fetchidle: stats.idle, isLoading: false})
      return(true)
    } else {
      this.setState({ isError: true, isLoading: false })
    }
}

  render() {
    const { isLoading, isError } = this.state

    if (isLoading) {
      return <div>0</div>
    }

    if (isError) {
      return <div>0</div>
    }
    return (
        <div>
           {this.state.fetchidle}
        </div>
    )
}

}

export default FetchIdle
