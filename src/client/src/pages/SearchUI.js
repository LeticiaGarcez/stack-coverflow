import React from 'react'
import Button from '../components/Button';
import "./SearchUI.css";

const SearchUI = ({ apiResponse }) => { 
  return (
    <>
      <div className='title_result'>Resultados da busca</div><br></br><br></br>
      <div>
        <ul className='results'>  
          {apiResponse.items.map(item => 
              <>
                <ListResult 
                  key={item}
                  itemLink={item.link}
                  itemTitle={item.title}
                />
                <br></br>
              </>
          )}
        </ul>
      </div>
    </>
  );
}
export default SearchUI

const ListResult = ({ itemLink, itemTitle }) => {
  return <a className='link' href={itemLink}>{itemTitle}<br></br></a>
}