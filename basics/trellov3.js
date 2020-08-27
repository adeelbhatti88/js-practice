let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,

    //have to use this keyword to access the variables in the myTodos class
    //you have to use the this keyword in the functions below so you can 
    //have access to the class variable.
    addMeeting: function(num){

        this.meetings = this.meetings + num
        
    },

    meetingDone: function(num){

        this.meetDone = this.meetDone - num
        this.meetings = this.meetings + this.meetDone
    },

    resetDay: function(num){

        this.meetings = 0
        this.meetingDone = 0
    },

    summary: function() {
        return `You have ${this.meetings} meetings today!`
    }
}

myTodos.addMeeting(4)
console.log(myTodos.summary());
myTodos.meetingDone(3)
console.log(myTodos.summary());