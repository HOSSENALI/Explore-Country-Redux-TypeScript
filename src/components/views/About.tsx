import React, { memo } from 'react'
const About = () => {
    console.log("about");
    return (<h1>About</h1>);
}
//memo can prevent unnecessary rendering
export default memo(About);