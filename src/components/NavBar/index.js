import './index.css'

const NavBar = props => {
  const {score, time} = props
  return (
    <ul className="nav-bar-container">
      <li className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="logo"
        />
      </li>
      <li className="score-time-container">
        <div className="score-container">
          <p className="score-text">Score:</p>
          <p className="score-count">{score}</p>
        </div>
        <div className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            className="timer-icon"
            alt="timer"
          />
          <div className="time-display-container">
            <p className="score-count">{time}</p>
            <p className="seconds-text">sec</p>
          </div>
        </div>
      </li>
    </ul>
  )
}
export default NavBar
