import Prism from 'prismjs'

export default function SyntaxHighlighter() {

    const code = '<p></p>'
    const html = Prism.highlight(code, Prism.languages.html, 'html');

    return (
        <div>
            {html}
        </div>

    )

}

