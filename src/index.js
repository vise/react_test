import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*function Hello({library, message, number}){
  //console.log(Object.keys(props));
  return(
    <div>
      <h1>Welcome to {library}!</h1>
      <p>{message}</p>
      <p>{number} props total</p>
    </div>
  ); 
}*/

/*function Lake({name}){
  return(
    <h1>{name}</h1>
  )
}*/
/*const lakeList = [
  {id: "1", name: "Echo", trailhead: "Echo"},
  {id: "2", name: "Bravo", trailhead: "Sierra"},
  {id: "3", name: "Zulu", trailhead: "Echo"}
];*/
//const list = [1,2,3,4,5]

const [first] = [
  "pop",
  "corn"
]
console.log(first);

function Lake({name}) {
  return(
      <h1>Visit Lake {name}!</h1>
  );
}

function SkiResort(){
  return(
      <h1>Visit Skeeslooopes!</h1>
  );
}

function App(props){
  return(
    <>
      <Lake />
      <SkiResort />
    </>
    /* <div>
      {props.season === "summer" ? (
        <Lake name="Viggo Lake" />
      ) : props.season === "winter" ? (
        <SkiResort name="Livia Skeeeing" />
      ): (
        <h1>
          Come back in season 9!
        </h1>
      )}
    </div> */
  );
}
/*    <div>
        {lakes.map(lake => (
          <div key={lake.id}>
            <h2>{lake.name}</h2>
            <p>Accessed by: {lake.trailhead}</p>
          </div>
        ))}
    </div>
    );*/
 /*   <ul>
      {items.map(item =>(
        <li key={item.toString()}>{item}</li>
      ))}
    </ul>
  );*/
 // );
 /*if(props.season==="summer"){
   return <Lake name="Vänern" />;
 } else if (props.season ==="winter"){
   return <SkiResort />;
 }
 return <Lake name="Vättern" />;
}*/
/*let city = {
  name: "Madrid",
  country: "Spain"
};*/
ReactDOM.render(
  //<h1 id="heading" className="cool-text">
  //  {city.name} is in {city.country}
  //</h1>
  //<App lakes={lakeList}/>,
  //<App items={list}/>,
  <App season="blaha"/>,
  document.getElementById('root')
);
