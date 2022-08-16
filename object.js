var object=[
    {
        person:"john",
        age:30,
        company:"google",
    },
    {
        person:"mohn",
        age:37,
        company:"flipkart",
    },
     {
            person:"kohn",
            age:38,
            company:"amazon",
        },

            {
                person:"suhan",
                age:40,
                company:"myntra",
            },   {
                person:"johnny",
            age:70,
            company:"apple",
        },
]

for(let i=0;i<object.length;i++)
{
console.log(`
company: ${object[i].company}
age: ${object[i].age}
person:${object[i].person}
`)
}  object.forEach(function(value){
    console.log( value + "<br>");
    });
    
    for(let key in object){
    console.log ( object [key]+"<br>");
    }
    // resume
    var Resume = {
        "fname" : "Rakesh",
        "lname" : "Dandekar",
        "age": 35,
        "location": "Nagpur",
        "Qualification": "BE Electrical",
        "Weight": 65,
        "Occupation": "Manas agro industries and limited",
        "BloodGroup": "AB positive",
        "AnnualIncome": "5 lpa",
        "Height": 5.7,
     
        
        first:["day","weak","month","year"],
        }
        console.log(Resume);
        console.log(Resume.age, Resume.location);
        console.log(Resume.first[2]);