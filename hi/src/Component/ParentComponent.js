//import './App.css'; 
import ChildComponent from "./ChildComponent";
function ParentComponent(props) {
    const { name, age} = props; 
return ( 
<div>
    <ChildComponent  name={name} age={age}/>

</div>
);
}

export default ParentComponent;
