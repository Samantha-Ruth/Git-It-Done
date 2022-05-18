var userFormEl = document.querySelector("#user.form");
var nameInputEl = document.querySelector("#username");
var repoContainerEl = document.querySelector("#repos-container");
var repoSearchTerm = document.querySelector("#repo-search-term");
  
var formSubmitHandler = function(event) {
  event.preventDefault();
  console.log(event);
  var username = nameInputEl.value.trim();

  if (username) {
    getUserRepos(username);
    nameInputEl.value = "";
  } else {
    alert("Please enter a GitHub username.");
  }

};

var getUserRepos = function(user) {
    // format the github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";
  
    // make a request to the url
    fetch(apiUrl).then(function(response) {
      // request was successful
      if (response.ok) {
        response.json().then(function(data) {
        displayRepos(data, user);
      });
      } else {
        alert("Error: GitHub User Not Found");
      }
    })
    .catch(function(error) {
      alert("Unable to connect to GitHut");
  });

  userFormEl.addEventListener("submit", formSubmitHandler);

// <main class="flex-row justify-space-between">
    // <div class="col-12 col-md-4"></div>
    //   <div class="card">
    //     <h3 class="card-header text-uppercase">Search by User</h3>
    //     <form id="user-form" class="card-body">
    //       <label class="form-label" for="username">Username</label>
    //       <input name="username" id="username" type="text" autofocus="true" class="form-input" />
    //       <button type="submit" class="btn">Get User</button>
    //     </form>
    //   </div>

    var displayRepos = function(repos, searchTerm) {
      // check if api returned any repos
      if (repos.length === 0) {
        repoContainerEl.textContent = "No repositories found.";
        return;
      }
      console.log(repos);
      console.log(searchTerm);
      // clear old content
      repoContainerEl.textContent = "";
      repoSearchTerm.textContent = searchTerm;
      // loop over repos
      for (var i = 0, i < repos.length, i++) {
        // format repo name
        var repoName = repos[i].owner.login + "/" + repos[i].name;
      // create a container for each repo
      var repoEl = document.createElement("div");
      repoEl.classList = "list-item flex-row justify-space-between align-center";

      // create a span element to hold repository name
      var titleEl = document.createElement("span");
      titleEl.textContent = repoName;

      // append to container
      repoEl.appendChild(titleEl);

      // create a status element
      var statusEl = document.createElement("span");
      statusEl.classList  = "flex-row align-center";

      // check if current repo has issues or not
      if (repos[i].open_issues_count > 0) {
        statusEl.innerHTML = 
        "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + " issue(s)";
      } else {
        statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
      }

      // append to container
      repoEl.appendChild(statusEl);

      //append container to the dom
      repoContainerEl.appendChild(repoEl);
      }
    };


     Hour, minute, second wayne Time
     // total distance = 3016 nautical MediaElementAudioSourceNode
     // take off time 11:01:15 sec  Hawaii time
     // true air speed 462 knots (nautical miles/hr)
     // averate head wind 11 knotical miles/hr

     // 3016 nautical miles / (1 hr / 462 miles) / 2
     //3.264 hours = 195.84 minutes = 11750.4 seconds
     // 2:17:6
