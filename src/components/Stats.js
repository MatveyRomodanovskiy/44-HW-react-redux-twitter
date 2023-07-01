import React from 'react';
import Avatar from "./Avatar";
import {useDispatch, useSelector} from "react-redux";
import {statsActions} from "../reducers/statsSlice";

const Stats = () => {
    const user = useSelector(state => state.user.name);
    const followers = useSelector(state => state.stats.followers);
    const following = useSelector(state => state.stats.following);
    const dispatch = useDispatch();

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
            </div>
            <div className={'stats'}>
                <div
                    onClick={() => dispatch(statsActions.changeFollowers(1))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(statsActions.changeFollowers(-1));
                    }}
                >Followers: {followers}</div>
                <div
                    onClick={() => dispatch(statsActions.changeFollowing(1))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(statsActions.changeFollowing(-1));
                    }}
                >Following: {following}</div>
            </div>
        </div>
    );
};

export default Stats;