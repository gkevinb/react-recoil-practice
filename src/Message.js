import React from 'react'
import { useRecoilValue } from 'recoil';
import { userState } from './atoms/userState';

function Message() {
    /* Read only protection, because it doesn't let you change state */
    const user = useRecoilValue(userState);

    return (
        <div>
            {user.name} said blah bla
        </div>
    )
}

export default Message
