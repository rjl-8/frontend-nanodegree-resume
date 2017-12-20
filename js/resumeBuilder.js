/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    name: "Ronald Lewis",
    role: "Web Slinger",
    contacts: {
        mobile: "never tell",
        email: "nope",
        github: "not sure",
        twitter: "don't use it",
        location: "Maui, HI"
    },
    welcomeMessage: "Hi, nice to meet you.  I don't really live in Maui, but a guy can dream and it stretches out my map.",
    skills: ["breathing", "eating", "speaking", "being"],
    biopic: "images/197x148.gif",


    displayContactInfo: function(dest) {
        $(dest).append(HTMLmobile.replace("%data%", this.contacts.mobile));
        $(dest).append(HTMLemail.replace("%data%", this.contacts.email));
        $(dest).append(HTMLtwitter.replace("%data%", this.contacts.twitter));
        $(dest).append(HTMLgithub.replace("%data%", this.contacts.github));
        $(dest).append(HTMLlocation.replace("%data%", this.contacts.location));
    },
    display: function() {
        //  header
        //  ******
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        //  topContacts
        this.displayContactInfo("#topContacts");

        $("#header").append(HTMLbioPic.replace("%data%", this.biopic));
        $("#header").append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));

        if (this.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            this.skills.forEach(function(elem) {
                $("#skills").append(HTMLskills.replace("%data%", elem));
            });
        }

        //  footerContacts
        this.displayContactInfo("#footerContacts");
    }
};

bio.display();

var education = {
    schools: [{
            name: "UT",
            location: "Austin, TX",
            degree: "BS",
            majors: ["Aerospace Engineering"],
            dates: "1986 - 1991"
        },
        {
            name: "UTSA",
            location: "San Antonio, TX",
            degree: "MS",
            majors: ["Computer Science"],
            dates: "1996 - 2002"
        }
    ],
    onlineCourses: [{
            title: "this one",
            school: "Udacity",
            dates: "2017 - 2018",
            url: "udacity.com"
        },
        {
            title: "the html one",
            school: "Udacity",
            dates: "2017 - 2017",
            url: "udacity.com"
        }
    ],

    display: function() {
        //  schools
        for (var i = 0; i < this.schools.length; i++) {
            var $educationDiv = $(HTMLschoolStart);
            $($educationDiv).append(HTMLschoolName.replace("%data%", this.schools[i].name) + HTMLschoolDegree.replace("%data%", this.schools[i].degree));
            $($educationDiv).append(HTMLschoolDates.replace("%data%", this.schools[i].dates));
            $($educationDiv).append(HTMLschoolLocation.replace("%data%", this.schools[i].location));
            for (var j = 0; j < this.schools[i].majors.length; j++) {
                $($educationDiv).append(HTMLschoolMajor.replace("%data%", this.schools[i].majors[j]));
            }
            $("#education").append($educationDiv);
        }

        //  onlinecourses
        if (this.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (var i = 0; i < this.onlineCourses.length; i++) {
                var $educationDiv = $(HTMLschoolStart);
                $($educationDiv).append(HTMLonlineTitle.replace("%data%", this.onlineCourses[i].title) + HTMLonlineSchool.replace("%data%", this.onlineCourses[i].school));
                $($educationDiv).append(HTMLonlineDates.replace("%data%", this.onlineCourses[i].dates));
                $($educationDiv).append(HTMLonlineURL.replace("%data%", this.onlineCourses[i].url));
                $("#education").append($educationDiv);
            }
        }
    }
};

education.display();

var work = {
    jobs: [{
            employer: "The Death Star (AT&T)",
            title: "Web Developer",
            location: "San Antonio, TX",
            dates: "in progress",
            description: "web stuff with some db stuff"
        },
        {
            employer: "The Death Star",
            title: "Reports Designer",
            location: "Chicago, IL",
            dates: "start - end",
            description: "report stuff with a lot of db stuff"
        }
    ],

    display: function() {
        for (var i = 0; i < this.jobs.length; i++) {
            var $workDiv = $(HTMLworkStart);
            $($workDiv).append(HTMLworkEmployer.replace("%data%", this.jobs[i].employer) + HTMLworkTitle.replace("%data%", this.jobs[i].title));
            $($workDiv).append(HTMLworkDates.replace("%data%", this.jobs[i].dates));
            $($workDiv).append(HTMLworkLocation.replace("%data%", this.jobs[i].location));
            $($workDiv).append(HTMLworkDescription.replace("%data%", this.jobs[i].description));
            $("#workExperience").append($workDiv);
        }
    }
};

work.display();

var projects = {
    projects: [{
            title: "important work task 1",
            dates: "start - end",
            description: "I did something impressive",
            images: [
                "images/fry.jpg",
                "images/1fry.jpg"
            ]
        },
        {
            title: "important work task 2",
            dates: "start - end",
            description: "I did something very impressive.  Well ok, the images didn't come out nearly as cool as I hoped.  Not my strength.",
            images: [
                "images/prj2img2.jpg",
                "images/prj2img3.jpg"
            ]
        },
        {
            title: "important work task 3",
            dates: "start - end",
            description: "I did something somewhat impressive",
            images: [
                "http://fillmurray.com/200/200",
                "http://fillmurray.com/250/200",
                "http://fillmurray.com/250/250"
            ]
        }
    ],

    display: function() {
        for (var i = 0; i < this.projects.length; i++) {
            var $taskDiv = $(HTMLprojectStart);
            $($taskDiv).append(HTMLprojectTitle.replace("%data%", this.projects[i].title));
            $($taskDiv).append(HTMLprojectDates.replace("%data%", this.projects[i].dates));
            $($taskDiv).append(HTMLprojectDescription.replace("%data%", this.projects[i].description));
            for (var j = 0; j < this.projects[i].images.length; j++) {
                $($taskDiv).append(HTMLprojectImage.replace("%data%", this.projects[i].images[j]));
            }
            $("#projects").append($taskDiv);
        }
    }
};

projects.display();


//  internationalizeButton
//  **********************
$("#main").append(internationalizeButton);

function inName(name) {
    var firstName = name.slice(0, name.indexOf(" "));
    var lastName = name.slice(name.indexOf(" "));
    return firstName.slice(0, 1).toUpperCase() + firstName.slice(1).toLowerCase() + " " + lastName.toUpperCase();
}

//  map stuff
//  *********
$("#mapDiv").append(googleMap);