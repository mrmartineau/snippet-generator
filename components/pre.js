import React from 'react'

export const Pre = (props) => {
  const editors = {
    sublime: {
      snippet: `<snippet>
	<content><![CDATA[${props.snippet}]]></content>
	<description>${props.description}</description>
	<tabTrigger>${props.tabtrigger}</tabTrigger>
	<scope>${props.scope}</scope>
</snippet>`,
      note: `Create a new *.sublime-snippet file and save the contents above into it.`,
      docslink:
        'http://docs.sublimetext.info/en/latest/extensibility/snippets.html',
    },

    atom: {
      snippet: `'.${props.scope}':
	'${props.description}':
		'prefix': '${props.tabtrigger}'
		'body': """
			${props.snippet.replace(/\\/gm, '\\\\\\\\')}
		"""`,
      note: `Paste the above code into your snippets.cson.`,
      docslink: 'http://flight-manual.atom.io/using-atom/sections/snippets/',
    },

    vscode: {
      snippet: `"snippet-${props.tabtrigger}": {
	"prefix": "${props.tabtrigger}",
	"body": "${props.snippet
    .replace(/\n/gm, '\\n')
    .replace(/\t/gm, '\\t')
    .replace(/\r/gm, '\\r')}",
	"description": "${props.description}"
}`,
      note: `Go to 'Preferences' > 'User snippets' and select the correct type, then paste in the above code.`,
      docslink: 'https://code.visualstudio.com/docs/editor/userdefinedsnippets',
    },
  }

  const editor = props.editor.toLowerCase().replace(' ', '')

  return (
    <div>
      <h3>{props.editor}</h3>
      <pre>
        <code>
          {editors[editor].snippet.replace(/\$(?!{|[0-9])/gim, '\\$')}
        </code>
      </pre>
      <div className="notes">
        {editors[editor].note} <br />
        Discover more from the{' '}
        <a href={editors[editor].docslink}>{props.editor} snippets docs</a>.
      </div>
      <style jsx>
        {`
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
        `}
      </style>
    </div>
  )
}
