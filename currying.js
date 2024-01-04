// real life example like email sender
// we can send automatic coustom emails to list of users
function sendEmail(to) {
  return function (subject) {
    return function (body) {
      return `${to} this is subject:-${subject} and body:-${body}`;
    };
  };
}

let result = sendEmail("prathmesh@gmail.com")("Next.js course")(
  "this course is free!!! Now Grab Your Copy"
);
console.log(result);
