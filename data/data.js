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
    const jobDetailIcon = document.querySelector(".js-job-info i");
    jobDetailIcon.classList.toggle("fa-solid", jobToSave.saved);
    jobDetailIcon.classList.toggle("fa-regular", !jobToSave.saved);

    console.log(`Saved jobs:`, save);
  });
});

// Job card click event
document.querySelectorAll(".js-jobs").forEach((job) => {
  job.addEventListener("click", (e) => {
    const index = e.currentTarget.getAttribute("data-index");
    const jobDetail = generateJobDetailCard(jobs[index]);
    document.querySelector(".js-job-info").innerHTML = jobDetail;
  });
});

// Job card click event

document.querySelectorAll(".js-jobs").forEach((job) => {
  job.addEventListener("click", (e) => {
    // Check if the clicked element is not the save icon
    if (!e.target.closest(".save")) {
      const index = e.currentTarget.getAttribute("data-index");
      const jobDetail = generateJobDetailCard(jobs[index]);
      document.querySelector(".js-job-info").innerHTML = jobDetail;
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
    <div class="border-black border-2 w-[950px] rounded-lg px-[36px] py-[36px] js-job-card-container">
      <div class="flex justify-between items-center mb-[14px]">
        <img src="${job.logo}" alt="" class="w-[115px]" />
        <div class="flex justify-between items-center h-[70px]">
        <div class="flex justify-center items-center w-[300px] bg-[#25666A] text-white mr-[50px] h-[40px] my-2 rounded-lg">Apply for role</div>
          <i class="${
            job.saved ? "fa-solid" : "fa-regular"
          } fa-bookmark h-[24px]"></i>
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

// solve save icon switch issue
