import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ id, title, info }) => {

    const [show, setShow] = useState(false);
    const setBtn = () => {
        setShow(!show)
    }
    return (
        <section className="info" >
            <article className="question">
                <header>
                    <h4>{title}</h4>
                    <button className="btn" onClick={
                        setBtn
                    }>
                        {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </button>
                </header>
                {show ? <p>{info}</p> : ''}
            </article>
        </section>
    )

}
export default Question;