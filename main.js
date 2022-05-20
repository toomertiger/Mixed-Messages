// // need to
// // -have fucntiont aht generates random item out of a HTMLOptGroupElement. think group could be Array
// // thre  arrays, each full of parts
// -funcotin that picks random parts in each
// -
// -
// -


const firstPart = ["Boston College","Clemson","Duke","Florida State","Georgia Tech","Louisville","Miami (FL)","North Carolina","NC State","Pittsburgh","Syracuse","Virginia","Virginia Tech","Wake Forest","Notre Dame","Illinois","Indiana","Iowa","Maryland","Michigan","Michigan State","Minnesota","Nebraska","Northwestern","Ohio State","Penn State","Purdue","Rutgers","Wisconsin","Baylor","Iowa State","Kansas","Kansas State","Oklahoma State","TCU","Texas Tech","West Virginia","Texas","Oklahoma","Arizona","Arizona State","California","UCLA","Colorado","Oregon","Oregon State","USC","Stanford","Utah","Washington","Washington State","Alabama","Arkansas","Auburn","Florida","Georgia","Kentucky","LSU","Ole Miss","Mississippi State","Missouri","South Carolina","Tennessee","Texas A&M","Vanderbilt"];


const secondPart = ["pays","beats","runs","owns","buys","suffers from","got stuffed by","courts","is called daddy by","always loses to","hides from","bleeds from","chose","hit","spanked","fired","lost","spat on","sold","woke up","paid","fought"];

const thirdPart = ["Justin Wilcox","Kyle Whittingham","Brent Venables","Mel Tucker","Dabo Swinney","Mark Stoops","Jonathan Smith","Kirby Smart","David Shaw","Greg Schiano","Scott Satterfield","Steve Sarkisian","Nick Saban","Lincoln Riley","Brent Pry","Sam Pittman","Mike Norvell","Pat Narduzzi","Billy Napier","Joey McGuire","Mike Locksley","Lance Leipold","Mike Leach","Clark Lea","Dan Lanning","Chris Klieman","Lane Kiffin","Chip Kelly","Brian Kelly","Josh Heupel","Bryan Harsin","Jim Harbaugh","Jeff Hafley","Mike Gundy","Scott Frost","James Franklin","P. J. Fleck","Pat Fitzgerald","Jimbo Fisher","Jedd Fisch","Kirk Ferentz","Tony Elliott","Mike Elko","Herm Edwards","Sonny Dykes","Eliah Drinkwitz","Karl Dorrell","Dave Doeren","Jake Dickert","Kalen DeBoer","Ryan Day","Mario Cristobal","Geoff Collins","Dave Clawson","Paul Chryst","Matt Campbell","Neal Brown","Mack Brown","Jeff Brohm","Bret Bielema","Shane Beamer","Dino Babers","Dave Aranda","Tom Allen","recruits","recruit's families","boosters"];



let randomPhrase = () => {
    let word1Index = Math.floor(Math.random()*firstPart.length);
    let word2Index = Math.floor(Math.random()*secondPart.length);
    let word3Index = Math.floor(Math.random()*thirdPart.length);
    return `${firstPart[word1Index]} ${secondPart[word2Index]} ${thirdPart[word3Index]}`
}

console.log(randomPhrase());