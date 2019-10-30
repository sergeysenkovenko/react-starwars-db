import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorMessage from '../error-message';
import DetailsView from './details-view';
import './item-details.css';

export default class ItemDetails extends Component {
  _isMounted = false;
  state = {
    item: null,
    error: false
  }

  async updateItem () {
    const { itemID } = this.props;
    if(!itemID){
      return;
    } else {
      try{
        const item = await this.props.getData(itemID);
        this._isMounted && this.setState({
          item,
          loading: false,
          error:false
        });
      } catch(err) {
        this.setState({
          loading: false,
          error: true
        });
      }
    }
  }

  componentDidMount() {
    this._isMounted = true;
    this._isMounted && this.updateItem();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidUpdate(prevProps) {
    if(this.props.itemID !== prevProps.itemID){
      if(this.props.itemID){
        this.updateItem()
        this.setState({
          loading: true
        })
      }else{
        this.setState({
          item: null
        })
      }
    }
  }
  
  renderView = (viewType) => {
    const { item } = this.state;
    
    switch (viewType) {
      case "person": return <DetailsView item={item} image={"characters"}/>

      case "starship": return <DetailsView item={item} image={"starships"}/>

      case "planet": return <DetailsView item={item} image={"planets"}/>

      default:
        break;
    }
  }

  renderPlaceholder = (viewType) => {
    return <div className="text-center w-100 text__placeholder">Select a {viewType} from list</div> 
  }

  render() {
   const { viewType } = this.props;
   const {item, loading, error} = this.state;
   const placeholder = (!item && !error && !loading) ? this.renderPlaceholder(viewType) : null
   const spinner = loading ? <Spinner/> : null
   const errorMessage = (error && !loading) ? <ErrorMessage/> : null
   const content = (!loading && !error && !placeholder && item) ? this.renderView(viewType) : null
  
    return (
      <div className="item-details card">
        { placeholder }
        { spinner }
        { errorMessage }
        { content }
      </div>
    )
  }
}
