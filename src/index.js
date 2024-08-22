import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Myreactgithubinterview from './InterviewQuestions/GithubInterview/Myreactgithubinterview';
import FaComponentsInterview from './InterviewQuestions/FaqQuestion/FaComponentsInterview';
import ModelVorlay from './InterviewQuestions/Model-Vorlay/ModelVorlay';
import App from './InterviewQuestions/Currency-convert/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Myreactgithubinterview />
    {/* <FaComponentsInterview />
    <ModelVorlay /> */}
  </React.StrictMode>
);

