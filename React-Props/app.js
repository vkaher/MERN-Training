// Class component code start here

class Greetings extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <div>Hello {this.props.mname}, Good {this.props.greetings} ! </div>
            </div>
            )
        }
}

ReactDOM.render([
<Greetings mname="John" greetings="Morning" />,
<Greetings mname="Harry" greetings="Evening" />
], classComponent  );


// Functional component code start here

function Greetings1(props){
    return <div> Hey {props.name}, Did you finish your {props.type}   !!</div>; //JSX
  }
  
  ReactDOM.render(
    [<Greetings1 name="James" type="Breakfast"/>,
    <Greetings1 name="Matt" type="Lunch" />
    ], functionalComponent);
  