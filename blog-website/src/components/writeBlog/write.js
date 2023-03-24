import React, { useEffect, useRef, useState } from "react";
import "./css/index.css";
import { useDispatch, useSelector } from 'react-redux';
import { publishBlogRequest } from "./redux/actions/actionCreators";

const Write = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const titleRef = useRef('');
    const descriptionRef = useRef('');
    const st = useSelector(state => state);
    useEffect(()=>{
        console.log(st) 
    },[st]);
    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    const onChangeDescription = (e) => {
        setDescription(e.target.value);

    }
    const onClick = () => {
        dispatch(publishBlogRequest(title, description));
        titleRef.current.value = '';
        descriptionRef.current.value = '';
    }

    return (
        <div className="write">
            <div className="writeContent">
                <input className='titleName' type="text" placeholder='Title' onChange={onChangeTitle} ref={titleRef} />
                <textarea className="descriptionContent" placeholder="Type your blog..." ref={descriptionRef} rows="10" cols="10" onChange={onChangeDescription}></textarea>
                <button className="saveButton" onClick={onClick}>PUBLISH</button>
            </div>
        </div>
    )
}


export default Write;