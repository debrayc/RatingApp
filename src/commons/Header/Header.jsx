const { Appbar, Button, Container } = require('muicss/react')
const React, { Component } = require('react')

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      imgUrl: 'http://via.placeholder.com/150x150'
    }
  },
  componentWillMount() {
    getUserInfo()
  },
  render() {
    return (
      <Appbar>
        <h1>{this.state.username}</h1>
        <img src={this.state.imgUrl}/>
      </Appbar>
    )
  }
}
