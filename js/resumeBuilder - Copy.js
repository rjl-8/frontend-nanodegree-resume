/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#header").append()

var bio = {
    name: "Ronald Lewis",
    role: "Web Slinger",
    contactInfo: {
        mobile: "never tell",
        email: "nope",
        github: "not sure",
        twitter: "don't use it",
        location: "San Antonio, TX"
    },
    picURL: "images/fry.jpg",
    welcomeMsg: "Hi",
    skills: ["breathing", "eating", "speaking", "being"]
};

var work = {
    jobs: [
        {
            employer: "The Death Star",
            city: "San Antonio, TX",
            position: "Web Developer",
            description: "web stuff",
            dates: "start - end"
        },
        {
            employer: "The Death Star",
            city: "San Antonio, TX",
            position: "Reports Designer",
            description: "report stuff",
            dates: "start - end"
        }
    ]
};

var education = {
    schools: [
        {
            name: "UT",
            city: "Austin, TX",
            major: "Aerospace Engineering",
            degree: "BS",
            graduationYear: 1991
        },
        {
            name: "UTSA",
            city: "San Antonio, TX",
            major: "Computer Science",
            degree: "MS",
            graduationYear: 2002
        }
    ],
    onlineCourses: [
        {
            title: "this one",
            school: "Udacity",
            dates: "today",
            url: "udacity.com"
        },
        {
            title: "the html one",
            school: "Udacity",
            dates: "a while back",
            url: "udacity.com"
        }
    ]
};

var projects = {
    tasks: [
        {
            title: "important work task 1",
            dates: "start - end",
            description: "I did something impressive",
            imageURL: ""
        },
        {
            title: "important work task 2",
            dates: "start - end",
            description: "I did something very impressive",
            imageURL: ""
        },
        {
            title: "important work task 3",
            dates: "start - end",
            description: "I did something somewhat impressive",
            imageURL: ""
        }
    ]
};

/*
education["lastSchool"] = "UT";
education["yearsAttended"] = "1986-1991";
education["schoolcity"] = "Austin, TX";

$("#education").append(education["lastSchool"]);
$("#education").append(education["yearsAttended"]);
$("#education").append(education["schoolcity"]);
*/

//  header
//  ******
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//  topContacts
//  ***********
$("#topContacts").append(HTMLmobile.replace("%data%", bio.contactInfo.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contactInfo.email));
$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contactInfo.twitter));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contactInfo.github));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contactInfo.location));

$("#topContacts").append(HTMLbioPic.replace("%data%", bio.picURL));
$("#topContacts").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));

bio.displaySkills = function() {
    if (bio.skills.length > 0) {
        $("#topContacts").append(HTMLskillsStart);
        bio.skills.forEach(function(elem) {$("#skills").append(HTMLskills.replace("%data%", elem));});
    }
}

bio.displaySkills();

//  workExperience
//  **************
work.displayJobs = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        var $workDiv = $(HTMLworkStart);
        $($workDiv).append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + HTMLworkTitle.replace("%data%", work.jobs[i].position));
        $($workDiv).append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
        $($workDiv).append(HTMLworkLocation.replace("%data%", work.jobs[i].city));
        $($workDiv).append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
        $("#workExperience").append($workDiv);
    }
}

work.displayJobs();

//  projects
//  ********
projects.display = function() {
    for (var i = 0; i < this.tasks.length; i++) {
        var $taskDiv = $(HTMLprojectStart);
        $($taskDiv).append(HTMLprojectTitle.replace("%data%", this.tasks[i].title));
        $($taskDiv).append(HTMLprojectDates.replace("%data%", this.tasks[i].dates));
        $($taskDiv).append(HTMLprojectDescription.replace("%data%", this.tasks[i].description));
        $("#projects").append($taskDiv);
    }
}
projects.display();





//  internationalizeButton
//  **********************
$("#main").append(internationalizeButton);
function inName(firstName, lastName) {
    return firstName.slice(0, 1).toUpperCase() + firstName.slice(1).toLowerCase() + " " + lastName.toUpperCase();
}

//  locationFinder
//  **************
/*
function locationFinder() {
    var locations = [];

    locations.push(bio.contactInfo.location);

    for (var i = 0; i < education.schools.length; i++) {
        locations.push(education.schools.city);
    }

    for (var i = 0; i < work.jobs.length; i++) {
        locations.push(work.jobs.city);
    }

    return locations;
}
*/

$("#mapDiv").append(googleMap);