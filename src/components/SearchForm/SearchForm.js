import { Component } from "react";
import "./SearchForm.css"

export default class SearchForm extends Component {
  static propTypes = {};

  state = {
    keyword: "",
  };

  handleKeywordChange = (event) => {
    this.setState({ keyword: event.target.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.keyword.trim() === "") {
      return alert("Введите слово для поиска");
    }

    this.props.formSubmit(this.state.keyword);
    this.setState({ keyword: "" });
  };

  render() {
    return (
      <form className="SearchForm" onSubmit={this.handleSubmit}>
        <input
          className="SearchForm-input"
          type="text"
          placeholder="Search movies"
          value={this.state.keyword}
          name="search"
          onChange={this.handleKeywordChange}
        />
        <button type="submit" className="SearchForm-button">
          <span>Search</span>
        </button>
      </form>
    );
  }
}
