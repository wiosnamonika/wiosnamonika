import React from 'react';
import ReactDOM from 'react-dom';



class TextTyper extends React.Component {
    constructor(props){
        super(props) //props stala wlasnosc ktora przekazujemy na koniec w renderze
        this.state = {
            text: TextTyper.text //nie przekazujemy tekstu bo wtedy przekazalibysmy na sztywno
           
        };
       this.counter = 0;
    }
    componentDidMount() {
        this.timerId = setInterval(()=>{
            this.counter++
          this.setState({
              text: this.props.text.slice(0,this.counter)
          
          });  //this.props.text przechwuje nam niezmieniony text  
            
        },500)
    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }
    
    render(){
        return (
        <h1>{this.state.text}</h1>
        
        );
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <TextTyper text = 'Explore our services!'></TextTyper>,//wywolac
        document.getElementById('app')
    );
});
