import React, { Component } from 'react';
import Input from '../components/InputField/Input';

class Connexion extends Component {

  state = {
    login: '',
    password: '',
    error: ''
  };

  getFieldData = (value, fieldName) => {
    switch (fieldName) {
      case 'login':
        this.setState({login: value.target.value});
        break;
      case 'password':
        this.setState({password: value.target.value});
        break;
      default:
        return;
    }
  };

  dismissError = () => {
    this.setState({error: ''});
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({error: 'Username is required'});
    }

    if (!this.state.password) {
      return this.setState({error: 'Password is required'});
    }

    if (this.state.username && this.state.password) {
      this.props.history.push("/");
    }

    return this.setState({error: ''});
  };

  handleUserChange = evt => {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange = evt => {
    this.setState({
      password: evt.target.value,
    });
  };

  render() {
    return (
      <div className="connexion container">
        <form onSubmit={this.handleSubmit}>
          {this.state.error &&(
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          )}
          <Input
            type="text"
            placeholder="Identifiant"
            value={this.state.login}
            fieldName="login"
            required={true}
            getFieldData={this.getFieldData}
          />
          <Input
            type="password"
            placeholder="Mot de passe"
            value={this.state.password}
            fieldName="password"
            required={true}
            getFieldData={this.getFieldData}
          />
          <Input
            type="submit"
          />
        </form>
      </div>
    );
  }
}

export default Connexion;