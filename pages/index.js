import React, { Component } from 'react';
import Pre from '../components/pre';
import Grid from '../components/kickoff-react/Grid';
import Column from '../components/kickoff-react/Column';
import Control from '../components/kickoff-react/Control';
import Input from '../components/kickoff-react/Input';
import Textarea from '../components/kickoff-react/Textarea';

// Layouts
import Page from '../layouts/page'

export default class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			snippet: '',
			description: '',
			tabTrigger: '',
			scope: '',
			editorSublime: true,
			editorVSCode: false,
			editorAtom: false,
		};

		this.handleSnippetChange = this.handleSnippetChange.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
		this.handleTabTriggerChange = this.handleTabTriggerChange.bind(this);
		this.handleScopeChange = this.handleScopeChange.bind(this);
	}

	handleSnippetChange(event) {
		this.setState({
			snippet: event.target.value,
		});
	}

	handleDescriptionChange(event) {
		this.setState({
			description: event.target.value,
		});
	}

	handleTabTriggerChange(event) {
		this.setState({
			tabTrigger: event.target.value,
		});
	}

	handleScopeChange(event) {
		this.setState({
			scope: event.target.value,
		});
	}

	render() {
		const preProps = {
			snippet: this.state.snippet,
			description: this.state.description,
			tabTrigger: this.state.tabTrigger,
			scope: this.state.scope,
		};

		return (
			<Page>
				<div className="l-container">
					<h1 className="text-centre">Snippet Generator</h1>
					<p className="text-centre l-mb0">Sublime Text, Atom & VS Code snippet generator</p>

					<Grid gutter stack="mid">
						<Column>
							<Control>
								<Textarea value={this.state.snippet} onChange={this.handleSnippetChange} placeholder="Snippet"/>
							</Control>
						</Column>

						<Column>
							<Control>
								<Input value={this.state.description} onChange={this.handleDescriptionChange} placeholder="Description"/>
							</Control>
							<Control>
								<input value={this.state.tabtrigger} onChange={this.handleTabTriggerChange} placeholder="Tab trigger" type="text" name="tabtrigger" className="form-input"/>
							</Control>
							<Control>
								<input value={this.state.scope} onChange={this.handleScopeChange} placeholder="Scope" type="text" name="scope" className="form-input"/>
								<small>e.g. <code>source.js</code>, <code>source.css</code> or <code>text.html</code></small>
							</Control>
						</Column>
					</Grid>

					<hr/>

					<Grid gutter stack="mid">
						<Column>
							<Pre
								editor="Sublime"
								{...preProps}
							/>
						</Column>
						<Column>
							<Pre
								editor="Atom"
								{...preProps}
							/>
						</Column>
						<Column>
							<Pre
								editor="VS Code"
								{...preProps}
							/>
						</Column>
					</Grid>

					<footer className="text-centre">
						<p>
							<small>
								Made with <a href="https://github.com/zeit/next.js">next.js</a> and hosted with <a href="https://zeit.co/now">now.sh</a>
							</small>
						</p>
					</footer>
				</div>

				<style jsx global>{`
		    `}</style>
			</Page>
		)
	}
}