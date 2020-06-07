import b from 'b_';
import React from 'react';
import qs from 'query-string';

import Letter from '../letter/letter';

import './envelope.scss';

export default class Envelope extends React.Component {
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
                <div className="envelope__sheet" onAnimationEnd={this.handleAnimationEnd}>
                    <svg className="envelope__back-cover" width="690" height="391" viewBox="0 0 690 391" fill="none">
                        <path d="M0 0H690V386C690 388.761 687.761 391 685 391H5C2.23858 391 0 388.761 0 386V0Z" fill="#fff" />
                        <path d="M344.496 116L1 1H691L344.496 116Z" stroke="#F3F3F3" fill="#F8F8F8" />
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
                        <div className="envelope__signature-line">
                            <div className="envelope__signature-value">Михаил и Юлия</div>
                            <label className="envelope__signature-label">Отправитель</label>
                        </div>
                        <div className="envelope__signature-line">
                            <div className="envelope__signature-value">{user || 'Любопытный человек'}</div>
                            <label className="envelope__signature-label">Получатель</label>
                         </div>
                    </section>
                </div>
            </section>
        );
    }
}
