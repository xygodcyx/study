;(function (win) {
  function isFunction(functionToCheck) {
    return typeof functionToCheck === 'function'
  }
  function editDoc(event, vm, docEditBase) {
    var docName = vm.route.file

    if (docName) {
      var editLink = docEditBase + docName
      const temp = docName.split('/')
      const hasDocs = docName.includes('docs')
      hasDocs ? temp.shift() : temp.unshift('docs')
      // https://github.com/xygodcyx/study/edit/main/docs/political/README.md
      // https://github.com/xygodcyx/study/blob/main/docs/political/README.md
      const name = temp.join('/')
      // docs/political/README.md
      console.log(hasDocs)
      const path = 'https://github.com/xygodcyx/study/edit/main/' + name
      console.log(name, '--', path)
      window.open(path)
      event.preventDefault()
      return false
    } else {
      return true
    }
  }

  win.EditOnGithubPlugin = {}

  function create(docBase, docEditBase, title) {
    title = title || 'Edit on github'
    docEditBase = docEditBase || docBase.replace(/\/blob\//, '/edit/')

    function generateHeader(title) {
      return (header = [
        '<div style="overflow: auto">',
        '<p style="float: right"><a style="text-decoration: underline; cursor: pointer"',
        'onclick="EditOnGithubPlugin.onClick(event)">',
        title,
        '</a></p>',
        '</div>',
      ].join(''))
    }

    return function (hook, vm) {
      win.EditOnGithubPlugin.onClick = function (event) {
        editDoc(event, vm, docEditBase)
      }

      if (isFunction(title)) {
        hook.afterEach(function (html) {
          return generateHeader(title(vm.route.file)) + html
        })
      } else {
        var header = generateHeader(title)

        hook.afterEach(function (html) {
          return header + html
        })
      }
    }
  }

  win.EditOnGithubPlugin.create = create
})(window)
