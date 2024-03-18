const Color = {
    Red: 'RED',
    Green: 'GREEN',
    Blue: 'BLUE'
};
    
function getUserInfo(user) {
    return `Name: ${user.name}, Age: ${user.age}`;
}
    
const user = {
    name: 'Alice',
    age: 30 // Assuming 30 as the age for demonstration
};
    
console.log(getUserInfo(user));
console.log(Color.Red);
  