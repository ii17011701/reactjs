import React, { Component } from "react"; 

class ClassComponent extends React.Component { 
	constructor() { 
		super(); 
		this.state = { 
			count: 0 
		}; 
		this.increase = this.increase.bind(this);
		this.decrease = this.decrease.bind(this);  
	} 

	increase() { 
		this.setState({ count: this.state.count + 1 }); 
	} 


	decrease() { 
		this.setState({ count: this.state.count - 1 }); 
	} 

	render() { 
		return ( 
			<div style={{ margin: '50px' }}> 
				<center><h3>Counter App</h3></center> 
				<div style={{ display: 'flex',  flexDirection: 'row', gap:'1rem', justifyContent: 'center', alignItems:'center' }}>
				<button onClick={this.increase}>&nbsp;+&nbsp; </button> 
				<p> {this.state.count}</p> 
				<button onClick={this.decrease}>&nbsp;-&nbsp;</button> 
				</div>
			</div> 
		) 
	} 
} 

export default ClassComponent;