import b from 'b_';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import qs from "query-string";

import Spin from '../spin/spin';

import './letter.scss';

export default class Letter extends React.PureComponent {
    static propTypes = {
        mix: PropTypes.string
    };

    state = {
        loading: false,
        status: null
    };

    handleAccept = () => {
        const {location: {search}} = window;
        const {count, user} = qs.parse(search);

        this.setState({
            loading: true
        });

        fetch('/api/guest/', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({user, count, accept: true})
        }).then((response) => {
            this.setState({
                loading: false,
                status: response.status === 200 ? 'approved' : 'error'
            })
        })
    };

     handleReject = () => {
        const {location: {search}} = window;
        const {count, user} = qs.parse(search);

        this.setState({
            loading: true
        });


         fetch('/api/guest/', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({count, user, accept: false})
        }).then((response) => {
            this.setState({
                loading: false,
                status: response.status === 200 ? 'rejected' : 'error'
            })
        })
    };

    render() {
        const {mix} = this.props;
        const {loading, status} = this.state;

        if (status === null) {
             return (
                <div className={cx('letter', mix)}>
                    <section className={b('letter', 'text', {main: true, center: true})}>
                        8 июня 2019 — день, когда мы станем семьей. 
                        Приглашаем вас стать частью этого особого события
                    </section>
                    <section className={b('letter', 'text', {center: true})}>
                        Пожалуйста, подтвердите свое <br /> присутствие до 08.05.19
                    </section>
                    {loading
                        ? (
                            <div className="letter__buttons">
                                <Spin mix="letter__spin" />
                            </div>
                        ) : (
                            <section className="letter__buttons">
                                <button
                                    onClick={this.handleAccept}
                                    className={b('letter', 'button', {type: 'approve'})}
                                >
                                    Принять
                                </button>
                                <button
                                    onClick={this.handleReject}
                                    className={b('letter', 'button', {type: 'reject'})}
                                >
                                    Отклонить
                                </button>
                            </section>
                        )}
                </div>
            );
        } else if (status === 'approved') {
            return (
                <div className={cx('letter', mix)}>
                    <h1 className="letter__title">Отлично!</h1>
                    <section className="letter__text">
                        Теперь мы знаем, что вы придете.
                        <div className="letter__devider" />
                        Ждем 8 июня в 16:00 в банкетном зале «Пятница», по адресу 
                        г. Екатеринбург, ул. Сибирский тракт, 12 (Бизнес-комплекс «Квартал»), строение 1А.
                        <div className="letter__devider" />
                        <a 
                            className="letter__link" 
                            href="https://yandex.ru/maps/54/yekaterinburg/?ll=60.651445%2C56.822449&mode=search&oid=90769320962&ol=biz&z=18"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Открыть в Яндекс.Картах 
                        </a>
                    </section>
                    <div className="letter__devider" />
                    <section className="letter__text">
                        Нам будет приятно, если ваш наряд будет соответствовать данной цветовой палитре:
                        <div className="letter__devider" />
                        <div className="letter__palette">
                            <div className="letter__palette-color" />
                            <div className="letter__palette-color" />
                            <div className="letter__palette-color" />
                            <div className="letter__palette-color" />
                            <div className="letter__palette-color" />
                        </div>
                    </section>
                </div>
            );
        } else if (status === 'rejected') {
            return (
                <div className={cx('letter', mix)}>
                    <h1 className="letter__title">Очень жаль =(</h1>
                    <section className={b('letter', 'text', {center: true, only: true})}>
                        Мы бы очень хотели, чтобы Вы пришли...
                        <div className="letter__devider" />
                        И мы все еще надеемся, что Вы сможете
                        пристутствовать на нашей свадьбе.
                        <div className="letter__devider" />
                        Если передумаете - дайте нам знать!
                    </section>
                </div>
            );
        } else if (status === 'error') {
            return (
                <div className={cx('letter', mix)}>
                    <h1 className="letter__title">Что то пошло не так...</h1>
                    <section className={b('letter', 'text', {center: true, only: true})}>
                        Сайт сломался и не записал данные о Вашем присутствии
                        <div className="letter__devider" />
                        Пожалуйста позвоните нам, чтобы мы отметили вас в списке гостей, если Вы собираетесь прийти
                    </section>
                </div>
            );
        }
        return null;

    }
}
