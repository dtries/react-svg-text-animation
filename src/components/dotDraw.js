import React, {Component} from 'react';
import DotTextDraw from './dotTextDraw';
import path from "../path";

const lightTheme = {
    "--color-background": "#fff",
    "--color-button": "#111",
    "--color-text": "#ff9933",
    "--font": "Waiting for the Sunrise"
};

const darkTheme = {
    "--color-background": "#111",
    "--color-button": "#555",
    "--color-text": "#39cc39",
    "--font": "Gamja Flower"
};

class DotDraw extends Component {

    constructor(props) {
        super(props);
          this.state = {
            pathLength: null,
            themeSelected: "light",
            toggleDotAnimation: true,
            toggleWritingAnimation: true
          }
    
          this.pathRef = React.createRef();

    }
    
    componentDidMount () {
        const path = this.pathRef.current;
        const pathLength = path.getTotalLength();
        this.setState({ pathLength: pathLength }); 
        console.log(`Path length is ${pathLength}`);
    }

    themeClick = () => {
        console.log('theme button clicked');
        let nextTheme = this.state.themeSelected === "light" ? "dark" : "light";
        this.setState ({ themeSelected: nextTheme })
        this.applyTheme(nextTheme);
    }

    applyTheme(nextTheme) {
        let themeUp = nextTheme === "dark" ? darkTheme : lightTheme;
        Object.keys(themeUp).map(key => {
            let themeStyle = themeUp[key];
            console.log(`theme style values are: ${themeStyle}`);
            document.documentElement.style.setProperty(key, themeStyle);
            
        });
    }

    replayClick = () => {
        console.log('replay button clicked');
        this.setState ({ toggleDotAnimation: false })
        this.setState ({ toggleWritingAnimation: false })
        this.setState ({ })
        setTimeout(function() {
            this.setState({ toggleDotAnimation: true })
            this.setState({ toggleWritingAnimation: true })
        }.bind(this), 1)
    }
      


    render () {
        console.log(`Theme selected is ${this.state.themeSelected}`);
        
        return (
            <div className="container">
                <h1 className="title">React svg Text Animation</h1>
                <DotTextDraw 
                    thePath={path}
                    thePathRef={this.pathRef} 
                    toggleDot={this.state.toggleDotAnimation}  
                    toggleWriting={this.state.toggleWritingAnimation}
                />
                <div className="button-wrapper">
                <button onClick={this.themeClick.bind(this)} className="themeButton">Alter Theme</button>
                <button onClick={this.replayClick.bind(this)} className="replayButton">Replay</button>
                </div>
            </div>
        );
    }
}

export default DotDraw;