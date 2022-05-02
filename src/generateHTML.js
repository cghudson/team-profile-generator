
// create functionality that will filter out each employee type and have it return its own piece of html.

function creatTeamHTML(team) {
    
}

module.exports = data => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
   ${creatTeamHTML(data)}
</body>
</html>
    `
}