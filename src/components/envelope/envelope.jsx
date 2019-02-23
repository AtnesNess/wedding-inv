import b from 'b_';
import PropTypes from 'prop-types';
import React from 'react';

import Letter from '../letter/letter';

import sun from './sunny.svg'
import cloud from './cloud.svg'

import './envelope.scss';

const COVER_COLOR = '#fdcb6e';
const HEAD_COLOR = '#ecba5d';
const BACKCOVER_COLOR = '#ff7675';

export default class Envelope extends React.Component {
    static propTypes = {
        
    };

    state = {
        opened: false
    };

    handleAnimationEnd = () => {
        this.setState({opened: true});
    };

    render() {
        const {opened} = this.state;

        return (
            <section className={b('envelope', {opened})}>
                <div className="envelope__background">
                    <img src={sun} alt="sun" className="envelope__sun" />
                    <img src={cloud} alt="cloud" className="envelope__cloud" />
                    <img src={cloud} alt="cloud" className="envelope__cloud" />
                    <img src={cloud} alt="cloud" className="envelope__cloud" />
                    <img src={cloud} alt="cloud" className="envelope__cloud" />
                    <img src={cloud} alt="cloud" className="envelope__cloud" />
                    <img src={cloud} alt="cloud" className="envelope__cloud" />
                </div>
                <div className="envelope__sheet" onAnimationEnd={this.handleAnimationEnd}>
                    <svg
                        className="envelope__back-cover"
                        width="600"
                        height="400"
                        viewBox="0 0 160 105"
                    >
                        <g transform="translate(0, 0)">
                            <rect
                                width="158.75"
                                height="55"
                                x="0"
                                y="0.5"
                                fill={COVER_COLOR}
                            />
                            <rect
                                width="158.75"
                                height="105.83334"
                                x="0"
                                y="0.5"
                                fill={COVER_COLOR}
                                ry="10" />
                            <rect
                                width="140"
                                height="55"
                                x="10"
                                y="0.5"
                                fill={BACKCOVER_COLOR}
                            />
                        </g>
                    </svg>
                    <Letter mix="envelope__letter" />
                    <svg
                        className="envelope__front-cover"
                        width="600"
                        height="400"
                        viewBox="0 0 160 105"
                    >
                        <mask id="head-mask">
                            <rect
                                width="158.75"
                                height="105.83334"
                                x="0"
                                y="0.5"
                                fill="#ffffff"
                                ry="10" />
                            <path fill="#000000" d="M 0.27263699,0.3362463 79.37905,55.121076 159.02264,0.3362463 Z" />
                        </mask>
                        <g transform="translate(0, 0)">
                            <rect
                                mask="url(#head-mask)"
                                width="140"
                                height="105"
                                x="10"
                                y="0.5"
                                fill={COVER_COLOR}
                            />
                        </g>
                    </svg>
                    <svg
                        className="envelope__head"
                        width="600"
                        height="400"
                        viewBox="0 0 160 105"
                    >
                        <g transform="translate(0, 0)">
                            <path fill={HEAD_COLOR} d="M 0.27263699,0.3362463 79.37905,55.121076 159.02264,0.3362463 Z" />
                        </g>
                    </svg>
                </div>    
                <div className="envelope__shadow" />
            </section>
        );
    }
}
