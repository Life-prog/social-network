import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {

    return (
        <div>
        {/* <div><img src='https://p.bigstockphoto.com/vVu7XprxSayr867oA3KQ_bigstock-Colorful-fruit-pattern-of-fres-282127069.jpg' /></div> */}
        <div className={s.dialog}>{props.message}</div>
        </div>
    )
}

export default Message;