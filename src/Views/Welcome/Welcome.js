import React from 'react';
import Container from './Component/Container/Container';
import OuterContainer from './Component/OuterContainer/OuterContainer';
import InnerContainer from './Component/InnerContainer/InnerContainer';
import Logo from './Component/Image/Image';
import LogoText from './Component/LogoText/LogoText';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            finished: false,
            index: 0
        };
        this.timer = this.timer.bind(this);
    }


    componentDidMount(){
        if(this.props.data.length === 0) {
            this.setState({finished: true});
        } else {
            this.timer(0);
        }
    }

    timer(i) {
        const dur = this.props.loopDuration ? this.props.loopDuration : 1000;
        this.setState({index: i});
        if(i < this.props.data.length - 1) {
            setTimeout( () => this.timer(i+1), dur);
        } else {
            setTimeout( () => this.setState({finished: true}), dur);
        }
        
    }


    render() {
        // const {
        //     image,
        //     text = '',
        //     imageAnimation = 'rotateIn',
        //     textAnimation = 'fadeInDown',
        //     backgroundColor = 'whitesmoke',
        //     textColor = 'black'
        //     } = this.props.data[this.state.index];

            
        //    const prevBackColor = this.state.index !== 0 ? this.props.data[this.state.index - 1 ].backgroundColor : backgroundColor;


        return(
            <Welcome
            data={
                    [
                        {
                        "backgroundColor": "rgb(73, 49, 91)",
                        "textColor": "#EE79EA",
                        "imageAnimation": "flipInX",
                     //   "image": require('./images/1.png')
                        },
                        {
                        "backgroundColor": "rgb(252, 187, 19)",
                        "textColor": "#754600",
                        "text": "My App",
                        "imageAnimation": "slideInUp",
                        "textAnimation": "slideInLeft",
                      //  "image": require('./images/2.png')
                        },
                        {
                        "backgroundColor": "rgb(156, 196, 76)",
                        "textColor": "#344115",
                        "text": "Green Elephant",
                       // "image": require('./images/3.png')
                        },
                        {
                        "backgroundColor": "rgb(4, 116, 188)",
                        "textColor": "#FFFFFF",
                        "text": "Save the World",
                        "textAnimation": "fadeInUp",
                       // "image": require('./images/4.png')
                        }
                    ]
            }
            />
        )
    }

}

export default Welcome;