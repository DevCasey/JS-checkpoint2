const arrOfPeople = [
    {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
  ]
  
  const listOfPlayers = []
  const blueTeam = []
  const redTeam = []

  class People {
      constructor(id, name, age, skillSet, placeBorn) {
          this.id = id;
          this.name = name;
          this.age = age;
          this.skillSet = skillSet;
          this.placeBorn = placeBorn;
      }
  }

submitToPeople = () => {
  let id = document.getElementById('p-id');
  let name = document.getElementById('p-name');
  let age = document.getElementById('p-age');
  let skill = document.getElementById('p-skills');
  let born = document.getElementById('place-born');

  id = People.this.id
  console.log('class is working')
  console.log(id);
}

  
  class Player extends People{
    constructor(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
        super(name, skillSet);
        this.canThrowBall = canThrowBall;
        this.canDodgeBall = canDodgeBall;
        this.hasPaid = hasPaid;
        this.isHealthy = isHealthy;
        this.yearsExperience = yearsExperience;
    }
  }


  class BlueTeammate extends Player {
    constructor(name){
        super(canThrowBall, canDodgeBall)
        this.name = name
    }
  }

  class RedTeammate extends Player {
    constructor(){}
  }
  
  const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.innerHTML = "Make Player"
      button.addEventListener('click', function() {makePlayer(person.name)} )
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    })
  }
  
  const makePlayer = (name) => {
    listOfPlayers.push(name)
    console.log(listOfPlayers)
    console.log(`li ${name} was clicked`)
  }

  let listPlayers = () => {
    const players = document.getElementById('list-players');
    
    listOfPlayers.forEach(function(element) {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(element));
      players.append(li);
    })
  }