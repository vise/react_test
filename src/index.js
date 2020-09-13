import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function GitHubUser({ login }){
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);
  console.log(data)
  if(data) {
    return (
    <div>
      <h1>{data.login}</h1>
      <img src={data.avatar_url} width={100}></img>
    </div>
    );
  }
  return null;
}

function App(){
  return <GitHubUser login="viggos" />
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
