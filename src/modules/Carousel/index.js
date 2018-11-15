import React from 'react'
import PropTypes from 'prop-types'

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styled, {injectGlobal} from 'styled-components';

injectGlobal`
    .example{
        display: block;
        max-width: 100%;
    }
    .example-enter{
        transform: translateX(100%);
    }
    .example-enter-active{
        transform: translateX(20%);
        transition: transform 3000ms ease-in;
    }
    .example-exit{
        transform: translateX(-20%);
    }
    .example-exit-active{
        transform: translateX(-100%);
        transition: transform 3000ms ease-in;
    }

`;

const imgList = [
    'https://img.99bill.com/res/i/credit-banner-yrd@2x_9bc722526e513a09.png',
    'https://img.99bill.com/res/i/credit-banner-gmmj@2x_8cce5e1b55b6cc57.png'
]

export default class Example extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            index: 0,
            runAnimation: false
        }

        this.handleCarousel = this.handleCarousel.bind(this);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    handleCarousel(){
        this.timer = setInterval(()=>{
            let {index} = this.state;

            this.setState({
                runAnimation: true,
                index: index >= imgList.length-1 ? 0 : ++index
            }, ()=>{
                setTimeout(()=>{
                    this.setState({
                        runAnimation: false
                    })
                }, 3000);
            })
        }, 3000);
    }

    render(){
        const {index, runAnimation} = this.state;

        let imgSrc = imgList[index];

        return (
            <div className="wrapper">
                <div className='carousel'>
                    <CSSTransition
                        in={runAnimation}
                        timeout={300}
                        classNames="example"
                    >
                        <img className="example" src={imgSrc} />
                    </CSSTransition>
                </div>
                <button onClick={this.handleCarousel}>启动</button>
            </div>
        )
    }
}