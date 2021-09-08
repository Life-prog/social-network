import React from 'react';
import styles from './users.module.css'
import userPhoto from '../../components/assets/images/user.png'
import { NavLink } from 'react-router-dom';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage} onClick={(e) => {props.onPageChanged(p); }}>{p}</span>
            })}
        </div>
        {props.users.map(users => <div key={users.id}>
            <span>
                <div>
                    <NavLink to = {'./profile/' + users.id}>
                    <img src={users.photos.small != null ? users.photos.small : userPhoto} className={styles.userPhoto} />
                    </NavLink>
                </div>
                {users.followed
                    ? <button onClick={() => { props.unfollow(users.id) }}>Unfollow</button>
                    : <button onClick={() => { props.follow(users.id) }}>Follow</button>}
            </span>
            <span>
                <span>
                    <div>
                        {users.name}
                    </div>
                    <div>
                        {users.status}
                    </div>
                </span>
                <span> 
                    <div>{"users.location.city"}</div>
                    <div>{"users.location.country"}</div>
                </span>
            </span>
        </div>)}
    </div>
}

export default Users;