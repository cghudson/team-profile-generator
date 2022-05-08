// create functionality that will filter out each employee type and have it return its own piece of html.

function createTeamHTML(team) {
    const managerCard = manager => {
        return `
        <div class="card m-4">
             <div class="card-header bg-primary bg-gradient text-light">
                <h2 class="card-title">${manager.getName()}</h2>
                <p class="card-title"><i class="fa-solid fa-mug-hot"></i> Manager</p>
            </div>
            <div class="card-body">
                <div class="list-group list-group-flush">
                    <p class="list-group-item">ID: </p>
                    <p class="list-group-item">Email: <a
                                    href="mailto:cghudson@uwalumni.com">cghudson@uwalumni.com</a>
                    </p>
                    <p class="list-group-item">Office Number: </p>
                </div>
            </div>
        </div>
        `
    }
}

module.exports = data => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/372064985b.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="./style.css">
        <title>My Team</title>
    </head>
    
    <body>
        <header>
            <h1>My Team</h1>
        </header>
    
        <main class="container">
            <section class="row">
                <div class="d-flex flex-wrap">
                    ${createTeamHTML(data)}
                </div>
             </section>
        </main>
    </body>
    </html>
    `;
};
