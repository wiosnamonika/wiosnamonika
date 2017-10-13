import React from 'react';
import ReactDOM from 'react-dom';

class TextIntro extends React.Component {
  constructor(props){
    super(props);
    this.state={
      text: TextIntro.text,
    
        
    };

    this.counter = 0;
  }
  componentDidMount() {
    this.timerId = setInterval(()=>{
      this.counter++
      this.setState({
        text: this.props.text.slice(0, this.counter)
      });

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
document.addEventListener("DOMContentLoaded", ()=>{
  ReactDOM.render(
    <TextIntro text='Choose your road...!'/>,

    document.getElementById('app')
  );
});
