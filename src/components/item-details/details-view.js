import React from 'react';

const DetailsView = ({ item, image }) => {
    const { name, id, ...rest } = item;
    const list = Object.entries(rest).map(([key, value]) => {
      return(
        <li key={key} className="list-group-item">
              <span className="term">{`${textTransform(key)}:`}</span>
              <span>{value}</span>
        </li>
      )
    })
    return(
      <React.Fragment>
        <img className="item-image"
             alt={name}
             src={`https://starwars-visualguide.com/assets/img/${image}/${id}.jpg`} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {list}
          </ul>
        </div>
      </React.Fragment>
    );
}

const textTransform = (str) => {
  let newStr = str.replace( /([A-Z])/g, " $1" )
  let result = newStr.charAt(0).toUpperCase() + newStr.slice(1);
  return result;
}

export default DetailsView;