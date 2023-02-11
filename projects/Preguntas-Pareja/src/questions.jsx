import React, { Component } from 'react';
import dotenv from 'dotenv';
import axios from 'axios';

class App2 extends Component {
  state = {
    response: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    const input = event.target.elements.input.value;

    axios
      .post('https://api.openai.com/v1/engines/text-davinci-003/jobs', {
        prompt: input,
        temperature: 0,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["\n"],
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(res => {
        this.setState({ response: res.data.choices[0].text });
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="input" />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.response}</p>
      </div>
    );
  }
}

export default App2;
