// function which accepts JSON data
ParseData( JSONData[]);

// JSON data format
  [{ "text": "MyText"}]

// Widget.js
ParseData(data)
{
  var jsondata = data[0]; // since the JSON data is an array
  document.write(jsondata.text);
}