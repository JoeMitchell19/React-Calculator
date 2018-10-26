 import React, { Component } from 'react';

 export default class Calculator extends Component{
     constructor(){
         super();
         this.state ={
             stateText:equals(document.getElementById("answerbox")),}
        this.update1 = (e) = this.setState(stateText.equals(e.target.value))
        this.update2 = (e) = this.setState(stateText = eval(stateText))
 }
    //build constructor - ideally set answer box value to null or 0 to start
    // updates allow for input of numbers and operators, as well as execution of operations
        render() {  
            return(
                <div>
                    <div>
                        <input type = "text" id = "answerbox"/>
                    </div>
                    <span>
                        <button onClick ={this.update}> 1 </button>
                        <button onClick ={this.update}> 2 </button>
                        <button onClick ={this.update}> 3 </button>
                        <button onClick ={this.update}> + </button>
                    </span>
                     <span>
                        <button onClick ={this.update}> 4 </button>
                        <button onClick ={this.update}> 5 </button>
                        <button onClick ={this.update}> 6 </button>
                        <button onClick ={this.update}> - </button>
                    </span>
                     <span>
                        <button onClick ={this.update}> 7 </button>
                        <button onClick ={this.update}> 8 </button>
                        <button onClick ={this.update}> 9 </button>
                        <button onClick ={this.update}> * </button>
                    </span>
                     <span>
                        <button onClick ={this.update}> 0 </button>
                        <button onClick ={this.update}> / </button>
                        <button onClick ={this.update2}> = </button>
                    </span>
                </div>
            );
        }
 }
    //Design of calculator using divs and spans