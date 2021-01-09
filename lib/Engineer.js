class Engineer {
    constructor(name, id, email, gitHub){
        this.name = name
        this.id = id
        this.email = email
        this.gitHub = gitHub
        this.title = "Engineer"
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
    getGitHub() {
        return this.gitHub
    }
    
}
module.exports = Engineer