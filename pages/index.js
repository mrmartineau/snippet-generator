import React, { Component } from 'react'
import { Pre } from '../components/pre'
import { Grid } from '../components/kickoff-react/Grid'
import { Column } from '../components/kickoff-react/Column'
import { Control } from '../components/kickoff-react/Control'
import { Input } from '../components/kickoff-react/Input'
import { Textarea } from '../components/kickoff-react/Textarea'

// Layouts
import Page from '../layouts/page'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      snippet: '',
      description: '',
      tabtrigger: '',
      scope: '',
      editorSublime: true,
      editorVSCode: false,
      editorAtom: false,
    }

    this.handleSnippetChange = this.handleSnippetChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleTabTriggerChange = this.handleTabTriggerChange.bind(this)
    this.handleScopeChange = this.handleScopeChange.bind(this)
    this.handleExample = this.handleExample.bind(this)
    this.handleScopeExample = this.handleScopeExample.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  handleSnippetChange(event) {
    this.setState({
      snippet: event.target.value,
    })
  }

  handleDescriptionChange(event) {
    this.setState({
      description: event.target.value,
    })
  }

  handleTabTriggerChange(event) {
    this.setState({
      tabtrigger: event.target.value,
    })
  }

  handleScopeChange(event) {
    this.setState({
      scope: event.target.value,
    })
  }

  handleScopeExample(event) {
    this.setState({
      scope: event.target.textContent,
    })
  }

  handleKeyDown(event) {
    if (event.keyCode === 9) {
      event.preventDefault()
      const snippet = this.state.snippet
      const selectionStart = event.target.selectionStart
      const snippetStart = snippet.slice(0, selectionStart)
      const snippetEnd = snippet.slice(selectionStart)
      console.log(event.target.selectionEnd)
      this.setState({
        snippet: `${snippetStart}\t${snippetEnd}`,
      })
      // event.target.selectionStart = event.target.selectionEnd = selectionStart + 1;
    }
  }

  handleClear(event) {
    event.preventDefault()
    this.setState({
      snippet: '',
      description: '',
      tabtrigger: '',
      scope: '',
    })
  }

  handleExample(event) {
    event.preventDefault()
    this.setState({
      snippet: `const \${1:fn} = ($2) => {
	$3
}`,
      description: 'Creates an anonymous function in ES6 syntax',
      tabtrigger: 'anfn',
      scope: 'source.js',
    })
  }

  render() {
    const preProps = {
      snippet: this.state.snippet,
      description: this.state.description,
      tabtrigger: this.state.tabtrigger,
      scope: this.state.scope,
    }

    return (
      <Page>
        <div className="l-container">
          <h1 className="text-centre">Snippet Generator</h1>
          <p className="text-centre l-mb0">
            Sublime Text, Atom & VS Code snippet generator
          </p>
          <p className="text-centre l-mb0">
            <small>Convert snippets across your text editors</small>
          </p>

          <Grid gutter stack="mid">
            <Column>
              <Control>
                <Textarea
                  value={this.state.snippet}
                  onChange={this.handleSnippetChange}
                  placeholder="Snippet"
                  onKeyDown={this.handleKeyDown}
                />

                <div className="examples">
                  <small>
                    <a href="#" onClick={this.handleClear}>
                      Clear inputs
                    </a>
                  </small>
                  <small>
                    Try an{' '}
                    <a href="#" onClick={this.handleExample}>
                      example
                    </a>
                  </small>
                </div>
              </Control>
            </Column>

            <Column>
              <Control>
                <Input
                  value={this.state.description}
                  onChange={this.handleDescriptionChange}
                  placeholder="Description"
                />
              </Control>
              <Control>
                <input
                  value={this.state.tabtrigger}
                  onChange={this.handleTabTriggerChange}
                  placeholder="Tab trigger"
                  type="text"
                  name="tabtrigger"
                  className="form-input"
                />
              </Control>
              <Control>
                <input
                  value={this.state.scope}
                  onChange={this.handleScopeChange}
                  placeholder="Scope"
                  type="text"
                  name="scope"
                  className="form-input"
                />
                <small>
                  e.g. <code onClick={this.handleScopeExample}>source.js</code>,{' '}
                  <code onClick={this.handleScopeExample}>source.css</code> or{' '}
                  <code onClick={this.handleScopeExample}>text.html</code>
                </small>
              </Control>
            </Column>
          </Grid>

          <hr />

          <Grid gutter stack="mid">
            <Column>
              <Pre editor="Sublime" {...preProps} />
            </Column>
            <Column>
              <Pre editor="Atom" {...preProps} />
            </Column>
            <Column>
              <Pre editor="VS Code" {...preProps} />
            </Column>
          </Grid>
        </div>
        <style jsx>
          {`
            small code {
              cursor: pointer;
            }

            .examples {
              display: flex;
              justify-content: space-between;
              margin-top: 5px;
            }
          `}
        </style>
      </Page>
    )
  }
}
