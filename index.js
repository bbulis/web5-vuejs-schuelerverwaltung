function Schueler(firstname, lastname, clazz, branch) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.clazz = clazz;
    this.branch = branch;
}

let schuelers = [
    new Schueler('Benjamin', 'Bulis', '5CHIT', 'MEDT'),
    new Schueler('Oguzhan', 'Güngür', '5CHIT', 'MEDT'),
    new Schueler('David', 'Langheiter', '5CHIT', 'SYT')
];

let app = new Vue({
    el: '#app',
    data: {
        firstname: '',
        lastname: '',
        clazz: '',
        branch: '',
        schuelers
    },
    methods: {
        addSchueler: function() {
            let newschueler = new Schueler(this.firstname, this.lastname, this.clazz, this.branch);
            schuelers.push(newschueler);
        },
        deleteSchueler: function(inputschueler) {
            let index = schuelers.indexOf(inputschueler);
            schuelers.splice(index, 1);
        }
    }
});