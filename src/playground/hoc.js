import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
    </div>
);

// const withAdminWarning = (WrappedComponent) => {
//     return () => (
//         <div>
//         {props.isAdmin && <p>This is private info. Please don't share</p>}
//         <WrappedComponent {...props}/>
//         </div>
//     )
// }

const requireAuthentification = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>This is private info. Please log in.</p>}
        
        </div>
    )
}

// const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentification(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info='There are the details'/>, document.getElementById('app'));