var course = new Object();

var course = {
    title: "JavaScript Essential Training",
    instructor: "Morten Rand-Hendriksen",
    level: 1,
    published: true,
    views: 0,
    updateViews: function() {
        return ++course.views;
    }
}

console.log(course);

var currentDate = new Date();

function Course(title, instructor, level, published, views) {

  this.title = title;
  this.instructor = instructor;
  this.level = level;
  this.published = published;
  this.views = views;
  this.updateViews = function() {
      return ++this.views;
  }

}

var courses = [
  new Course("JavaScript Essential Training", "Morten Rand-Hendriksen", 1, true, 0)
];

console.log(courses);
console.log(courses[0]["title"]);
console.log(courses[0].title); // Same as above ^
