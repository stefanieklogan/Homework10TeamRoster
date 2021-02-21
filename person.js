let Person = function(nameMgr, idMgr, emailMgr, officeMgr) {
    this.nameMgr = nameMgr;
    this.idMgr = idMgr;
    this.emailMgr = emailMgr;
    this.officeMgr = officeMgr;
}
    Person.prototype.getDetails = function() {
    return '${this.nameMgr} :: ${this.idMgr} :: ${this.emailMgr} :: ${this.officeMgr}';
    };

    
