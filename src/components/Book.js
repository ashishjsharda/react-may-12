import React from "react";
export class Book extends React.Component {
    render() {
        const {title,author} = this.props;
        return(
          <div>
              <h1>{title}</h1>
              <p>{author}</p>
          </div>
        );
    }
}