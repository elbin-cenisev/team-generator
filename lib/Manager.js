const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }

    // Returns HTML code that creates employee card
    getCard() {
        const card = `
        <div class="col m-4">
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <!-- Employee's Role -->
                ${this.getRole()}
            </div>
            <table class="table table-hover">
                <tbody>
                    <tr>
                        <th scope="row">Name</th>
                        <td>${this.getName()}</td>
                    </tr>
                    <tr>
                        <th scope="row">ID</th>
                        <td>${this.getId()}</td>
                    </tr>
                    <tr>
                        <th scope="row">Email</th>
                        <td><a href="${this.getEmail()}">${this.getEmail()}</a></td>
                    </tr>
                    <tr>
                        <th scope="row">Office Number</th>
                        <td>${this.getOfficeNumber()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    `
    return card;
    }
}

module.exports = Manager