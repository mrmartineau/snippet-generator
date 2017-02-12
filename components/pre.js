import React from 'react';

const Pre = (props) => {

	const editors = {
		sublime: {
			snippet: `<snippet>
	<content><![CDATA[${props.snippet}]]></content>
	<description>${props.description}</description>
	<tabTrigger>${props.tabTrigger}</tabTrigger>
	<scope>${props.scope}</scope>
</snippet>`,
			note: `Create a new *.sublime-snippet file and save the contents above into it.`
		},
		atom: {
			snippet: `'.${props.scope}':
	'${props.description}':
	  'prefix': '${props.tabTrigger}'
	  'body': """
	    ${props.snippet}
	  """`,
			note: `Paste the above code into your snippets.cson`
		},
		vscode: {
			snippet: `"snippet-${props.tabTrigger}": {
  "prefix": "${props.tabTrigger}",
  "body": "${props.snippet}",
  "description": "${props.description}"
}`,
			note: `Go to 'Preferences' > 'User snippets' and select the correct type, then paste in the above code`
		},
	};

	const editor = props.editor.toLowerCase().replace(' ', '');

	return (
	  <div>
			<h3>{props.editor}</h3>
			<pre><code>{editors[editor].snippet.replace(/\$(?!{|[0-9])/gmi, "\\$")}</code></pre>
			<div className="notes">{editors[editor].note}</div>
			<style jsx>{`
				pre {
					overflow-x: scroll;
					line-height: 1.3;
					min-height: 150px;
					margin-bottom: 0.5rem;
				}
				code {
					font-size: 14px;
				}
				.notes {
					margin-top: 0.5rem;
					margin-bottom: 1rem;
					font-size: 14px;
				}
			`}</style>
	  </div>
	)
}

export default Pre;

// <button type="submit" className="btn" data-download="{editor}">Download</button>