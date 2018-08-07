var converter = new showdown.Converter();
var md = $('#wmd-input').val();
var html = converter.makeHtml(md);

var turndownService = new TurndownService({
  headingStyle: 'atx',
  hr: '---',
  bulletListMarker: '-',
  codeBlockStyle: 'indented',
  emDelimiter: '*',
});
var mdout = turndownService.turndown(html);
$('#wmd-input').val(mdout);
