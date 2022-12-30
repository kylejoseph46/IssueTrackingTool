import ReactIcon from '../images/ReactIcon.png'
import PythonIcon from '../images/PythonIcon.png'

function Issue({ language, errorName, errorType }) {
  /*
  Examples:
  language = Python, JavaScript, etc
  errorName = SyntaxError, TypeError
  errorName = Warning or Error
  */

  let isReact = true
  if (language === 'react') {
    isReact = true
  } else {
    isReact = false
  }

  const languageTypes = {
    react: ReactIcon,
    python: PythonIcon
  }


  return (
    <div className="issue">
      <div className="issue-details">
        <input className="checkbox" type="checkbox" />
      </div>
      <div className="issue-details">
        <img className="language-icon" height="40" width="40" src={isReact ? languageTypes.react : languageTypes.python} alt="logo" />
      </div>
      <div className="issue-details">
        <h4>{errorName}</h4>
      </div>
      <div className="issue-details">
        <h4>{errorType}</h4>
      </div>
    </div>
  )
}

export default Issue