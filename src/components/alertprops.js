import React from 'react';  

export default class AlertProps extends React.Component {  
  render(){  
    return (  
      <div className={"text-center alert alert-" +this.props.type}>  
        <h4>{this.props.title}</h4>  
        <p>{this.props.children}</p>
        
      </div>  
    );  
  }  
}  