const { Container } = require('muicss/react');
const { Switch, Router } = require('react-router-dom');

const Main = () => {
  <Container>
    <Switch>
      <Route exact path='/' component={ Login }/>
      <Route path='/home' component={ Home }/>
      <Route path='/browse' component={ Browse }/>
      <Route path='/:username/newpost' component={ NewPost }/>
      <Route path='/:post_id' component={ Post }/>
    </Switch>
  </Container>
}
