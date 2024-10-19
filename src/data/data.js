const jobs = [
  {
    logo: "assets/logo.svg",
    role: "Web Developer",
    location: "Delft",
    datePosted: "1 week ago",
    jobInfo:
      "Job Description: We are looking for a Web Developer to join our team. You will be responsible for developing and maintaining our website, ensuring it is fast, responsive, and user-friendly. The ideal candidate has a passion for coding, problem-solving, and creating seamless web experiences. Expectation: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, maiores. Eaque quasi quaerat architecto ipsam doloribus voluptates tempore eveniet. Mollitia repellendus cum harum autem eum placeat facilis, adipisci voluptates vitae enim culpa laborum earum accusantium velit molestiae recusandae sint iusto, dolor, ipsum veritatis porro provident sequi. Maiores accusantium, eum nisi incidunt quisquam, expedita nesciunt neque accusamus necessitatibus molestiae repellat! Ipsa distinctio incidunt quasi eum ad veritatis vitae dolorem nihil inventore. Iusto est ad rerum dolorem nesciunt tenetur cum suscipit atque sit assumenda explicabo harum, eos modi veritatis quas aliquam alias accusantium! Nobis maxime consectetur esse voluptatum eum tempora voluptatem consequuntur autem nisi hic iusto saepe cupiditate, ut facere doloremque tempore ipsa pariatur. Laudantium praesentium consectetur voluptate, vero quae beatae dolor facilis iusto, excepturi atque aut nihil, dolorum illo ratione totam eius ea inventore laboriosam debitis corporis sit. Accusamus, at deserunt velit tenetur architecto, accusantium corporis ea, nihil dolorum aut numquam vel quas? Similique quam quibusdam temporibus minima deserunt ipsum omnis beatae atque laboriosam corporis, dolore facere accusantium optio odit illum. Alias vitae dicta, non ex explicabo asperiores tenetur fuga nulla, ullam pariatur quidem repellat magnam modi, accusantium autem eligendi suscipit aut. Iure quod iusto distinctio quis ut expedita, officiis unde facilis harum omnis obcaecati sint consequuntur, est quo sequi hic libero nulla vitae, beatae aspernatur aperiam! Animi, ipsum tempore? Delectus, sequi non nisi aut, praesentium tenetur iste consequatur suscipit voluptatem quia fugiat, numquam officia neque. Accusamus est laudantium illum soluta, nihil eos perferendis magni iure suscipit dolor expedita libero nesciunt voluptatem fuga, veritatis inventore, pariatur fugiat aspernatur exercitationem amet mollitia! Assumenda molestias ipsam voluptatum consequatur necessitatibus quisquam omnis quidem voluptatem fugiat doloribus placeat, similique vel reiciendis. Nulla dolorem fugiat, animi amet architecto omnis quis expedita praesentium culpa neque at repellendus natus! Atque possimus, sequi earum autem tempore quam cumque eos quo illo soluta ea laboriosa.",
  },

  {
    logo: "assets/logo.svg",
    role: "Jnr Full stack Developer",
    location: "Amstaerdam",
    datePosted: "2 days ago",
    jobInfo:
      "Job Description: We are looking for a Jnr Full stack Developer to join our team. You will be responsible for developing and maintaining our website, ensuring it is fast, responsive, and user-friendly. The ideal candidate has a passion for coding, problem-solving, and creating seamless web experiences.",
  },
  {
    logo: "assets/logo.svg",
    role: "Snr Full stack Developer",
    location: "Amstaerdam-North",
    datePosted: "6 days ago",
    jobInfo:
      "Job Description: We are looking for a skilled Snr Full stack Developer to join our team. You will be responsible for developing and maintaining our website, ensuring it is fast, responsive, and user-friendly. The ideal candidate has a passion for coding, problem-solving, and creating seamless web experiences.",
  },

  {
    logo: "assets/logo.svg",
    role: "Sales Advisor",
    location: "Amstaerdam-South",
    datePosted: "1 day ago",
    jobInfo:
      "Job Description: We are looking for a skilled Sales Advisor to join our team. You will be responsible for developing and maintaining our website, ensuring it is fast, responsive, and user-friendly. The ideal candidate has a passion for coding, problem-solving, and creating seamless web experiences.",
  },
  {
    logo: "assets/logo.svg",
    role: "Sales Advisor",
    location: "Amstaerdam-South",
    datePosted: "1 day ago",
    jobInfo:
      "Job Description: We are looking for a skilled Sales Advisor to join our team. You will be responsible for developing and maintaining our website, ensuring it is fast, responsive, and user-friendly. The ideal candidate has a passion for coding, problem-solving, and creating seamless web experiences.",
  },
  {
    logo: "assets/logo.svg",
    role: "Jnr Sales Advisor",
    location: "Amstaerdam-South",
    datePosted: "1 day ago",
    jobInfo:
      "Job Description: We are looking for a skilled Sales Advisor to join our team. You will be responsible for developing and maintaining our website, ensuring it is fast, responsive, and user-friendly. The ideal candidate has a passion for coding, problem-solving, and creating seamless web experiences.",
  },
  {
    logo: "assets/logo.svg",
    role: "Snr Sales Analyist",
    location: "Amstaerdam-South",
    datePosted: "1 day ago",
    jobInfo:
      "Job Description: We are looking for a skilled Sales Advisor to join our team. You will be responsible for developing and maintaining our website, ensuring it is fast, responsive, and user-friendly. The ideal candidate has a passion for coding, problem-solving, and creating seamless web experiences.",
  },
  {
    logo: "assets/logo.svg",
    role: "Recuriter",
    location: "Amstaerdam-South",
    datePosted: "1 day ago",
    jobInfo:
      "Job Description: We are looking for a skilled Sales Advisor to join our team. You will be responsible for developing and maintaining our website, ensuring it is fast, responsive, and user-friendly. The ideal candidate has a passion for coding, problem-solving, and creating seamless web experiences.",
  },
  {
    logo: "assets/logo.svg",
    role: "Manager",
    location: "Amstaerdam-South",
    datePosted: "1 day ago",
    jobInfo:
      "Job Description: We are looking for a skilled Sales Advisor to join our team. You will be responsible for developing and maintaining our website, ensuring it is fast, responsive, and user-friendly. The ideal candidate has a passion for coding, problem-solving, and creating seamless web experiences.",
  },
  {
    logo: "assets/logo.svg",
    role: "Sales Manager",
    location: "Amstaerdam-South",
    datePosted: "1 day ago",
    jobInfo:
      "Job Description: We are looking for a skilled Sales Advisor to join our team. You will be responsible for developing and maintaining our website, ensuring it is fast, responsive, and user-friendly. The ideal candidate has a passion for coding, problem-solving, and creating seamless web experiences.",
  },
];

let search = "";

let save = [];

// Function to render jobs
function renderJobs() {
  let search = "";
  jobs.forEach((job, index) => {
    search += `
      <div
        class="border-black border-2 w-[360px] mt-[25px] rounded-lg px-[13px] py-[13px] js-jobs" data-index="${index}"
      >
        <div class="flex justify-between h-[40px] items-center">
          <img src="${job.logo}" alt="" class="w-[85px] h-[40px] logo" />
          <div class="save cursor-pointer" data-index="${index}">
            <i class="${job.saved ? "fa-solid" : "fa-regular"} fa-bookmark"></i>
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

  // Re-attach event listeners
  document.querySelectorAll(".save").forEach((saves) => {
    saves.addEventListener("click", handleSaveClick);
  });

  // Re-attach event listeners for job cards
  document.querySelectorAll(".js-jobs").forEach((job) => {
    job.addEventListener("click", (e) => {
      const index = e.currentTarget.getAttribute("data-index");
      const jobDetail = generateJobDetailCard(jobs[index]);
      document.querySelector(".js-job-info").innerHTML = jobDetail;
    });
  });
}

// Handle save click event
function handleSaveClick(e) {
  e.stopPropagation();
  const index = e.currentTarget.getAttribute("data-index");
  const job = jobs[index];

  // Toggle saved status
  job.saved = !job.saved;

  // Update save list
  if (job.saved) {
    save.push(job);
    console.log(`Saved job: ${job.role}`);
  } else {
    save = save.filter((savedJob) => savedJob !== job);
    console.log(`Job has been removed: ${job.role}`);
  }

  // Refresh the job listings
  renderJobs();

  console.log("Current saved jobs:", save);
}

// Initial rendering of jobs
renderJobs();

// Initial display of the first job detail
document.querySelector(".js-jobs").click();

// Generate job detail function remains the same
function generateJobDetailCard(job) {
  return `
    <div class="border-black border-2 w-[950px] rounded-lg px-[36px] py-[36px] js-job-card-container">
      <div class="flex justify-between items-center mb-[14px]">
        <img src="${job.logo}" class="w-[115px]" />
        <div class="flex justify-between items-center bg-[#659FA3] w-[300px]" >
          <div class="w-[250px] bg-[#25666A] text-white flex justify-between items-center px-2 py-4 rounded-md cursor-pointer h-[40px] mr-24 ">Apply For Role</div>
          <i class="${job.saved ? "fa-solid" : "fa-regular"} fa-bookmark"></i>
        </div>  
      </div>

      <div class="pb-[12px]">
        <h4 class="text-[24px]">${job.role}</h4>
        <p>${job.location}</p>
      </div>

      <div class="job-text js-job-info">
        <h4 class="text-[20px] pt-[28px]">About the role</h4>
        <p class="description">${job.jobInfo}</p>
      </div>
    </div>`;
}

// job role, job loaction and dismiss icon
let jobRole = "";
let jobLocation = "";
const searchRole = document.getElementById("searchRole");
const searchLocation = document.getElementById("searchLocation");
const dismissRole = document.querySelector(".dismissRole");
const dismissLocation = document.querySelector(".dismissLocation");

// detect user input and show dismiss icon
searchRole.addEventListener("input", () => {
  jobRole = searchRole.value;
  runDismissIcon(searchRole, dismissRole);
});

searchLocation.addEventListener("change", () => {
  jobLocation = searchLocation.value;
  runDismissIcon(searchLocation, dismissLocation);
});

// display dismiss icon
function runDismissIcon(inputElem, iconElem) {
  if (inputElem.value !== "") {
    iconElem.style.display = "inline-block";
  } else {
    iconElem.style.display = "none";
  }
}

// Add event listener to dismiss role and location
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

// send user search input to the database
function sendDetails() {
  console.log(jobRole);
  console.log(jobLocation);
}

// job options starts
function toggleDropdown(id) {
  // Hide other dropdowns except the clicked one
  document.querySelectorAll(".flex #Xaxisdropdown").forEach((dropDown) => {
    if (dropDown.closest(".flex").id !== id) {
      dropDown.classList.add("hidden");
    }
  });

  // Toggle the clicked dropdown
  let dropDown = document.querySelector(`#${id} #Xaxisdropdown`);
  dropDown.classList.toggle("hidden");
}

// Close the dropdown if clicked outside
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

// see what user selected
function selectOption(element, dropdownId) {
  // Get the selected value
  const selectedValue = element.getAttribute("data-value");
  // Display selected value
  console.log(`Selected option from ${dropdownId}: ${selectedValue}`);
}

// build and design the save section

// make div and save icon the same
// solve save icon switch issue
