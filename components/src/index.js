import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning</h4>
                <div>Are you sure you want to do this?</div>
            </ApprovalCard>
            <ApprovalCard> 
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    text="Nice blog post" 
                    image={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard> 
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 8:00PM" 
                    text="I really think this is useful stuff. Thanks!" 
                    image={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard> 
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Yesterday at 2:45PM" 
                    text="Nice try bud" 
                    image={faker.image.avatar()} 
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);