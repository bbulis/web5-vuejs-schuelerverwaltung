/**
 * 
 * @param {Vorname des Schülers} firstname 
 * @param {Nachname des Schülers} lastname 
 * @param {Klasse in welcher der Schüler ist} clazz 
 * @param {Ausbildungszweig welcher vom Schüler gewählt wurde} branch 
 */
function Schueler(firstname, lastname, clazz, branch) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.clazz = clazz;
    this.branch = branch;
}

/**
 * Array welches die Schüler speichert
 */
let schuelers = [
    new Schueler('Benjamin', 'Bulis', '5CHIT', 'MEDT'),
    new Schueler('Oguzhan', 'Güngür', '5CHIT', 'MEDT'),
    new Schueler('David', 'Langheiter', '5CHIT', 'SYT')
];

/**
 * Logik von Vue.JS
 */
let app = new Vue({
    // Element auf welches ich im HTML Code zugreifen will
    el: '#app',
    // Daten welche ich dem HTML Code bereitstellen möchte
    data: {
        // Daten welche mit dem v-model zusammenhängen
        // Der name hier verweißt auf eine Variable im HTML Code -> v-model
        firstname: '',
        lastname: '',
        clazz: '',
        branch: '',
        schuelers
    },
    // Methoden welche vom HTML Code aus aufgerufen werden können
    methods: {
        // Funktion welche aufgerufen wird sobald der Hinzufügen Knopf gedrückt wird
        addSchueler: function() {
            let newschueler = new Schueler(this.firstname, this.lastname, this.clazz, this.branch);
            schuelers.push(newschueler);
        },
        // Funktion welche ein Element aus der Liste entfernt
        deleteSchueler: function(inputschueler) {
            let index = schuelers.indexOf(inputschueler);
            schuelers.splice(index, 1);
        }
    }
});