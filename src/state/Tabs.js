import React from "react";
/*
const tabsProp = [
  {
    name: "First tab",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque."
  },
  {
    name: "Second tab",
    content:
      "Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    name: "Third tab",
    content:
      "Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur."
  }
];
*/
class Tabs extends React.Component {
  static defaultProps = { tabs: [] };

  state = { currentTabIndex: 0 };

  handleButtonClick(index) {
    console.log("button clicked!", { index });
    this.setState({ currentTabIndex: index });
  }

  /* method */
  renderButtons() {
    return this.props.tabs.map((tab, index) => (
      <button key={index} onClick={() => this.handleButtonClick(index)}>
        {tab.name}
      </button>
    ));
  }

  /* method */
  renderContent() {
    const currentTab = this.props.tabs[this.state.currentTabIndex];
    return <div className="content">{currentTab.content}</div>;
  }
  render() {
    return (
      <div>
        {this.renderButtons()}
        {/* only show content when the tabs array has length */}
        {this.props.tabs.length && this.renderContent()}
      </div>
    );
  }
}

export default Tabs;
