class Qcm {

    #id;
    #name;
    #theme;
    #author;
    #nbpoints;
    #listquestions;

    constructor(qcmToCreate) {
        this.#id = qcmToCreate.id;
        this.#name = qcmToCreate.name;
        this.#theme = qcmToCreate.theme;
        this.#author = qcmToCreate.author;
        this.#nbpoints = qcmToCreate.nbpoints;
        this.#listquestions = qcmToCreate.listquestions;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    } 

    get theme() {
        return this.#theme;
    }

    get author() {
        return this.#author;
    }

    get nbpoints() {
        return this.#nbpoints;
    }

    get listquestions(){
        return this.#listquestions;
    }

    toJSON(key) {
        console.log(key);
        return {id: this.#id, name: this.#name};
    }
}

module.exports = Qcm;