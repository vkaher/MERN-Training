// Class component code start here

class Greetings extends React.Component {
    render(){
        return <div>Hello John! Good Morning</div>
    }
}

ReactDOM.render(<Greetings/>, classComponent)

// Functional component code start here
function Greetings1(){
    return(
        <div>Hello Matt! Good Evening</div>
    )
}

ReactDOM.render(<Greetings1 />, functionalComponent);
