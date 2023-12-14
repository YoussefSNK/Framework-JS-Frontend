// importer la classe Qcm
const Qcm = require('./qcm');
const Question = require('./questions');

 
const questions = [
    new Question({ 
        id: 0, 
        question: '5 x 4', 
        reponse: ["20", "54", "9", "2"], 
        theme: "Javascript", 
        nbpoints: 2}),
    new Question({ 
        id: 1, 
        question: 'wesh ??', 
        reponse: ["Bien", "Tranquille", "Jvais bien", "Pas trop"], 
        theme: "Javascript", 
        nbpoints: 2}),
];
// remplacer les simples chaines de caracteres par des instances de la classe Qcm
const qcms = [
    new Qcm({ id: 0, name: 'Introduction Vanilla JS', nbpoints: 0, theme: 'Javascript' }),
    new Qcm({ id: 1, name: 'Framework Frontend', nbpoints: 0, theme: 'Angular' }),
    new Qcm({ id: 2, name: 'Framework Backend', nbpoints: 0, theme: 'Express' }),
];

const remplirQcm = (rawObject) => {
    
    questions.forEach((question) => {
        
    })


}

const addQcm = (rawObject) => {
    //FIXME: fonction qui ajoute un element a la liste et incremente l'id
    let maxId = 0;
    qcms.forEach((qcm) => { //recupere l'id le plus grand
        if (maxId < qcm.Id) {
            maxId = qcm.id;
        }
    });
    const qcm = new Qcm( // creation du QCM avec l id max
        {
            id: maxId + 1,
            name: rawObject.name,
            theme: rawObject.theme,
            nbpoints: Number(rawObject.nbpoints)
        });
    qcms.push(qcm);// ajout du QCM a la liste
}



module.exports = { qcms, addQcm };