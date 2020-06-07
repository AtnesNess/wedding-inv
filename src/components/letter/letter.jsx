import b from 'b_';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import qs from "query-string";


import Spin from '../spin/spin';
import date from './date.svg';
import cocktail from './cocktail.svg';

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
                    <section className={b('letter', 'text', {center: true})}>
                        Мы будем рады видеть вас среди гостей праздничного вечера в честь нашей свадьбы
                    </section>
                    <div className="letter__devider" />
                    <section className={b('letter', 'text', {center: true, large: true, highlight: true})}>
                        <img src={date} alt="date" />
                    </section>
                    <div className="letter__devider" />
                    <section className={b('letter', 'text', {center: true})}>
                        Зал приемов Синара-центр, <br /> г. Екатеринбург, ул. Верх-Исетский бульвар, 15
                    </section>
                    <section className={b('letter', 'text', {center: true})}>
                        Сбор гостей в 16:30
                    </section>
                    <section className={b('letter', 'text', {center: true})}>
                        Пожалуйста, подтвердите свое присутствие до 15.07.20
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
                                    Отказаться
                                </button>
                            </section>
                        )}
                </div>
            );
        } else if (status === 'approved') {
            return (
                <div className={cx('letter', mix)}>
                    <section className={b('letter', 'text', {center: true})}>
                        Dress-code
                    </section>
                    <section className={b('letter', 'text', {center: true, large: true, highlight: true})}>
                        <img src={cocktail} alt="cocktail" />
                    </section>
                    <section className={b('letter', 'text', {center: true})}>
                        Нам будет приятно, если дамы выберут наряды пастельных оттенков
                        <div className="letter__devider" />
                        <div className={b('letter', 'palette', {type: 'woman'})}>
                            <div className="letter__palette-color" />
                            <div className="letter__palette-color" />
                            <div className="letter__palette-color" />
                            <div className="letter__palette-color" />
                            <div className="letter__palette-color" />
                        </div>
                    </section>

                    <section className={b('letter', 'text', {center: true})}>
                        А джентльмены предпочтут костюмы следующих цветов
                        <div className="letter__devider" />
                        <div className={b('letter', 'palette', {type: 'man'})}>
                            <div className="letter__palette-color" />
                            <div className="letter__palette-color" />
                            <div className="letter__palette-color" />
                            <div className="letter__palette-color" />
                            <div className="letter__palette-color" />
                        </div>
                    </section>
                    <section className={b('letter', 'text', {center: true})}>
                        Приветствуем позитивное настроение, праздничный вид и подарки в любой конвертируемой валюте
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
                        <div className="letter__devider" />
                        30.07.20 мы будем вычеркивать гостей, которые отклонили приглашение,
                        поэтому если вы сделали это случайно, то пожалуйста обновите страницу и
                        примите приглашение.
                    </section>
                </div>
            );
        } else if (status === 'error') {
            return (
                <div className={cx('letter', mix)}>
                    <h1 className="letter__title">Что-то пошло не так...</h1>
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
