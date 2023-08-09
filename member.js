function skillsMember() {
    var member = {
        name: "John Doe",
        age: 34,
        skills: ["Javascript", "HTML", "CSS"],
        address: {
            street: "40 Main St",
            city: "Boston",
            state: "MA"
        },
        getBirthYear: function() {
            return 2017 - this.age;
        }
    }
    return member;
}   