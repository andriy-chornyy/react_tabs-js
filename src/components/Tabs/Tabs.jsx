import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {

  return (
    <ul>
      {tabs.map(tab => (
        <li
          data-cy="Tab"
          key={tab.id}
          onClick={() => {
            if (tab.id !== activeTabId) {
              onTabSelected(tab.id);
            }
          }}
          className={cn({ "is-active": tab.id === activeTabId})}
        >
          <a href={`#${tab.id}`} data-cy="TabLink" >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  )
};
