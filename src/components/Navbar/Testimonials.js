import React from 'react'

export default function Testimonials() {

  return (<>
    <div className='row testimonials'>
      <div className="col-sm-12 testimonials">
        <h1>Our Testimonials</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-3 mb-3">
        <div className="card">
          <i class="fa fa-user-circle-o mt-4" aria-hidden="true"></i>
          <div className="card-body">
            <h5 className="card-title">Alex Padari</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="/" className="btn">Read more...</a>
          </div>
        </div>
      </div>
      <div className="col-sm-3 mb-3">
        <div className="card">
          <i class="fa fa-user-circle-o mt-4" aria-hidden="true"></i>
          <div className="card-body">
            <h5 className="card-title">Smith John</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="/" className="btn">Read more...</a>
          </div>
        </div>
      </div>
      <div className="col-sm-3 mb-3">
        <div className="card">
          <i class="fa fa-user-circle-o mt-4" aria-hidden="true"></i>
          <div className="card-body">
            <h5 className="card-title">Helena Marsh</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="/" className="btn">Read more...</a>
          </div>
        </div>
      </div>
      <div className="col-sm-3 mb-3">
        <div className="card">
          <i class="fa fa-user-circle-o mt-4" aria-hidden="true"></i>
          <div className="card-body">
            <h5 className="card-title">Devid Will</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="/" className="btn">Read more...</a>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
