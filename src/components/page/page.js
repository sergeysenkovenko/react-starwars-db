import React from 'react';
import { withRouter } from 'react-router-dom';
import ItemList from '../item-list';
import ItemDetails from '../item-details';

const Page = (props) => {

    const { getItem, getList, viewType, history, match } = props;
    const { id } = match.params;

    const itemList = (
        <ItemList onSelectedItem={(id) => history.push(id)}
                  getData={getList}
        />
    );
    const itemDetails = (
        <ItemDetails itemID={id}
                     getData={getItem}
                     viewType={viewType}
        />
    );
    return(
        <Row left={itemList} right={itemDetails}/>
    )
}

const Row = ({left, right}) => {
    return(
        <div className="content__wrapper">
            { left }
            { right }
        </div>
    )
}

export default withRouter(Page);