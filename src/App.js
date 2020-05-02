import React from 'react';
import './App.sass';
import NameList from './components/NameList.js';

function App(props) {
  const [state,setState] = React.useState({
                                             filterText: '',
                                             favourites: []
                                          });

  const addFavourite = (favourite) => {
    state.favourites.push(favourite);
    setState({
      filterText: state.filterText,
      favourites: [...state.favourites]
    });
  }

  const deleteFavourite = (favourite) => {
    let idx = state.favourites.map(obj => obj.id).indexOf( favourite.id );
    let newFavourites = [...state.favourites.slice(0,idx), ...state.favourites.slice(idx+1)] ;
    setState({
      filterText: state.filterText,
      favourites: newFavourites
    });
  }

  const updateText = (event) => {
     state.filterText = event.target.value ;
     setState({
       filterText: event.target.value,
       favourites: state.favourites
     });
  }

  return (
    <>
    <div className="App">
      <input id="itext" placeholder="Enter Author Name" className="MyInput" name="mytext" value={state.filterText} onChange={updateText}/>
    </div>
    {
      state.favourites.length !== 0 && 
      <div id="authlist">
        <NameList data= {state.favourites} onItemClick={deleteFavourite}/>
      </div>
    }
    <div id="authlist">
      <NameList data= {props.data} filterText= {state.filterText} onItemClick={addFavourite}/>
    </div>
    </>
  );
}

export default App;
