import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <div style={{display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }}>
        <span className="badge rounded-pill bg-danger">{source}</span>
                </div> 
          <img src={!imageUrl?"https://bilder1.n-tv.de/img/incoming/crop24896720/7601324875-cImg_16_9-w1200/458472511.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title} </h5>
              <p className="card-text">{description}..</p>
              <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
