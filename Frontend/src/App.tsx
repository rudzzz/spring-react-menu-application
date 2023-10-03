import './App.css'
import { Card } from './components/card/card';
import { useFoodData } from './hooks/useFoodData';
import { FoodData } from './interface/FoodData';

function App() {
  const { data } = useFoodData();

  return (
    <>
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
      </div>
    </>
  )
}

export default App
