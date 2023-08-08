function skillMember() {
    var member = document.getElementById("member");
    var skill = document.getElementById("skill");
    var project = document.getElementById("project");
    var contact = document.getElementById("contact");
    var about = document.getElementById("about");
    var memberContent = document.getElementById("memberContent");
    var skillContent = document.getElementById("skillContent");
    var projectContent = document.getElementById("projectContent");
    var contactContent = document.getElementById("contactContent");
    var aboutContent = document.getElementById("aboutContent");
    member.style.color = "#ff6f61";
    skill.style.color = "#000";
    project.style.color = "#000";
    contact.style.color = "#000";
    about.style.color = "#000";
    memberContent.style.display = "block";
    skillContent.style.display = "none";
    projectContent.style.display = "none";
    contactContent.style.display = "none";
    aboutContent.style.display = "none";
}