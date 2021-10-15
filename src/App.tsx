import React from 'react';
import { Plants } from './Componentes/Plants';


const App: React.FC = () => {
  const users1 = [{ id: 1, title: '', description: '', imgURL: '', quantity: 10, }];

  return (
    <div >
      <h3>Lista de Plantitas</h3>
      {users1.map((user) => <Plants key={user.id} id={user.id} title={user.title} description={user.description} imgURL={user.imgURL} quantity={user.quantity} />)}
    </div>
  );
}
export default App;
