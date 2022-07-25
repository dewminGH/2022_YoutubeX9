import React,{useState} from "react";
import "../css/searchbar.css"

const SearchBar= ({onChange,label})=>{

    const [text,setText]=useState('');
    const onInputchange=(e)=>{
    setText(e.target.value);
    
    }

const onInputSubmit=(e)=>{

    e.preventDefault();
    onChange(text);
}
   
    return(
        <div className="serach-bar ui segment">
             
            <form className="ui form" onSubmit={onInputSubmit}>
            <div className="ui feild">
            <label>{label}</label>
            <input type='text' 
             onChange={onInputchange}
             value={text}
             />
             </div>
             </form>
       
        </div>
    )
}

export default SearchBar;