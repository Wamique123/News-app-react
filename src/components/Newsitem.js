import React from "react";


const Newsitem = (props)=> {
 
    let { title,description,imageUrl,url,author, date,newsUrl, source } = props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} target="_blank" className="btn btn-primary">read more</a>
  </div>
</div>
      </div>
    )
      
    
  }


export default Newsitem;
