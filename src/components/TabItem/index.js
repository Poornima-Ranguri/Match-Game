import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, onChangeTabItem} = props
  const {tabId, displayText} = tabDetails

  const activeClassName = isActive ? 'active-btn' : 'btn'

  const onClickTabItem = () => {
    onChangeTabItem(tabId)
  }

  return (
    <li className="tab-item">
      <button
        type="button"
        className={activeClassName}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
