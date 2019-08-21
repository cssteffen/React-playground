import React from "react";
import "./Accordion.css";

const sections = [
  {
    title: "Section 1",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    title: "Section 2",
    content:
      "Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!"
  },
  {
    title: "Section 3",
    content:
      "Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?"
  }
];
// e.g. <Accordion sections={sections} />

class Accordion extends React.Component {
  static defaultProps = {
    sections: []
    // title: [],
    // content: []
  };
  state = { currentAccordionIndex: null };

  handleButtonClick = index => {
    console.log("button clicked!", { index });
    this.setState({ currentAccordionIndex: index });
  };

  /* Solution */
  renderItem(section, index, currentAccordionIndex) {
    return (
      <li className="Accordion_item" key={index}>
        <button type="button" onClick={() => this.handleButtonClick(index)}>
          {section.title}
        </button>
        {currentAccordionIndex === index && <p>{section.content}</p>}
      </li>
    );
  }

  render() {
    const { currentAccordionIndex } = this.state;
    //const { sections } = this.props;
    return (
      <ul className="Accordion_title">
        {sections.map((section, index) =>
          this.renderItem(section, index, currentAccordionIndex)
        )}
      </ul>
    );
  }
}

/* ==================== */
/* method 
  renderSections() {
    return this.props.sections.map((section, index) => (
      <button key={index} onClick={() => this.handleButtonClick(index)}>
        {section.title}
      </button>
    ));
  }
  /* method 
  renderContent() {
    const currentSection = this.props.sections[
      this.state.currentAccordionIndex
    ];
    return <div className="content">{currentSection.content}</div>;
  }

  render() {
    return (
      <ul>
        <li>
          {this.renderSections()}
          <p>{this.renderContent()}</p>
        </li>
      </ul>
    );
  }*/

export default Accordion;
