import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../reducers/userSlice";

const Avatar = ({size}) => {
    const name = useSelector(state => state.user.name);
    const url = useSelector(state => state.user.avatar);
    const dispatch = useDispatch();

    return (
        <img
            onClick={() => {
                const newUrl = prompt('Enter new avatar url');
                dispatch(userActions.changeAvatar(newUrl));
            }}
            onContextMenu={(e) => {
                e.preventDefault();
                const newName = prompt('Enter new name');
                dispatch(userActions.changeName(newName));
            }}
            className={`user-avatar ${size ?? ''}`}
            src={url}
            alt={name}
        />
    );
};

export default Avatar;