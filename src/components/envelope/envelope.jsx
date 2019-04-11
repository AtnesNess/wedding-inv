import b from 'b_';
import React from 'react';
import qs from 'query-string';

import Letter from '../letter/letter';

import cover from './cover.jpg';
import leaf1 from './leaf1.png';
import leaf2 from './leaf2.png';
import leaf3 from './leaf3.png';
import leaf4 from './leaf4.png';
import leaf5 from './leaf5.png';
import leaf6 from './leaf6.png';
import leaf7 from './leaf7.png';
import leaves1 from './leaves1.png';
import leaves2 from './leaves2.png';


import './envelope.scss';

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
        const {location: {search}} = window;
        const {user} = qs.parse(search);

        return (
            <section className={b('envelope', {opened})}>
                <div className="envelope__background">
                    <div className="envelope__leaves-back-group"> 
                        <img className={b('envelope', 'leaf', {floating: true})} src={leaf4} alt="leaf" />
                        <img className={b('envelope', 'leaf', {floating: true})} src={leaf6} alt="leaf" />
                        <img className={b('envelope', 'leaf', {floating: true})} src={leaf7} alt="leaf" />
                        <img className={b('envelope', 'leaf', {floating: true})} src={leaf4} alt="leaf" />
                        <img className={b('envelope', 'leaf', {floating: true})} src={leaf6} alt="leaf" />
                        <img className={b('envelope', 'leaf', {floating: true})} src={leaf7} alt="leaf" />
                        <img className={b('envelope', 'leaf', {floating: true})} src={leaf5} alt="leaf" />
                        <img className={b('envelope', 'leaf', {floating: true})} src={leaf7} alt="leaf" />
                        <img className={b('envelope', 'leaf', {floating: true})} src={leaf4} alt="leaf" />
                        <img className={b('envelope', 'leaf', {floating: true})} src={leaf6} alt="leaf" />
                        <img className={b('envelope', 'leaf', {floating: true})} src={leaf7} alt="leaf" />
                        <img className={b('envelope', 'leaf', {floating: true})} src={leaf4} alt="leaf" />
                        <img className={b('envelope', 'leaf', {floating: true})} src={leaf6} alt="leaf" />
                        <img className={b('envelope', 'leaf', {floating: true})} src={leaf7} alt="leaf" />
                        <img className={b('envelope', 'leaf', {floating: true})} src={leaf5} alt="leaf" />
                        <img className={b('envelope', 'leaf', {floating: true})} src={leaf7} alt="leaf" />
                    </div>
                </div>
                <div className="envelope__sheet" onAnimationEnd={this.handleAnimationEnd}>
                    <svg className="envelope__back-cover" width="690" height="391" viewBox="0 0 690 391" fill="none">
                        <path d="M0 0H690V386C690 388.761 687.761 391 685 391H5C2.23858 391 0 388.761 0 386V0Z" fill="#fff" />   
                        <path d="M0 0H690V386C690 388.761 687.761 391 685 391H5C2.23858 391 0 388.761 0 386V0Z" fill="url(#cover-img)" />
                        <path d="M344.496 116L1 1H691L344.496 116Z" stroke="#F3F3F3" fill="#F8F8F8" />
                        <defs>
                            <pattern id="cover-img" patternUnits="userSpaceOnUse" width="690" height="391">
                                <image href={cover} x="0" y="0" width="690" height="391" />
                            </pattern>
                        </defs>
                    </svg>
                    <div className="envelope__letter-container">
                        <Letter mix="envelope__letter" />
                    </div>
                    <svg className="envelope__front-cover" width="690" height="391" viewBox="0 0 690 391" fill="none">
                        <defs>
                            <mask id="head-mask">
                                <path d="M0 0H690V386C690 388.761 687.761 391 685 391H5C2.23858 391 0 388.761 0 386V0Z" fill="#ffffff" />
                                <path d="M344.496 116L1 1H691L344.496 116Z" fill="#000000" />
                            </mask>
                        </defs>
                        <path
                            d="M0 0H690V386C690 388.761 687.761 391 685 391H5C2.23858 391 0 388.761 0 386V0Z"
                            mask="url(#head-mask)"
                            fill="#fff" 
                        />
                        <path
                            d="M0 0H690V386C690 388.761 687.761 391 685 391H5C2.23858 391 0 388.761 0 386V0Z"
                            mask="url(#head-mask)" 
                            fill="url(#cover-img)" 
                        />
                    </svg>
                    <svg className="envelope__head"  width="690" height="391" viewBox="0 0 690 391" fill="none">
                        <path d="M344.496 116L1 1H691L344.496 116Z" stroke="#F3F3F3" fill="#fff" />
                        <path d="M344.496 116L1 1H691L344.496 116Z" stroke="#F3F3F3" fill="url(#cover-img)" />
                    </svg>
                    <section className="envelope__signature">
                         <label className="envelope__signature-label">Отправитель:</label>
                         <div>Несмияновы Артем и Елена</div>
                         <label className="envelope__signature-label">Получатель:</label>
                         <div>{user || 'Любопытный человек'}</div>
                    </section>
                </div>    
                <div className="envelope__foreground">
                    <div className="envelope__right-bottom-leaves">
                        <img className={b('envelope', 'leaf')} src={leaf1} alt="leaf" />
                        <img className={b('envelope', 'leaf')} src={leaf2} alt="leaf" />
                        <img className={b('envelope', 'leaf')} src={leaf3} alt="leaf" />
                    </div>
                    <div className="envelope__left-bottom-leaf">
                        <img className={b('envelope', 'leaf')} src={leaves2} alt="leaves" />
                    </div>
                    <div className="envelope__left-top-leaf">
                        <img className={b('envelope', 'leaf')} src={leaves1} alt="leaves" />
                    </div>
                    <div className="envelope__leaves-front-group"> 
                        <img className={b('envelope', 'leaf', {floating: true})} src={leaf7} alt="leaf" />
                        <img className={b('envelope', 'leaf', {floating: true})} src={leaf5} alt="leaf" />
                        <img className={b('envelope', 'leaf', {floating: true})} src={leaf7} alt="leaf" />
                        <img className={b('envelope', 'leaf', {floating: true})} src={leaf4} alt="leaf" />
                        <img className={b('envelope', 'leaf', {floating: true})} src={leaf6} alt="leaf" />
                        <img className={b('envelope', 'leaf', {floating: true})} src={leaf6} alt="leaf" />
                        <img className={b('envelope', 'leaf', {floating: true})} src={leaf4} alt="leaf" />
                    </div>
                </div>
            </section>
        );
    }
}
