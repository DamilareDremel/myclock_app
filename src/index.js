//import the react and reactdom libraries
import React from 'react';
import ReactDOM from 'react-dom';



//create a react component
const App = () => {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    //let the color be green
    if(hours < 12){
        timeOfDay = "Morning"
    }

    //let the color be orange
    else if(hours >=12 && hours < 16){
        timeOfDay = "Afternoon"
    }

    //let the color be purple
    else if(hours >=16 && hours < 20){
        timeOfDay ="Evening"
    }

    //let the color be red 
    else{
        timeOfDay = "Night"
    }

    return(
        <div>
           <h1 style={{color : "#ff8c00"}}>
               Good {timeOfDay}!
           </h1>
        </div>
    );
};

//take the react component and show it on the screen 
ReactDOM.render(
    <App />, document.querySelector('#root')
);