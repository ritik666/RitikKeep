import REACT,{useState} from "react";
import Header from "./Component/Header";
import CreateArea from "./Component/CreateArea";
import Notes from "./Component/Notes";
import Count from "./Component/Count";

function App(props) {
    const [notes, setNotes] = useState([])

    function addNote(newNote) {
        setNotes(preValue => {
            return [...preValue, newNote]
        });
    }

function deleteNotes(id){
    setNotes(preValue =>{
        return [...preValue.filter((note,index) =>  
            index !== id )]
    })
}


    return (
        <div className="App">
            <Header />
            <Count count={notes.length === 0? "Empty": `Showing ${notes.length} Notes  in Database ` } />
            <CreateArea onAdd={addNote} />
            {notes.map((note, index) => (
                <Notes
                    key={index}
                    id={index}
                    title={note.title}
                    content={note.content}
                    onDelete={deleteNotes}
                />
            ))}

        </div>
    );
}

export default App;