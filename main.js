// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

//finvtion name createUser
//parameters 2, first, last
//return value object
//firt name string
//last name string -complete

function createUser(firstName, lastName){
    let user = {
        firstName: firstName,
        lastName: lastName ,
    }
    return user;
}
//takes in an object and an age, returns updated function -complete
function setAge( userObject, age){
    userObject.age = age 
    return userObject
}

//function that increments age by 1 in an object -complete
function incrementAge(object){
    object.age+=1
    return object
}

//function for whether car needs maintenance, changes value to false -complete
function fixCar(object){
    object.needsMaintenance = false 
    return object

}


//add grades to array in key grades of the object 
function addGrades(student, newGrades){
   //loops though each index of new array and added them individually - complete
    for(i=0;i<newGrades.length; i++){
        student.grades.push(newGrades[i])
    }
    return student


}



//get data type from key of object -complete ....type of doesnt work in dot notation, only in bracket notation
function getDataType(object,key){
   return typeof object[key]
}

//add array, then push an array so that its an array of arrays.
function addTodo(toDos,newToDos){
    toDos.push(newToDos);
    return toDos;
}

//add new song to key songs in playist object
//add new song duration to playlist duration
// return object
function addSong(playlist, newSong){
    playlist.songs.push(newSong)
    playlist.duration = playlist.duration + newSong.duration
    return playlist
}


//`updateReportCard`-complete

// * Accepts two parameters, a report card and a new grade (a number between 0 and 100)
// * Updates the report card's lowest grade, highest grade, and average grade
// * Adds the new grade to the report card's grades
// lowest grade , highest grade , averagegrade ,grades array

function updateReportCard(reportCard,newGrade){
    let sum = 0
    reportCard.grades.push(newGrade)
    for(i=0;i<reportCard.grades.length; i++){
        sum += reportCard.grades[i]

    } sum = sum / reportCard.grades.length
    


    reportCard.averageGrade = sum
    if (newGrade < reportCard.lowestGrade){
        reportCard.lowestGrade = newGrade
    }else if (newGrade > reportCard.highestGrade){
        reportCard.highestGrade = newGrade
    }

    

    return reportCard
}




// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
