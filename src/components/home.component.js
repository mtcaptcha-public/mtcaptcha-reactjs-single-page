import React from "react";

export default function Home({ setToken }){
var logout=function(){
localStorage.removeItem('token')
setToken("")
}
    return (
<div>
                <h3>Hi MTCaptcha</h3>
            <p>This is the secret content. Only logged in users can see that!</p>
            <button onClick={logout}>Logout</button>
</div>

    );
}
