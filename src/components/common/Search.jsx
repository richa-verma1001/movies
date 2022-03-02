import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export default class Search extends Component {
  constructor(props) {
    super(props);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.state = {
      showSearch: false
    }
  }

  componentDidMount() {
    this.setState({
      showSearch: false
    });
  }


  handleSearchClick() {
    let curr = { ...this.state };
    curr = curr.showSearch;
    this.setState({
      showSearch: !curr
    });
  }

  render() {
    return (
      <>
        <input
          className={this.state.showSearch ? 'show' : 'hide'}
          type="text"
          onChange={this.props.onSearch}
          placeholder="search movies ..." />
        <button
          onClick={this.handleSearchClick}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </>
    )
  }
}
