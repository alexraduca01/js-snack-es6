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
const segnaposto = []


invitati.forEach((el, index) => {
    const segnapostoPattern = [
        {
            tableName: "Tavolo Vip",
            guestName: el,
            place: (index + 1),
        }
    ]
    segnaposto.push(segnapostoPattern);
})
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
    }
    {
        id: 110,
        name: "Paola Cortellessa",
        grades: 78,
    }
    {
        id: 213,
        name: "Marco della Rovere",
        grades: 78,
    }
    {
        id: 213,
        name: "Marco della Rovere",
        grades: 78,
    }
    {
        id: 213,
        name: "Marco della Rovere",
        grades: 78,
    }
    {
        id: 213,
        name: "Marco della Rovere",
        grades: 78,
    }
    {
        id: 213,
        name: "Marco della Rovere",
        grades: 78,
    }
]