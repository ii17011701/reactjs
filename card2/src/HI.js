//import './App.css'; 

function Hi() { 
    const Hello = () => {
        btn.style.width = "50px";
        btn.style.height = "50px";
        btn.style.background = "yellow";
        btn.style.color = "blue";
        alert("color changed!");
    }
return ( 
<div>
  

  <button onClick={Hello}>Click</button>
</div>
);
}

export default Hi;
