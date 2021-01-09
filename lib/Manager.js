class Manager {
    constructor(name, id, email, phone){
        this.name = name
        this.id = id
        this.email = email
        this.phone = phone
        this.title = "Manager"
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
    getOfficeNumber() {
        return this.getOfficeNumber
    }
    
}
module.exports = Manager