import React, { useState } from 'react';
import {IoIosAdd} from "react-icons/io";

function CreateArea({ SubmitButton, onAdd }) {
    const[isExpanded, setExpanded]=useState(false);
    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    function handelChange(e) {
        const { name, value } = e.target
        setNote(preValue => {
            return {
                ...preValue,
                [name]: value,
            }
        })
    }

    function handelExpanded(){
        setExpanded(true);
    }

    function SubmitButton(event) {
        onAdd(note);
        setNote({
            title:"",
            content:"",
        });
        event.preventDefault();

    }
    return (
        <div>
            <form>
                {isExpanded && (
                    <input value={note.title}
                    type="text"
                    placeholder="Title"
                    name="title"
                    onChange={handelChange} 
                     />
                )}
                <p>
                    <textarea value={note.content}
                    onClick={handelExpanded}
                        name="content"
                        placeholder="Take a note..."
                        onChange={handelChange}
                        rows={isExpanded ? 3:1}
                    >

                    </textarea>
                </p>
                <button onClick={SubmitButton} ><IoIosAdd size={35}/></button>
            </form>
        </div>
    );
}

export default CreateArea;