import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorMessage from '../error-message';
import './item-list.css';

export default class ItemList extends Component {
  _isMounted = false;
  state = {
    itemList: [],
    loading: true
  }

  async updateList () {
    try{
      const itemList = await this.props.getData()
      this._isMounted && this.setState({
        itemList,
        loading: false,
        error: false
      });
    } catch(err) {
      this.setState({
        loading: false,
        error: true
      });
    }
  }

  renderList = arr => {
    return arr.map(item => {
      return (
        <li key={ item.id } 
            className="list-group-item"
            onClick={() => this.props.onSelectedItem(item.id)}
            >
          { item.name }
        </li>
      );
    })
  }

  componentDidMount () {
    this._isMounted = true;
    this._isMounted && this.updateList();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidUpdate(prevProps) {
    if(this.props.getData !== prevProps.getData){
      this.updateList();
      this.setState({
        loading: true
      })  
    }
  }

  render() {
    const { itemList, loading, error } = this.state;
    const errorMessage = error && !loading ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const listItems = this.renderList(itemList)
    const content = (!loading && !errorMessage) ? listItems : null;
    return (
      <ul className="item-list list-group">
        { errorMessage }
        { spinner }
        { content }
      </ul>
    );
  }
}
