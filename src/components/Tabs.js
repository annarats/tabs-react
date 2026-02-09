const Tabs = ({tabs, activeTab, onTabClick}) => {
    return(
        <div className="tabs">
            <div className="tab-buttons">
                {tabs.map(tab => (
                    <button
                    key={tab.id}
                    onClick={() => onTabClick(tab.id)}
                    className={activeTab === tab.id ? 'active' : ''}>
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                {tabs
                .filter(tab => tab.id === activeTab)
                .map (tab => (
                    <div key={tab.id}>
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tabs;