class Intern {
    constructor(name, id, email, school){
        this.name = name
        this.id = id
        this.email = email
        this.school = school
        this.title = "Intern"
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return this.title
        
    }
    getSchool() {
        return this.school
    }
    
}
module.exports = Intern