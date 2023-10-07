import './App.css'
import { Card } from './components/card/card';
import { CreateModal } from './components/create-modal/create-modal';
import { useFoodData } from './hooks/useFoodData';
import { useState } from 'react';

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev);
  }

  return (
    <>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    </style>
      <div className="container">
        <h1>Menu</h1>
        <div className="card-frid">
          {data?.map(food => 
            <Card 
              title={food.title} 
              price={food.price} 
              image_url={food.image_url}
            />
          )}
        </div>
        {isModalOpen && <CreateModal/>}
        <button onClick={handleOpenModal}>Neeew</button>
      </div>
    </>
  )
}

export default App
