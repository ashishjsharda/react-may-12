import React  from "react";
import {Book} from "./components/Book.js";

class App extends React.Component {
    render() {
        const books=[
            {title:'Java', author:'Ashish'},
            {title:'Javascript', author:'James'},
            {title:'React', author:'Richard'}

        ]
        return(
            <div>
                <h1>List of Books</h1>
                {books.map((book,index)=>(
                    <Book key={index} title={book.title} author={book.author} />
                ))}
            </div>
        );
    }
}
export default App;