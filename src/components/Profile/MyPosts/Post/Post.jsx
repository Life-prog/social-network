import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://sun9-68.userapi.com/impg/jlHk8Fw0y-MEoANl__MCZMESy-fNue2E-VIULQ/Di1R62TqW_0.jpg?size=483x604&quality=96&sign=0d8d6be189b8a3cc8b860d7cc22f6960&type=album'></img>
    {props.message}
    
<div>
    <span>like {props.likesCount}</span>
    </div>
    </div>
  )
}
export default Post;