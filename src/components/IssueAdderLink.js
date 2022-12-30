import { Link } from 'react-router-dom'


function IssueAdderLink() {

  return (
    <div className="issue-adder-link">

      <Link to='/issueadder'>
        <h2 className="redirect-to-add">Add issue</h2>
      </Link>
    </div>
  )
}

export default IssueAdderLink

