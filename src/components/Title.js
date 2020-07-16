import React, { Component } from 'react';

const TITLES = [
    'Python',
    'C#',
    'Java',
    'Delphi'
]
// Class component
class Title extends Component {
    state = { titleIndex:0, fadeIn: false };

    // Lifecycle component
    componentDidMount() {
        this.timeout = setTimeout( () => { this.setState({ fadeIn: false})}, 2000);
        this.animateTitles();
    }
    // Lifecycle component
    componentWillUnMount() {
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }
    // Helper method = que é um método auxiliar no desenvolvimento do componente
    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            
            this.setState({ titleIndex, fadeIn: true })

            this.timeout = setTimeout( () => { this.setState({ fadeIn:false})}, 2000);
        }, 4000);
    }
    // Lifecycle component
    render() {
        const { titleIndex, fadeIn } = this.state;
        
        const title = TITLES[this.state.titleIndex];
        
        return (
            <p className={ fadeIn ? 'title-fade-in':'title-fade-out'}>Eu sei programar em {title}</p>
        )
    }
}

export default Title;