import b from 'b_';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import qs from "query-string";

import Spin from '../spin/spin';

import palette from './palette.png';

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
        const {location: {search}} = window;
        const {count} = qs.parse(search);

        if (status === null) {
             return (
                <div className={cx('letter', mix)}>
                     <h1 className="letter__title">Приглашение на свадьбу</h1>
                    <p className="letter__text">
                        <p>
                            Хотим поделится радостью — 08.06.19 состоится наша свадьба!
                        </p>
                        <p>
                            Приглашаем Вас разделить с нами счастливое событие.
                        </p>
                        <p>
                            Пожалуйста, подтвердите свое присутствие до 08.05.19
                        </p>
                    </p>
                    {loading
                        ? (
                            <div className="letter__buttons">
                                <Spin mix="letter__spin" />
                            </div>
                        ) : (
                            <section className="letter__buttons">
                                <button
                                    onClick={this.handleReject}
                                    className={b('letter', 'button', {type: 'reject'})}
                                >
                                    Отклонить
                                </button>
                                <button
                                    onClick={this.handleAccept}
                                    className={b('letter', 'button', {type: 'approve'})}
                                >
                                    Принять
                                </button>
                            </section>
                        )}
                </div>
            );
        } else if (status === 'approved') {
            return (
                <div className={cx('letter', mix)}>
                    <h1 className="letter__title">Отлично!</h1>
                    <p className="letter__text">
                        <p>
                            Теперь мы знаем, что Вы придете.
                            Ждем 08 июня в 16:00 в банкетном зале "Пятница" по адресу
                            г. Екатеринбург, ул. Сибирский тракт, 12
                            (Бизнес-комплекс "Квартал"), строение 1А.
                            <br />
                            Убедительная просьба прийти соответствуя цветовой палитре:
                            <img  className="letter__palette" src={palette} />
                        </p>
                    </p>
                </div>
            );
        } else if (status === 'rejected') {
            return (
                <div className={cx('letter', mix)}>
                    <h1 className="letter__title">Очень жаль =(</h1>
                    <p className="letter__text">
                        <p>
                            Мы бы очень хотели, чтобы Вы пришли...
                        </p>
                        <p>
                            И мы все еще надеемся, что Вы сможете
                            пристутствовать на нашей свадьбе.
                        </p>
                        <p>
                            Если передумаете - дайте нам знать!
                        </p>
                    </p>
                </div>
            );
        } else if (status === 'error') {
            return (
                <div className={cx('letter', mix)}>
                    <h1 className="letter__title">Что то пошло не так...</h1>
                    <p className="letter__text">
                        <p>
                            Сайт сломался и не записал данные о Вашем присутствии
                        </p>
                        <p>
                            Пожалуйста позвоните нам, чтобы мы отметили вас в списке гостей, если Вы собираетесь прийти
                        </p>
                    </p>
                </div>
            );
        }
        return null;

    }
}
