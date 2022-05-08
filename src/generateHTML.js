function createTeamHTML(team) {
  const managerCard = (manager) => {
    return `
        <div class="card m-4">
             <div class="card-header bg-primary bg-gradient text-light">
                <h2 class="card-title">${manager.getName()}</h2>
                <p class="card-title"><i class="fa-solid fa-mug-hot"></i> ${manager.getRole()}</p>
            </div>
            <div class="card-body">
                <div class="list-group list-group-flush">
                    <p class="list-group-item">ID: ${manager.getID()} </p>
                    <p class="list-group-item">Email: <a
                                    href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
                    </p>
                    <p class="list-group-item">Office Number: ${manager.getOfficeNumber()}</p>
                </div>
            </div>
        </div>
        `;
  };

  const engineerCard = (engineer) => {
    return `
        <div class="card m-4">
            <div class="card-header bg-primary bg-gradient text-light">
                <h2 class="card-title">${engineer.getName()}</h2>
                <p class="card-title"><i class="fa-solid fa-glasses"></i> ${engineer.getRole()}</p>
            </div>
            <div class="card-body">
                <div class="list-group list-group-flush">
                    <p class="list-group-item">ID: ${engineer.getID()}</p>
                    <p class="list-group-item">Email: <a
                        href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
                    </p>
                    <p class="list-group-item">GitHub: ${engineer.getGitHub()}</p>
                </div>
            </div>
        </div>
        `;
  };

  const internCard = (intern) => {
    return `
        <div class="card m-4">
            <div class="card-header bg-primary bg-gradient text-light">
                <h2 class="card-title">${intern.getName()}</h2>
                <p class="card-title"><i class="fa-solid fa-user-graduate"></i> ${intern.getRole()}</p>
            </div>
            <div class="card-body">
                <div class="list-group list-group-flush">
                    <p class="list-group-item">ID: ${intern.getID()}</p>
                    <p class="list-group-item">Email: <a
                        href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
                    </p>
                    <p class="list-group-item">School: ${intern.getSchool()}</p>
                </div>
            </div>
        </div>
        `;
  };

  const teamArray = [];
  teamArray.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => managerCard(manager))
  );
  teamArray.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => engineerCard(engineer))
      .join("")
  );
  teamArray.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => internCard(intern))
      .join("")
  );
  return teamArray.join("")
}

module.exports = (team) => {
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
                    ${createTeamHTML(team)}
                </div>
             </section>
        </main>
    </body>
    </html>
    `;
};
