import React from 'react';
import ReactDOM from 'react-dom';

function MisFilas() {
  let bebidas = ['malta','cola','pepsi']

  
  let username = 'Ricardo'

  return (
    <>
      <h1>El usuario:</h1>
      {  username !==''  &&  <h2>Es {username}</h2> } 
      {  username ===''  &&  <h2>No está logeado</h2> } 
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
      </tr>
      <tr>
        {bebidas.map(ar=>(<td key={ar}> {ar} </td>))}
      </tr>
    </>);
}

function MiTabla() {


  return (
    <>
      <table>
        <tbody>
          <MisFilas/>
        </tbody>
      </table>
    </>
  )
}

ReactDOM.render(<MiTabla />, document.querySelector('#root'));
