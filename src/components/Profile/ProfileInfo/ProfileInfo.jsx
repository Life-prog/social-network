import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
const ProfileInfo = (props) => {

  if (!props.profile){
    return <Preloader/>
  }

  return ( 
    <div>
      <div>
        <img src='https://p.bigstockphoto.com/vVu7XprxSayr867oA3KQ_bigstock-Colorful-fruit-pattern-of-fres-282127069.jpg' />
      </div>
      <div className = {s.descriptionBlock}>
        <img src = {props.profile.photos.large}/>
        Avatar + description
    </div>

    </div>
  )
}
export default ProfileInfo;