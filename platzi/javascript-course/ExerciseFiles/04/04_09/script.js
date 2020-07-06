/*
Javascript is technically an object-oriented language
*/

var course = new Object();
// course.title = "title";
// course.instructor = "instructor";
// course.level = 1;
// course.published = true;
// course.views = 0;

var course =  {

  title: "title",
  instructor: "instructor",
  level: 1,
  published: true,
  views: 0,
  updateViews: function() {
    return ++course.views;
  }
}

console.log(course);
console.log(course.title);
