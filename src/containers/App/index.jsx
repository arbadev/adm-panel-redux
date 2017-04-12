import React from 'react'
import { bindActionsCreators } from 'redux'
import { connect } from 'react-redux'
import { HashRouter, Match } from 'react-router'
import 'normalize-css'

import Header from '../../components/Header'
import Profile from '../../components/Profile'
import Login from '../../components/Login'
import Main from '../Main'

const App = (props) => {
  const handleOnAuth = () => {
    // do some auth
    console.log('Auth with github')
  }
  return (
    <HashRouter>
      <div>
        <Header />
        <Match
          exactly
          pattern="/"
          render={() => {
            const renderComponent = props.user ?
              <Main user={props.user} /> : <Login onAuth={handleOnAuth} />
            return renderComponent
          }}
        />
        <Match
          pattern="/profile"
          render={() => {
            return (
              <Profile
                picture={props.user.photoUrl}
                displayName={props.user.displayName}
                username={props.user.email.split('@')[0]}
                emailAddress={props.user.email}
                location={props.user.location}
              />
            )
          }}
        />
        <Match
          pattern="/user/:id"
          render={({ params }) => {
            return (
              <Profile
                displayName={params.id}
                username={params.id}
              />
            )
          }}
        />
      </div>
    </HashRouter>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    messages: state.messages,
  }
}

App.propTypes = {
  user: React.PropTypes.object,
}

export default connect(mapStateToProps)(App)
