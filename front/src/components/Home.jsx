import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from "react-js-pagination";
import PhotoItem from './PhotoItem'

export default function Home() {

  let [photos, setPhotos] = useState([]);
  let [activePage, setActivePage] = useState(1);
  let [totalItems, setTotalItems] = useState(0);

  const fetchData = (page = 1) => {
    const config = {
      params: {
        limit: 10,
        offset: page - 1
      }
    }

    axios.get('photos', config)
      .then(res => {
        setPhotos(res.data.data);
        setTotalItems(res.data.totalItems);
      })
      .catch(err => console.log(`err`, err))
  };

  const pageClicked = (event) => {
    setActivePage(event);
    fetchData(event);
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div>
      <section className="jumbotron text-center">
        <div className="container">
          <h1>Photos</h1>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">

            {photos.map((e, i) => {
              return (
                <PhotoItem key={i} item={e} />
              )
            })}
          </div>

          <div className="row">
            <div className="col-sm-12">
              <Pagination
                itemClass="page-item"
                linkClass="page-link"
                activePage={activePage}
                itemsCountPerPage={10}
                totalItemsCount={totalItems}
                pageRangeDisplayed={5}
                onChange={(event) => pageClicked(event)}
              />
            </div>
          </div>

        </div>
      </div>

    </div>

  )
}
