import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color= '#FF0000'
            progress={this.state.progress}
          />
          <Routes>
            {/* Redirect /newsApp to /newsApp/general */}
            <Route path="/newsApp" element={<Navigate to="/newsApp/general" />} />
            {/* Define routes under /newsApp */}
            <Route path="/newsApp/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="us" category="general" />} />
            <Route path="/newsApp/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="us" category="business" />} />
            <Route path="/newsApp/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
            <Route path="/newsApp/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="us" category="health" />} />
            <Route path="/newsApp/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="us" category="science" />} />
            <Route path="/newsApp/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="us" category="sports" />} />
            <Route path="/newsApp/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

