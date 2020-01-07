import React from 'react';
import ReactDOM from 'react-dom';
import logo from './images/132.jpg';
import './search.less';

export default class Search extends React.Component {
  constructor() {
    // eslint-disable-next-line prefer-rest-params
    super(...arguments);
    this.state = {
      Text: null,
    };
  }

  loadComponent() {
    import('./text.js').then((Text) => {
      this.setState({
        Text: Text.default,
      });
    });
  }

  render() {
    const { Text } = this.state;
    return (
      <div className='search'>
        {Text ? <Text /> : null}
        <img src={logo} onClick={this.loadComponent.bind(this)} />
        Search
      </div>
    );
  }
}

ReactDOM.render(<Search />, document.getElementById('root'));
