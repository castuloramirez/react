import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar"/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                </div>
                <div className="metadate">
                    <span className="date">Today at 23:55</span>
                </div>
                <div className="text">
                    Really good course!
                </div>
            </div>
        </div>

    );
};

ReactDOM.render(<App></App>, document.querySelector('#root'))
