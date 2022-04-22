
function dateDifference(registerDate, givenDate) {

    let regDate = new Date(registerDate);
    //console.log(regDate.toString());
    let giveDate = new Date(givenDate);
    //console.log(giveDate.toString());    
    
    return Math.floor( (giveDate - regDate)  / (1000 * 60 * 60 * 24) );
}
    
export default dateDifference;