import React, {Component} from 'react';

class DotTextDraw extends Component {
   
    render () {
        let animateDot = this.props.toggleDot ? 'dot bounce' : 'dot';
        let animateWriting = this.props.toggleWriting ? 'run-animation' : '';
        return (
            <div className="wrapper">
                <span className={animateDot}/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 0 300 200">   
                    <g>
                        <path ref={this.props.thePathRef} className={animateWriting} id="draw1" d={this.props.thePath}/> 
                    </g>
                </svg>
          </div>

        );
    }
}

export default DotTextDraw;