import React from 'react'
import ButtonUI from '../components/Button';
import no_search from "../images/no_search.png";
import "./NoSearch.css";

const NoSearch = () => { 
  return (
    <>
      <img src={no_search} className="img_no_search" alt="logo" />  
      <div className='title_no_search'>Ooops! Nenhum resultado foi encontrado</div><br></br><br></br>
      <ButtonUI
        label = {'< Voltar'}
      />
    </>
  );

}
export default NoSearch
