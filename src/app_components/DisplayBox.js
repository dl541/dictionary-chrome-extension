import React, { Component } from "react";
import "./DisplayBox.css"

class DisplayBox extends Component {
  createJSXForPartOfSpeech = (partOfSpeech, parsedDefinitionEntries) => {
    return (
      <div className="Definition-entry">
        <div className="Part-of-speech">{partOfSpeech}</div>
        <div className="Definition"> {parsedDefinitionEntries}</div>
      </div>
    );
  };

  parseDefinitionEntriesForPartOfSpeech = (partOfSpeech, definitionEntries) => {
    var parsedDefinitionEntries = definitionEntries.map(entry => (
      <div className="Definition">{entry.definition}</div>
    ));
    return this.createJSXForPartOfSpeech(partOfSpeech, parsedDefinitionEntries);
  };

  parseDictionaryItem = dictionaryItem =>
    Object.entries(dictionaryItem.meaning).map(
      ([partOfSpeech, definitionEntries]) =>
        this.parseDefinitionEntriesForPartOfSpeech(
          partOfSpeech,
          definitionEntries
        )
    );

  render() {
    return (
      <div className="Display-box">
        {this.props.data.map(dictionaryItem =>
          this.parseDictionaryItem(dictionaryItem)
        )}
      </div>
    );
  }
}

export default DisplayBox;
