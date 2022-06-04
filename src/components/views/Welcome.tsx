import React, { memo } from 'react'
const Welocme = () => {
    console.log("welcome is redering");
    return (<h1>Welcome to my channel.......</h1>);
}

export default memo(Welocme); //memo can prevent unnecessary rendering