import React, { Component } from 'react';

class RandomUser extends Component {
  constructor() {
    super();

    this.state = {
      storedUser: {},
      loading: true,
    };

    this.renderUser = this.renderUser.bind(this);
  }

  async fetchUser() {
    try { 
      const response = await fetch('https://api.randomuser.me');
      const dataUser = await response.json();
      this.setState({ storedUser: dataUser.results[0], loading: false });
    } catch (error) {
      console.log(error);
    }
  }
  
  componentDidMount() {
    this.fetchUser()
  }

  shouldComponentUpdate(nextProps, { storedUser }) {
    const maxAge = 50;
    
    return storedUser.dob.age <= maxAge;
  }
  
  // componentDidMount() {};
  // shouldComponentUpdate(nextProps, nextState) {};
  // componentDidUpdate(_prevProps, prevState) {}; 
  // componentWillUnmount() {};

  renderUser() {
    const { name, email, dob, picture } = this.state.storedUser;

    return (
      <div>
        <img className="picture" src={ picture.large } alt="Avatar" />
        <p>Nome: {`${name.first} ${name.last}`}</p>
        <p>Email: {email}</p>
        <p>Idade: {dob.age} anos</p>
      </div>
    )
  }

  render() {
    const { loading } = this.state;
    const loadingElement = <span>Loading...</span>;
    
    return (
      <div>
        <span>{loading ? loadingElement : this.renderUser()}</span>
      </div>
    );
  }
}

export default RandomUser;
