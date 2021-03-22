import React from 'react';

export default function PhotoItem(props) {
  const { item } = props

  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img className="bd-placeholder-img card-img-top" alt={item.title} width="100%" height="225" src={item.thumbnailUrl}></img>
        <div className="card-body">
          <h4 className="card-text">{item.id}</h4>
          <h5 className="card-text">Album Id: {item.albumId}</h5>
          <p className="card-text">{item.title}</p>
        </div>
      </div>
    </div>
  )
}
