import React from 'react';
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import {errorMessageStyle,loaderContainerStyle , loaderStyle} from './styles'

const Home = () => {

  //change the api endpoint if needed,eg new data source
  const api = 'http://192.168.100.12:5000/api/blogs'
  const { isPending, data: blogs, error } = useFetch(api, { timeout: 50000 });


  return (
    <div className="Home">
      {error && <div className="errorMessage" style={errorMessageStyle}>{error}</div>}
      {isPending && <div style={loaderContainerStyle}>
          <div style={loaderStyle}></div>
        </div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
