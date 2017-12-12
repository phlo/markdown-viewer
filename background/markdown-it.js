
md['markdown-it'] = {
  defaults: {
    breaks: true,
    html: true,
    linkify: true,
    typographer: false,
    xhtmlOut: false,
    langPrefix: 'language-',
    quotes: '“”‘’'
    // highlight: (str, lang) => ''
  },
  description: {
    breaks: 'Convert \\n in paragraphs into <br>',
    html: 'Enable HTML tags in source',
    linkify: 'Autoconvert URL-like text to links',
    typographer: 'Enable some language-neutral replacement + quotes beautification',
    xhtmlOut: 'Use / to close single tags (<br />)'
  },
  compile: (markdown) => {
    var md = markdownit(state['markdown-it'])
    const tm = texmath.use(katex)
    md.use(tm, {delimiters : 'gitlab'})
    return md.render(markdown)
  }
}
