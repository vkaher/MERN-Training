const jsDiv = document.getElementById("renderDiv");
const reactDiv = document.getElementById("elementDiv");
const renderThis = () => {
    let str = 
` <div>    
    <input/>
    <p>  JS Div   ${ new Date()}
    </p>
 </div>`;
 jsDiv.innerHTML = str;
}
setInterval(renderThis, 1000);

 let DivToRender = React.createElement(
    "div",null,
    React.createElement("input"),
    React.createElement("p",null,new Date().toString())
 );
 ReactDOM.render(DivToRender,elementDiv);


