class Cinema {
    constructor(name, address, contact){
        this.address = address;
        this.name = name;
        this.contact = contact;
        this.sessions = [];
        this.movies = [];
        this.halls = [];
        this.employees = [];
    }
    cinemaInfo(){
        console.log("Here is your required information");
        console.log(`Cinema name: ${this.name}, address: ${this.address}, contact info: ${this.contact}`);
    }
    moviesInfo() {
        console.log(`Here are all the movies in ${this.name} Cinema`);
        for (const movie of this.movies) {
           console.log(movie);
        }
    }
    sessionsInfo() {
        console.log(`Here are all the sessions for today in ${this.name} Cinema`);
        for (const session of this.sessions) {
            console.log(`name: ${session.movie.name}, Hall: ${session.hall.number}, time: ${session.time}`);
        }
    }
    hallsInfo(){
        console.log(`We have these halls in our ${this.name} Cinema`);
        for(const halls of this.halls){
            console.log(`number: ${halls.number}, capacity: ${halls.capacity} `);
        }
    }
    addMovie (movie){
        this.movies.push(movie);
    }

    addHall (hall){
        this.halls.push(hall);
    }

    addSession (session){
        this.sessions.push(session);
    }

    addEmployee (employee){
        this.employees.push(employee);
    }
};

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
   
};

class Employee extends Person{
    constructor (name, age, experience){
        super(name, age);
        this.experience = experience;
    }
    sell(request, cinema){
        const {client, movieName, time, tickets} = request;
        
        const session = cinema.sessions.find( (session) => {
            return session.movie.name == movieName && session.time == time;
        });
        if(!session){
            console.log("Couldn't find the session");
            return;
        }
        if(session.movie.ageLimit > client.age){
            console.log("Cannot sell: client is underage");
            return;
        }
        if((session.hall.capacity - session.tickets_bought) < tickets){
            console.log("Tickets are less then required");
            return;
        }
        for(let i = 0; i < tickets; i++){
            const ticket = new Ticket(session, client);
            session.tickets_bought++;
            client.tickets.push(ticket);
        }
        console.log(`${tickets} tickets from ${movieName} were sold to ${client.name} succesfully`);
    }
};

class Client extends Person {
    
    constructor (name, age){
        super(name, age);
        this.tickets = [];
    }
    purchase (movieName,time, tickets){
        //making a request
        return {
            client: this,
            movieName,
            time,
            tickets,
        }
    }
};
class Movie {
    constructor(name, duration, genre, ageLimit, description){
        this.name = name;
        this.duration = duration;
        this.genre = genre;
        this.ageLimit = ageLimit;
        this.description = description;
    }
};
class Halls{
    constructor(number, capacity){
        this.number = number;
        this.capacity = capacity;
    }
};
class Sessions {
    constructor(movie, hall, time){
        this.movie = movie;
        this.hall = hall;
        this.time = time;
        this.tickets_bought = 0;
    }
};
class Ticket{
    constructor(session, client){
        this.session = session;
        this.client = client;
    }
};

let cinemaOne = new Cinema("kinopark","Arshakunyats poghota","+37494384888");
cinemaOne.cinemaInfo();

const employee1 = new Employee("Hayk", 24, 2.5);
const employee2 = new Employee("Alina", 21, 1);
const employee3 = new Employee("Adane", 30, 5);

cinemaOne.addEmployee(employee1);
cinemaOne.addEmployee(employee2);
cinemaOne.addEmployee(employee3);

const Hall1 = new Halls(1, 15);
const Hall2 = new Halls(2, 19);

cinemaOne.addHall(Hall1);
cinemaOne.addHall(Hall2);
cinemaOne.hallsInfo();

const movie1 = new Movie("Odyssey", 173, "Action/Fantasy", 16, "The Odyssey is an ancient Greek epic poem attributed to Homer that follows the hero Odysseus, King of Ithaca, on his grueling 10-year journey home after the Trojan War.");
const movie2 = new Movie("Spider-Man: Brand New Day", 145, "Action/Adventure", 11, "A forgotten Peter Parker lives alone as a full-time Spider-Man until mounting pressure triggers a dangerous change and a powerful new enemy emerges.")

cinemaOne.addMovie(movie1);
cinemaOne.addMovie(movie2);
cinemaOne.moviesInfo();

const session1_1 = new Sessions(movie1, Hall1, "12:00");
const session1_2 = new Sessions(movie2, Hall1, "15:00");
const session1_3 = new Sessions(movie1, Hall1, "18:00");
const session1_4 = new Sessions(movie2, Hall1, "21:00");

const session2_1 = new Sessions(movie2, Hall2, "12:00");
const session2_2 = new Sessions(movie1, Hall2, "15:00");
const session2_3 = new Sessions(movie2, Hall2, "18:00");
const session2_4 = new Sessions(movie1, Hall2, "21:00");

cinemaOne.addSession(session1_1);
cinemaOne.addSession(session1_2);
cinemaOne.addSession(session1_3);
cinemaOne.addSession(session1_4);

cinemaOne.addSession(session2_1);
cinemaOne.addSession(session2_2);
cinemaOne.addSession(session2_3);
cinemaOne.addSession(session2_4);

cinemaOne.sessionsInfo();

const client1 = new Client("Sona", 19);
const client2 = new Client("Anna", 13);

const request1 = client1.purchase("Spider-Man: Brand New Day", "15:00", 2);
const request2 = client1.purchase("Odyssey", "21:00", 3);
const request3 = client2.purchase("Spider-Man: Brand New Day", "15:00",5);
const request4 = client2.purchase("Odyssey", "18:00",4);

employee1.sell(request1, cinemaOne);
// console.log(session1_2.tickets_bought);
employee1.sell(request2, cinemaOne);
// console.log(session2_4.tickets_bought);
employee1.sell(request3, cinemaOne);
// console.log(session1_2.tickets_bought);
employee1.sell(request4, cinemaOne);
// console.log(session1_3.tickets_bought);






