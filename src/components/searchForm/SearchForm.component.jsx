import React, { useState } from "react";

const SearchForm = ({ setVideoQuery, videoQuery }) => {
  const [text, setText] = useState(videoQuery);
  const handleValueChange = (e) => {
    setText(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setVideoQuery(text);
  };
  return (
    <nav className="bg-danger py-2 d-md-flex d-block">
      <p className="lead text-light my-auto mx-3 font-weight-bold">
        Youtube Clone
      </p>

      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <form className="form-inline" onSubmit={handleFormSubmit}>
              <input
                className="form-control w-75 rounded-0"
                type="text"
                name="text"
                value={text}
                onChange={handleValueChange}
                placeholder="search video..."
              />
              <button className="btn btn-dark w-25 rounded-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SearchForm;
