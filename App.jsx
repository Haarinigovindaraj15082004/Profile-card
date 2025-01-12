import { Header } from "./components/Header";
import { ChildComponent } from "./components/ChildComponent";
import { Student } from "./components/Student";
import { ArraySample } from "./components/ArraySample";
import { OneofSample } from "./components/OneofSample";
import { MultiTypeComponent } from "./components/MultiTypeComponent";
import { FunctionSample } from "./components/FunctionSample";
import "./css/App.css";
import { LearnComponent } from "./components/LearnComponent";

function App() {
  
  const items = [
    { id: 1, name : "Item 1"},
    { id: 2, name : "Item 2"},
    { id: 3, name : "Item 3"},
  ];
  

  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    
    <>
      <div>tutorial</div>
      <LearnComponent /> 
      <Header/> 
      <Student name="Abi" age={28} isMarried={false}/>
      <Student name="Sham" age={29} isMarried={true}/>
      <Student name="Saranya" />

      <ChildComponent>
        <p>Sample 1</p>
        <p>Sample 2</p>
      </ChildComponent>
         
      <ArraySample items = {items}/> 
      <OneofSample color = "blue"/> 

      <MultiTypeComponent value="Hello"/>
      <MultiTypeComponent value={45}/>
      <MultiTypeComponent value={true}/>
     

     <div>
      <h2>Parent Component</h2>
      <FunctionSample handleClick={handleClick}/>
     </div>
     
    </>
  );
};

export default App
