console.log("yom the worker");

self.addEventListener("fetch", function (event) {
  console.log(event);
});
