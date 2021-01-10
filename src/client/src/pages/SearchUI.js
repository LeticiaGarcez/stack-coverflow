import React from 'react'
import ButtonUI from '../components/Button'
import NoSearch from './NoSearch'
import "./SearchUI.css"

export default class SearchUI extends React.Component {
  render() {
    return (
      this.props.apiResponse.items.length > 0 ?
      <>
        <div className='title_result'>Resultados da busca</div><br></br><br></br>
        <div>
          <ul className='results'>  
            {this.props.apiResponse.items.map(item => 
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
        <ButtonUI
          label = {'< Voltar'}
        />
      </>
      :
        <NoSearch />
    )};
}

const ListResult = ({ itemLink, itemTitle }) => {
  return <a className='link' href={itemLink}>{itemTitle}<br></br></a>
}