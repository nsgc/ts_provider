Stanza(function(stanza, params) {
  var q = stanza.query({
    endpoint: "http://dev.togogenome.org/sparql-test",
    template: "stanza.rq",
    parameters: params
  });

  q.then(function(data) {
    var rows = data.results.bindings;
    stanza.render({
      template: "stanza.html",
      parameters: {
        inhabitants_statistics: rows
      },
    });
  });
});
