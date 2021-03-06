import dbRef from '../dbRef';
import { generate } from 'shortid';
import { setActiveChat } from '../chat/actions';
import {stringToColour} from '../util/playWithColor';


export const addProfile = (userId) => ({ dispatch }) => {
    dbRef
        .child('profiles')
        .on('child_added', d => {
            const id = d.key;
            const profile = {...d.val(), color: stringToColour(id)};
            if (id !== userId) {
                dispatch({ type: 'ADD_PROFFILE', id, profile });
            }

        }

        );
    return { type: 'LISTEN_ADD_PROFFILE' };
};

export const profileSelect = (profile) => ({ dispatch, getState }) => {
    const user_1 = getState().profile;
    const userId_1 = user_1.id;
    const user_2 = profile;
    const userId_2 = user_2.id;
    dbRef
        .child('members')
        .once('value', d => {
            const members = d.val();
            let chat = null;
            for (let key in members) {
                if (Object.keys(members[key]).length === 2 && members[key][userId_1] && members[key][userId_2]) {
                    chat = {
                        id: key,
                        members: {
                            [userId_1]: user_1,
                            [userId_2]: user_2
                        }
                    };
                    break;
                }
            }
            if (!chat) {
                chat = {
                    //id: generate(),
                    //dirty way to solve conflict on two users starting conversation at same time
                    id: userId_1 > userId_2 ? userId_1 + userId_2 : userId_2 + userId_1,
                    members: {
                        [userId_1]: user_1,
                        [userId_2]: user_2
                    }
                };
            }
            dispatch(setActiveChat(chat));
            return { type: 'SELECT_PROFILE_CHAT' };
        });

    return { type: 'SELECT_PROFILE' };
};