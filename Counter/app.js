
let CounterApp = () => {
    const{useState} = React;
    
    let [counter,setCounter] = useState(27);

    let onClickHandler = () =>{
        counter++;
        setCounter(counter);
    }

    return(
        <div>
            <span>{counter} &nbsp; &nbsp;</span>
            <button onClick={onClickHandler}>Counter</button>
        </div>
        
    );
} 

ReactDOM.render(<CounterApp/>, document.getElementById('mountNode'));