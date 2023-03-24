import React, { useContext, useEffect, useRef, useState } from "react";
import "./css/index.css";
import { useDispatch, useSelector } from 'react-redux';
import { publishBlogRequest } from "./redux/actions/actionCreators";
import { UserContext } from "../contexts/user.context";

const Write = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [hashtags, setHashtags] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [readTime, setReadTime] = useState('');
    const [oneLiner, setOneLiner] = useState('');
    const dispatch = useDispatch();
    const titleRef = useRef('');
    const descriptionRef = useRef('');
    const hashtagsRef = useRef('');
    const imageUrlRef = useRef('');
    const oneLinerRef = useRef('');
    const readTimeRef = useRef('');
    const st = useSelector(state => state);
    const { user, setUser } = useContext(UserContext);



    useEffect(() => {
        console.log(st)
    }, [st]);

    

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    }
    const onChangeHashtags = (e) => {
        setHashtags(e.target.value);
    }
    const onChangeImageUrl = (e) => {
        setImageUrl(e.target.value);
    }
    const onChangeReadTime = (e) => {
        setReadTime(e.target.value);
    }
    const onChangeOneLiner = (e) => {
        setOneLiner(e.target.value);
    }
    const onClick = () => {
        dispatch(publishBlogRequest(title, description, user,hashtags,imageUrl,oneLiner,readTime));
        titleRef.current.value = '';
        descriptionRef.current.value = '';
        hashtagsRef.current.value = '';
        imageUrlRef.current.value = '';
        oneLinerRef.current.value = '';
        readTimeRef.current.value = '';
    }

    return (
        <div className="write">
            <div className="writeContent">
                <input className='titleName' type="text" placeholder='Title' onChange={onChangeTitle} ref={titleRef} />
                <textarea className="descriptionContent" placeholder="Type your blog..." ref={descriptionRef} rows="10" cols="10" onChange={onChangeDescription}></textarea>
                <input className="hashtagsContent" type="text" placeholder="Hashtags......" ref={hashtagsRef} onChange={onChangeHashtags}/>
                <input className="imageUrlContent" type="url" placeholder="Image url" ref={imageUrlRef} onChange={onChangeImageUrl}/>
                <input className="oneLinerContent" type="text" placeholder="Oneliner" ref={oneLinerRef} onChange={onChangeOneLiner}/>
                <input className="readTimeContent" type="text" placeholder="ReadTime" ref={readTimeRef} onChange={onChangeReadTime}/>
                <button className="saveButton" onClick={onClick}>PUBLISH</button>
            </div>
        </div>
    )
}


export default Write;