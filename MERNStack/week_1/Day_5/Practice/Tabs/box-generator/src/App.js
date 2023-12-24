
import './App.css';
import Display from './components/Display';

function App() {
  const list=["Tab 1 content is showing here","Tab 2 content is showing here","Tab 3 content is showing here"]
  return (
    <div className='flex  gap-5 mb-5 justify-center'>
      
      {list.map((tab,idx)=>{
        return(<Display tab={tab} idx={idx}/>)
      })}
     
     </div>
  
  );
}

export default App;
