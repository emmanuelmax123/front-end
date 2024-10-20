const jobs = [
  {
    logo: "assets/logo.svg",
    role: "Web Developer",
    location: "Delft",
    datePosted: "1 week ago",
    saved: false,
    jobInfo:
      "Job Description: We are looking for a Web Developer to join our team. You will be responsible for developing and maintaining our website, ensuring it is fast, responsive, and user-friendly. The ideal candidate has a passion for coding, problem-solving, and creating seamless web experiences. Expectation: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, maiores. Eaque quasi quaerat architecto ipsam doloribus voluptates tempore eveniet. Mollitia repellendus cum harum autem eum placeat facilis, adipisci voluptates vitae enim culpa laborum earum accusantium velit molestiae recusandae sint iusto, dolor,tempore eveniet. Mollitia repellendus cum harum autem eum placeat facilis, adipisci voluptates vitae enim culpa laborum earum accusantium velit molestiae recusandae sint iusto, dolor .",
  },

  {
    logo: "assets/logo.svg",
    role: "Jnr Full stack Developer",
    location: "Amstaerdam",
    datePosted: "2 days ago",
    saved: false,
    jobInfo:
      "Job Description: We are looking for a Jnr Full stack Developer to join our team. You will be responsible for developing and maintaining our website, ensuring it is fast, responsive, and user-friendly. The ideal candidate has a passion for coding, problem-solving, and creating seamless web experiences.",
  },
  {
    logo: "assets/logo.svg",
    role: "Snr Full stack Developer",
    location: "Amstaerdam-North",
    datePosted: "6 days ago",
    saved: false,
    jobInfo:
      "Job Description: We are looking for a skilled Snr Full stack Developer to join our team. You will be responsible for developing and maintaining our website, ensuring it is fast, responsive, and user-friendly. The ideal candidate has a passion for coding, problem-solving, and creating seamless web experiences.",
  },

  {
    logo: "assets/logo.svg",
    role: "Sales Advisor",
    location: "Amstaerdam-South",
    datePosted: "1 day ago",
    saved: false,
    jobInfo:
      "Job Description: We are looking for a skilled Sales Advisor to join our team. You will be responsible for developing and maintaining our website, ensuring it is fast, responsive, and user-friendly. The ideal candidate has a passion for coding, problem-solving, and creating seamless web experiences.",
  },
  {
    logo: "assets/logo.svg",
    role: "Sales Advisor",
    location: "Amstaerdam-South",
    datePosted: "1 day ago",
    saved: false,
    jobInfo:
      "Job Description: We are looking for a skilled Sales Advisor to join our team. You will be responsible for developing and maintaining our website, ensuring it is fast, responsive, and user-friendly. The ideal candidate has a passion for coding, problem-solving, and creating seamless web experiences.",
  },
  {
    logo: "assets/logo.svg",
    role: "Jnr Sales Advisor",
    location: "Amstaerdam-South",
    datePosted: "1 day ago",
    saved: false,
    jobInfo:
      "Job Description: We are looking for a skilled Sales Advisor to join our team. You will be responsible for developing and maintaining our website, ensuring it is fast, responsive, and user-friendly. The ideal candidate has a passion for coding, problem-solving, and creating seamless web experiences.",
  },
  {
    logo: "assets/logo.svg",
    role: "Snr Sales Analyist",
    location: "Amstaerdam-South",
    datePosted: "1 day ago",
    saved: false,
    jobInfo:
      "Job Description: We are looking for a skilled Sales Advisor to join our team. You will be responsible for developing and maintaining our website, ensuring it is fast, responsive, and user-friendly. The ideal candidate has a passion for coding, problem-solving, and creating seamless web experiences.",
  },
  {
    logo: "assets/logo.svg",
    role: "Recuriter",
    location: "Amstaerdam-South",
    datePosted: "1 day ago",
    saved: false,
    jobInfo:
      "Job Description: We are looking for a skilled Sales Advisor to join our team. You will be responsible for developing and maintaining our website, ensuring it is fast, responsive, and user-friendly. The ideal candidate has a passion for coding, problem-solving, and creating seamless web experiences.",
  },
  {
    logo: "assets/logo.svg",
    role: "Manager",
    location: "Amstaerdam-South",
    datePosted: "1 day ago",
    saved: false,
    jobInfo:
      "Job Description: We are looking for a skilled Sales Advisor to join our team. You will be responsible for developing and maintaining our website, ensuring it is fast, responsive, and user-friendly. The ideal candidate has a passion for coding, problem-solving, and creating seamless web experiences.",
  },
  {
    logo: "assets/logo.svg",
    role: "Sales Manager",
    location: "Amstaerdam-South",
    datePosted: "1 day ago",
    saved: false,
    jobInfo:
      "Job Description: We are looking for a skilled Sales Advisor to join our team. You will be responsible for developing and maintaining our website, ensuring it is fast, responsive, and user-friendly. The ideal candidate has a passion for coding, problem-solving, and creating seamless web experiences.",
  },
];

let search = "";
let save = [];

// Render job cards
jobs.forEach((job, index) => {
  search += `
        <div
          class="border-black border-2 w-[360px] mt-[25px] rounded-lg px-[13px] py-[13px] js-jobs" data-index="${index}"
        >
          <div class="flex justify-between h-[40px] items-center">
            <img src="${job.logo}" alt="" class="w-[85px] h-[40px] logo" />
            <div class="save cursor-pointer" data-index="${index}">
              <i class="fa-regular fa-bookmark h-[24px]"></i>
            </div>
            <div class="hidden save-solid">
              <i class="fa-solid fa-bookmark h-[24px] cursor-pointer"></i>
            </div>
          </div>
          <div class="flex w-[206px] mt-[15px]">
            <div>
              <h4 class="text-[14px] role">${job.role}</h4>
              <p class="location">${job.location}</p>
              <p class="date posted">${job.datePosted}</p>
            </div>
          </div>
        </div>`;
});

document.querySelector(".js-jobs-container").innerHTML = search;

// Save event listener for adding jobs to saved list
document.querySelectorAll(".save").forEach((saves) => {
  saves.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent parent click

    const index = saves.closest(".js-jobs").getAttribute("data-index");
    const jobToSave = jobs[index];

    if (jobToSave.saved) {
      // Toggle to unsave
      jobToSave.saved = false;
      save = save.filter((job) => job !== jobToSave);
    } else {
      // Save job
      jobToSave.saved = true;
      save.push(jobToSave);
    }

    // Update Icons
    const saveIcon = saves.querySelector("i");
    saveIcon.classList.toggle("fa-solid", jobToSave.saved);
    saveIcon.classList.toggle("fa-regular", !jobToSave.saved);

    // Also update the icon in the job detail view
    const jobDetailIcon = document.querySelector(".js-job-card-container i");
    jobDetailIcon.classList.toggle("fa-solid", jobToSave.saved);
    jobDetailIcon.classList.toggle("fa-regular", !jobToSave.saved);

    console.log(`Saved jobs:`, save);
  });
});

// adding job detail
document.querySelectorAll(".js-jobs").forEach((job) => {
  job.addEventListener("click", (e) => {
    const index = e.currentTarget.getAttribute("data-index");
    const jobDetail = generateJobDetailCard(jobs[index]);
    document.querySelector(".js-job-card-container").innerHTML = jobDetail;
  });
});

// Job card click event
document.querySelectorAll(".js-jobs").forEach((job) => {
  job.addEventListener("click", (e) => {
    // Check if the clicked element is not the save icon
    if (!e.target.closest(".save")) {
      const index = e.currentTarget.getAttribute("data-index");
      const jobDetail = generateJobDetailCard(jobs[index]);
      document.querySelector(".js-job-card-container").innerHTML = jobDetail;
    }
  });
});

// Display the first job
if (document.querySelector(".js-jobs")) {
  document.querySelector(".js-jobs").click();
}

// Generate job details
function generateJobDetailCard(job) {
  return `
    <div class="border-black border-2 w-[950px] rounded-lg px-[36px] py-[36px]">

      <div class="flex justify-between items-center mb-[14px]">
        <img src="${job.logo}" alt="" class="w-[115px]" />
        <div class="flex justify-between items-center h-[70px]">
        <a href="" class="flex justify-center items-center w-[300px] bg-[#25666A] text-white mr-[50px] h-[40px] my-2 rounded-lg">Apply for role</a>
          <i class="${
            job.saved ? "fa-solid" : "fa-regular"
          } fa-bookmark h-[24px]"></i>
         </div>
      </div>

      <div class="pb-[12px]">
        <h4 class="text-[24px]">${job.role}</h4>
        <p>${job.location}</p>
      </div>
      
      <div class=" flex flex-col h-[200px]" style="overflow-y: scroll;"
>
        <h4 class="text-[20px] pt-[28px]">About the role</h4>
        <p class="overflow-y-scroll">${job.jobInfo}</p>
      </div>
    </div>`;
}

// Search, Dismiss Icons & Dropdown functionality
let jobRole = "";
let jobLocation = "";
const searchRole = document.getElementById("searchRole");
const searchLocation = document.getElementById("searchLocation");
const dismissRole = document.querySelector(".dismissRole");
const dismissLocation = document.querySelector(".dismissLocation");

searchRole.addEventListener("input", () => {
  jobRole = searchRole.value;
  runDismissIcon(searchRole, dismissRole);
});

searchLocation.addEventListener("change", () => {
  jobLocation = searchLocation.value;
  runDismissIcon(searchLocation, dismissLocation);
});

function runDismissIcon(inputElem, iconElem) {
  iconElem.style.display = inputElem.value ? "inline-block" : "none";
}

dismissRole.addEventListener("click", () => {
  searchRole.value = "";
  jobRole = "";
  runDismissIcon(searchRole, dismissRole);
});

dismissLocation.addEventListener("click", () => {
  searchLocation.value = "";
  jobLocation = "";
  runDismissIcon(searchLocation, dismissLocation);
});

function toggleDropdown(id) {
  document.querySelectorAll(".flex #Xaxisdropdown").forEach((dropDown) => {
    if (dropDown.closest(".flex").id !== id) dropDown.classList.add("hidden");
  });

  const dropDown = document.querySelector(`#${id} #Xaxisdropdown`);
  dropDown.classList.toggle("hidden");
}

document.addEventListener("click", function (event) {
  const dropdowns = document.querySelectorAll(".flex #Xaxisdropdown");
  const buttons = document.querySelectorAll("[onclick^='toggleDropdown']");

  let clickedInsideDropdown = Array.from(dropdowns).some((dropDown) =>
    dropDown.contains(event.target)
  );
  let clickedOnButton = Array.from(buttons).some((button) =>
    button.contains(event.target)
  );

  if (!clickedInsideDropdown && !clickedOnButton) {
    dropdowns.forEach((dropDown) => dropDown.classList.add("hidden"));
  }
});

function selectOption(element, dropdownId) {
  const selectedValue = element.getAttribute("data-value");
  console.log(`Selected option from ${dropdownId}: ${selectedValue}`);
}

function sendDetails() {
  console.log(jobRole);
  console.log(jobLocation);
}

// build and design the save section

function saveJobs() {
  // creating a grid contaner
  let savedJobsHTML = "";

  jobs.forEach((job, index) => {
    if (job.saved === true) {
      const savedJobsIndex = `
        <div class="border-black border-2 w-[500px] rounded-lg px-[13px] py-[13px] js-jobs " data-index="${index}">
            <div class="flex justify-between h-[90px] items-center">
              <img src="${job.logo}" alt="" class="w-[85px] h-[70px] logo" />
              <div class="save cursor-pointer" data-index="${index}">
                <i class="fa-regular fa-bookmark h-[35px]"></i>
              </div>
              <div class="hidden save-solid">
                <i class="fa-solid fa-bookmark h-[24px] cursor-pointer"></i>
              </div>
            </div>
      
            <div class="flex w-[206px] mt-[15px]">
              <div>
                <h4 class="text-[14px] role">${job.role}</h4>
                <p class="location">${job.location}</p>
                <p class="date posted">${job.datePosted}</p>
              </div>
            </div>
            <div class="overflow-hidden h-[200px] pb-[12px]">
              <h4 class="text-[20px] pt-[28px]">About the role</h4>
              <p class="line-clamp-2">${job.jobInfo.substring(0, 100)}</p>
            </div>
            <a href="" class="flex justify-center items-center w-fit bg-[#25666A] text-white h-[40px] my-2 rounded-lg cursor-pointer">Apply for role</a>
            
        </div>`;
      savedJobsHTML += savedJobsIndex;
    }
  });

  // Check if there are saved jobs and update the content
  if (savedJobsHTML) {
    document.querySelector(".js-content").innerHTML = `
    
        <div class="flex-none w-full grid grid-cols-2 gap-2 mt-[50px]">
          ${savedJobsHTML}
        </div>
      `;
  } else {
    document.querySelector(".js-content").innerHTML = `
      <div class="flex justify-center items-center mt-40 w-full">
        <div class="text-center">
          <h1 class"mb-20">No saved jobs.</h1>
          <img src="assets/nosaved.jpg" class="w-[400px] h-[300px]">
        </div>
      </div>`;
  }
}

// solve save icon switch issue
