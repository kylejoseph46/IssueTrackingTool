import Dropdown from 'react-bootstrap/Dropdown';
import { useRef } from 'react'

function Taskbar() {

    const searchProjectRef = useRef()

    return (
        <div className="taskbar">
            <div className="taskbar-items">
                <button className="resolve-issues-btn">✓ Resolve selected issues</button>
            </div>
            <div className="taskbar-items">
                <input className="project-search-input" ref={searchProjectRef} type="text" placeholder="Error Name                🔍" />
            </div>
        </div>
    )
}

export default Taskbar