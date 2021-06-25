function replace(show) {
  var bio1 = document.getElementById("s2");
  var stats1 = document.getElementById("s1");
  var bag1 = document.getElementById("s3");

  var bio = document.getElementById("con2");
  var stats = document.getElementById("con1");
  var bag = document.getElementById("con3");

  var forward = document.getElementById("forward");

  console.log(show);

  if (show === "bio") {
    bio.style.display = "grid";
    stats.style.display = "none";
    bag.style.display = "none";

    bio1.style.cssText = "border-bottom : 2px solid #26a2dc; color : #26a2dc";
    stats1.style.cssText = "border-bottom : 2px solid #d1d1d1; color : #d1d1d1";
    bag1.style.cssText = "border-bottom : 2px solid #d1d1d1; color : #d1d1d1";

    forward.style.display = "none";
  } else if (show === "bag") {
    bag.style.display = "grid";
    bio.style.display = "none";
    stats.style.display = "none";

    forward.style.display = "grid";

    bag1.style.cssText = "border-bottom : 2px solid #26a2dc; color : #26a2dc";
    stats1.style.cssText = "border-bottom : 2px solid #d1d1d1; color : #d1d1d1";
    bio1.style.cssText = "border-bottom : 2px solid #d1d1d1; color : #d1d1d1";
  } else if (show === "stats") {
    bag.style.display = "none";
    bio.style.display = "none";
    stats.style.display = "grid";

    stats1.style.cssText = "border-bottom : 2px solid #26a2dc; color : #26a2dc";
    bio1.style.cssText = "border-bottom : 2px solid #d1d1d1; color : #d1d1d1";
    bag1.style.cssText = "border-bottom : 2px solid #d1d1d1; color : #d1d1d1";

    forward.style.display = "none";
  }
}
