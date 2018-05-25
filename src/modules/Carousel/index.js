import React from 'react'
import PropTypes from 'prop-types'

import { CSSTransition } from 'react-transition-group';

import styled, {injectGlobal} from 'styled-components';

injectGlobal`
    img{
        display: block;
        max-width: 100%;
    }
    .example-enter{
        opacity: 0;
    }
    .example-enter-active{
        opacity: 1;
        transition: opacity 300ms ease-in;
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
        this.setState({
            runAnimation: true
        });

        this.timer = setInterval(()=>{
            let {index} = this.state;

            this.setState({
                index: index >= imgList.length-1 ? 0 : ++index
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
                      timeout={300}
                      classNames="example"
                    >
                        <img className="example" src={imgSrc} key={imgSrc} />
                    </CSSTransition>
                </div>
                <button onClick={this.handleCarousel}>启动</button>
            </div>
        )
    }
}