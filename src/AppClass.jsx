import React from 'react';
import colors from './commons/colors';
import './app.scss';

class AppClass extends React.Component{

constructor(props){
    super();
    console.log('constructor');
    this.state = {
        currentIndexColor: 0
    }; 
}

componentDidMount(){
console.log("componentDidMount");
  const randomIndex = Math.floor(Math.random() * colors.length);

  document.body.style.backgroundColor = colors[randomIndex];
  console.log(randomIndex);
  this.setState({currentIndexColor: randomIndex})
} 


    render(){
         console.log('render');
    
        return(
            <div id = 'app'>
                <h1 id = 'current-color'>{colors[this.state.currentIndexColor]}</h1>

                <div className ="colors">
                    {
                       colors.map(
                        (color, index) =>
                     <button 
                    key = {`colors-${index}`}
                    style = {{
                    backgroundColor: color
                }}
                className={index === this.state.currentIndexColor ? 'active': ''}
                onClick={() => {
document.body.style.backgroundColor = colors[index];
this.setState({currentIndexColor:index})
}
            }
            >
                    </button>
                       ) 
                    }
                </div>
            </div>
        );
    }
}
export default AppClass;