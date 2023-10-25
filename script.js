// Snack 1
// Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
// [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
// Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
// nome del tavolo, (tableName)
// nome dell'ospite,  (guestName)
// posto occupato. (place)
// Generiamo e stampiamo in console la lista per i segnaposto.

const invitati = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];
const segnaposto = [];


invitati.forEach((el, index) => {
    const segnapostoPattern = 
        {
            tableName: "Tavolo Vip",
            guestName: el,
            place: (index + 1),
        }
    
    segnaposto.push(segnapostoPattern);
});
console.log(segnaposto);


// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // SNACK 2 // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
// 1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
// ES (Marco della Rovere => MARCO DELLA ROVERE);
// 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
// 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

const students = [
    {
        id: 213,
        name: "Marco della Rovere",
        grades: 78,
    },
    {
        id: 110,
        name: "Paola Cortellessa",
        grades: 96,
    },
    {
        id: 250,
        name: "Andrea Mantegna",
        grades: 48,
    },
    {
        id: 145,
        name: "Gaia Borromini",
        grades: 74,
    },
    {
        id: 196,
        name: "Luigi Grimaldello",
        grades: 68,
    },
    {
        id: 102,
        name: "Piero della Francesca",
        grades: 50,
    },
    {
        id: 120,
        name: "Francesca da Polenta",
        grades: 84,
    },
];

const aula = students.map((studente) => {
    return studente.name.toUpperCase();
});

console.log(aula);

const over70 = students.filter((studente) => {
    return studente.grades > 70;
});

console.log(over70);

const superior120 = students.filter((studente) => {
    return studente.grades > 70 && studente.id > 120;
});

console.log(superior120);

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // SNACK 3 // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

const depositoBici = [
    {
        nome: "mountain bike",
        peso: 8,
    },
    {
        nome: "bmx",
        peso: 5,
    },
    {
        nome: "bici ibrida",
        peso: 10,
    },
    {
        nome: "gravel bike",
        peso: 12,
    },
    {
        nome: "fat bike",
        peso: 50,
    },
];

let minor = [];

depositoBici.forEach((el, index) => {
    const {peso} = depositoBici[index];
    minor.push(peso);
});

const result = depositoBici.filter((bici) => {
    return bici.nome && bici.peso === Math.min(...minor);
});
console.log(`la bici che pesa meno è: ${result[0].nome} e pesa: ${result[0].peso}kg`);

document.body.innerHTML = 
`
    <div>
    la bici che pesa meno è: ${result[0].nome} e pesa: ${result[0].peso}kg
    </div>
`;

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // SNACK 4 // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

const serieA = [
    {
        nome: "Inter",
        punti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Milan",
        punti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Roma",
        punti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Lazio",
        punti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Napoli",
        punti: 0,
        falliSubiti: 0,
    },
];

serieA.forEach((el, index) =>{
    const copySerieA = {...serieA[index], punti: getRndInteger(1, 100), falliSubiti: getRndInteger(1, 100)};
    console.log(copySerieA);
    const {nome, falliSubiti} = copySerieA;
    console.log({nome, falliSubiti});
    print(copySerieA, {nome, falliSubiti});
});

function print(copySerieA, {nome, falliSubiti}){
    const testo = document.createElement('div');
    document.body.append(testo);
    testo.innerHTML = 
    `
        <p> nome: ${copySerieA.nome} / punti: ${copySerieA.punti} / falli subiti: ${copySerieA.falliSubiti}</p>
        <p> nome: ${{nome, falliSubiti}.nome} / falli subiti: ${{nome, falliSubiti}.falliSubiti}</p>
    `
};
