import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'

function IssueAdder() {
    //Stores the programming languages, error name, and type as lists.
    const [language, setLanguage] = useState([])
    const [name, setName] = useState([])
    const [type, setType] = useState([])

    const languageRef = useRef()
    const nameRef = useRef()
    const typeRef = useRef()

    const onSubmit = async (e) => {
        e.preventDefault()
        //Updating the state of all three variables.
        const languageValue = languageRef.current.value
        if (languageValue === "") {
            return
        }
        setLanguage(prev => {
            return [...prev, languageValue]
        })
        languageRef.current.value = ""


        const nameValue = nameRef.current.value
        if (nameValue === "") {
            return
        }
        setName(prev => {
            return [...prev, nameValue]
        })
        nameRef.current.value = ""


        const typeValue = typeRef.current.value
        if (typeValue === "") {
            return
        }
        setType(prev => {
            return [...prev, typeValue]
        })
        typeRef.current.value = ""

        alert("Issue has been added!")

        //Want to pass this data to the backend, so I can update my issue list with the backend's data.
        const myData = {
            serverLanguage: language,
            serverName: name,
            serverType: type
        }
    }

    return (
        <div>
            <Link to='/'>
                <h2>Go to issue table</h2>
            </Link>

            <div className="issue-adder">
                <form onSubmit={onSubmit}>
                    <div className="issue-form">
                        Programming Language: <input ref={languageRef} type="text" />
                    </div>
                    <div className="issue-form">
                        Error Name: <input ref={nameRef} type="text" />
                    </div>
                    <div className="issue-form">
                        Error Type: <input ref={typeRef} type="text" />
                    </div>
                    <div className="issue-form">
                        <button type="submit">Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default IssueAdder