/* =========================================================
   HIRELANCE — JAVASCRIPT
   This file controls:
   1. Profile cards
   2. Freelancer search and filters
   3. Hirer search and filters
   4. Bottom navigation
   5. Separate freelancer and hirer signup forms
   ========================================================= */


/* ---------------------------------------------------------
   PART 1: SAMPLE DATA
   ---------------------------------------------------------

   These are demonstration profiles.
   Change the name, role, price, description and image URL
   to add your own freelancers and hirers.

   To use your own photo:
   1. Create an "images" folder beside these three files.
   2. Put your photo inside that folder.
   3. Change image: "https://..." to image: "images/your-photo.jpg"
--------------------------------------------------------- */

const freelancerData = [
    {
        name: 'Aarav Mehta',
        role: 'Brand & Graphic Designer',
        skill: 'Graphic Design',
        price: 8500,
        rating: '4.9',
        timeline: 'Immediately',
        image: "Rdj.jpeg",
        description: 'Creates visual identities, brand systems and campaign creatives for growing businesses.'
    },
    {
        name: 'Ishita Rao',
        role: 'Frontend Developer',
        skill: 'Web Development',
        price: 18000,
        rating: '5.0',
        timeline: 'Within a week',
        image: "olsen.jpeg",
        description: 'Builds responsive websites and clean user interfaces using HTML, CSS and JavaScript.'
    },
    {
        name: 'Kabir Sethi',
        role: 'Video Editor',
        skill: 'Video Editing',
        price: 7000,
        rating: '4.8',
        timeline: 'Immediately',
        image: "Leo.jpeg",
        description: 'Edits short-form videos, reels, product films and social media campaigns.'
    },
    {
        name: 'Vijay Khanna',
        role: 'Content Strategist',
        skill: 'Content Writing',
        price: 6000,
        rating: '4.9',
        timeline: 'Flexible',
        image: "murphy.jpeg",
        description: 'Writes blogs, website copy and content plans with a clear brand voice.'
    },
    {
        name: 'Dev Malhotra',
        role: 'Motion & 3D Artist',
        skill: 'Animation',
        price: 15000,
        rating: '4.8',
        timeline: 'Within two weeks',
        image: "benedict.jpeg",
        description: 'Produces motion graphics, 3D visuals and animated explainers.'
    },
    {
        name: 'Rhea Sen',
        role: 'UI/UX Designer',
        skill: 'UI/UX Design',
        price: 12500,
        rating: '4.7',
        timeline: 'Within a week',
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&h=700&fit=crop",
        description: 'Designs user journeys, wireframes and polished digital product interfaces.'
    },
    {
        name: 'Arjun Bhatia',
        role: 'Web Designer',
        skill: 'Web Development',
        price: 14000,
        rating: '4.8',
        timeline: 'Flexible',
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=700&fit=crop",
        description: 'Creates modern landing pages and responsive websites for small businesses.'
    },
    {
        name: 'Naina Verma',
        role: 'Social Media Designer',
        skill: 'Graphic Design',
        price: 5500,
        rating: '4.6',
        timeline: 'Immediately',
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=700&fit=crop",
        description: 'Designs social media posts, carousels, stories and campaign templates.'
    },
    {
        name: 'Rehan Khan',
        role: 'Content Writer',
        skill: 'Content Writing',
        price: 4500,
        rating: '4.7',
        timeline: 'Within a week',
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=700&fit=crop",
        description: 'Writes SEO articles, product descriptions and engaging website content.'
    },
    {
        name: 'Ananya Das',
        role: 'Product Photographer',
        skill: 'Photography',
        price: 9500,
        rating: '4.9',
        timeline: 'Within two weeks',
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=700&fit=crop",
        description: 'Shoots clean product photographs and lifestyle images for online brands.'
    },
    {
        name: 'Vivaan Khanna',
        role: '2D Animator',
        skill: 'Animation',
        price: 16000,
        rating: '4.8',
        timeline: 'Flexible',
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop",
        description: 'Creates character animation, motion explainers and animated social content.'
    },
    {
        name: 'Tara Iyer',
        role: 'UX Researcher',
        skill: 'UI/UX Design',
        price: 11000,
        rating: '4.7',
        timeline: 'Within a week',
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=700&fit=crop",
        description: 'Conducts user research, usability reviews and information architecture planning.'
    },
    {
        name: 'Aditya Rao',
        role: 'JavaScript Developer',
        skill: 'Web Development',
        price: 22000,
        rating: '4.9',
        timeline: 'Immediately',
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=700&fit=crop",
        description: 'Develops interactive frontend features and improves website performance.'
    },
    {
        name: 'Sana Mirza',
        role: 'Reels & Video Editor',
        skill: 'Video Editing',
        price: 8000,
        rating: '4.8',
        timeline: 'Within two weeks',
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&h=700&fit=crop",
        description: 'Edits Instagram reels, YouTube shorts and promotional videos.'
    },
    {
        name: 'Kunal Arora',
        role: 'Brand Identity Designer',
        skill: 'Graphic Design',
        price: 13000,
        rating: '4.9',
        timeline: 'Flexible',
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=700&fit=crop",
        description: 'Builds logo systems, typography guidelines and complete brand identities.'
    },
    {
        name: 'Meher Gill',
        role: 'Copywriter',
        skill: 'Content Writing',
        price: 7500,
        rating: '4.6',
        timeline: 'Immediately',
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=700&fit=crop",
        description: 'Writes concise advertising copy, email campaigns and product messaging.'
    },
    {
        name: 'Ritvik Bose',
        role: 'Motion Graphics Artist',
        skill: 'Animation',
        price: 19000,
        rating: '4.8',
        timeline: 'Within two weeks',
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop",
        description: 'Creates animated titles, logo reveals and motion graphics for brands.'
    },
    {
        name: 'Diya Nair',
        role: 'Visual Designer',
        skill: 'UI/UX Design',
        price: 14500,
        rating: '4.9',
        timeline: 'Within a week',
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=700&fit=crop",
        description: 'Designs accessible interfaces and visual systems for web applications.'
    },
    {
        name: 'Manav Suri',
        role: 'Commercial Photographer',
        skill: 'Photography',
        price: 10500,
        rating: '4.7',
        timeline: 'Flexible',
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=700&fit=crop",
        description: 'Photographs products, people and spaces for commercial campaigns.'
    },
    {
        name: 'Zoya Fernandes',
        role: 'Short-form Video Editor',
        skill: 'Video Editing',
        price: 6500,
        rating: '4.8',
        timeline: 'Immediately',
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=700&fit=crop",
        description: 'Turns raw footage into polished reels, shorts and social media edits.'
    }
];


const hirerData = [
    {
        name: 'Syncopy Studios',
        role: 'Creative studio',
        paycheck: 25000,
        duration: '1 month',
        workType: 'Remote',
        image: "nolan.jpeg",
        description: 'Hiring a designer for a brand refresh and digital campaign assets.'
    },
    {
        name: 'Marvel Studios',
        role: 'Technology company',
        paycheck: 40000,
        duration: 'Long-term',
        workType: 'Hybrid',
        image: "feige.jpeg",
        description: 'Looking for a frontend developer to help ship product features and improve UI.'
    },
    {
        name: 'Dharma productions',
        role: 'Media and content team',
        paycheck: 12000,
        duration: '1–2 weeks',
        workType: 'Remote',
        image: "mouli.jpeg",
        description: 'Needs a video editor for short-form social content and launch videos.'
    },
    {
        name: ' Pixelroot Labs',
        role: 'Digital agency',
        paycheck: 18000,
        duration: 'Short-term',
        workType: 'Project-based',
        image: "martin.jpeg",
        description: 'Seeking a content writer for blogs, landing pages and campaign copy.'
    },
    {
        name: 'Sony Pictures',
        role: 'Design agency',
        paycheck: 30000,
        duration: '1 month',
        workType: 'On-site',
        image: "raimi.jpeg",
        description: 'Hiring an animator for a product explainer and motion graphics package.'
    },
    {
        name: 'Maple & Main',
        role: 'Retail brand',
        paycheck: 16000,
        duration: 'Short-term',
        workType: 'Remote',
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=700&fit=crop",
        description: 'Needs a graphic designer for seasonal product creatives and advertisements.'
    },
    {
        name: 'BluePeak Technologies',
        role: 'Software company',
        paycheck: 35000,
        duration: 'Long-term',
        workType: 'Hybrid',
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=700&fit=crop",
        description: 'Hiring a web developer to maintain and expand its customer-facing platform.'
    },
    {
        name: 'Frame by Frame',
        role: 'Production house',
        paycheck: 22000,
        duration: '1–2 weeks',
        workType: 'Project-based',
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=700&fit=crop",
        description: 'Looking for a video editor for a branded film and social media cutdowns.'
    },
    {
        name: 'Common Thread',
        role: 'Content agency',
        paycheck: 14000,
        duration: '1 month',
        workType: 'Remote',
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=700&fit=crop",
        description: 'Seeking a writer for long-form articles, newsletters and website content.'
    },
    {
        name: 'Studio Katha',
        role: 'Design and branding firm',
        paycheck: 28000,
        duration: 'Long-term',
        workType: 'On-site',
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=700&fit=crop",
        description: 'Hiring a visual designer for identity systems and client presentations.'
    },
    {
        name: 'Launchpad Commerce',
        role: 'E-commerce company',
        paycheck: 32000,
        duration: '1 month',
        workType: 'Hybrid',
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=700&fit=crop",
        description: 'Needs a UI/UX designer to improve product pages and checkout journeys.'
    },
    {
        name: 'Little Lantern',
        role: 'Independent publisher',
        paycheck: 9000,
        duration: 'Short-term',
        workType: 'Remote',
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=700&fit=crop",
        description: 'Looking for an illustrator and content creator for a new publication.'
    },
    {
        name: 'Vertex Events',
        role: 'Events company',
        paycheck: 20000,
        duration: '1–2 weeks',
        workType: 'On-site',
        image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&h=700&fit=crop",
        description: 'Hiring a photographer and editor for event coverage and highlight videos.'
    },
    {
        name: 'Goodfolk Digital',
        role: 'Digital marketing agency',
        paycheck: 24000,
        duration: 'Long-term',
        workType: 'Remote',
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=700&fit=crop",
        description: 'Seeking a social media creative to plan and produce campaign content.'
    },
    {
        name: 'Redwood Innovations',
        role: 'Product startup',
        paycheck: 38000,
        duration: 'Long-term',
        workType: 'Hybrid',
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=700&fit=crop",
        description: 'Looking for a frontend specialist to collaborate on a new digital product.'
    }
];

/* ---------------------------------------------------------
   PART 2: SMALL HELPER FUNCTIONS
--------------------------------------------------------- */

// A shortcut to select an HTML element by its ID.
function getElement(id) {
    return document.getElementById(id);
}

// Convert a number into Indian Rupee format.
function formatRupees(amount) {
    return "₹" + Number(amount).toLocaleString("en-IN");
}


/* ---------------------------------------------------------
   PART 3: CREATE FREELANCER AND HIRER PROFILE CARDS
--------------------------------------------------------- */

// This function creates one freelancer card.
function createFreelancerCard(freelancer, index) {
    return `
        <article class="profile-card">
            <div class="profile-image-wrap">
                <img
                    class="profile-image"
                    src="${freelancer.image}"
                    alt="Portrait of ${freelancer.name}"
                    loading="lazy"
                >
            </div>

            <div class="profile-info">
                <h3>${freelancer.name}</h3>
                <p class="profile-role">${freelancer.role}</p>

                <div class="profile-meta">
                    <span>★ ${freelancer.rating}</span>
                    <span class="highlight">FROM ${formatRupees(freelancer.price)}</span>
                </div>
            </div>
        </article>
    `;
}


// This function creates one hirer card.
function createHirerCard(hirer) {
    return `
        <article class="profile-card">
            <div class="profile-image-wrap">
                <img
                    class="profile-image"
                    src="${hirer.image}"
                    alt="Representative image for ${hirer.name}"
                    loading="lazy"
                >
            </div>

            <div class="profile-info">
                <h3>${hirer.name}</h3>
                <p class="profile-role">${hirer.role}</p>

                <div class="profile-meta">
                    <span>${hirer.workType}</span>
                    <span class="highlight">UP TO ${formatRupees(hirer.paycheck)}</span>
                </div>
            </div>
        </article>
    `;
}


// Display the sample freelancer cards on the home page.
function displayTopFreelancers() {
    const freelancerContainer = getElement("topFreelancers");

    freelancerContainer.innerHTML = freelancerData
        .slice(0, 5) // Display only the five monthly featured freelancers.
        .map((freelancer, index) => createFreelancerCard(freelancer, index))
        .join("");
}


// Display the sample hirer cards on the home page.
function displayTopHirers() {
    const hirerContainer = getElement("topHirers");

    hirerContainer.innerHTML = hirerData
        .slice(0, 5) // Display only the five monthly featured hirers.
        .map(hirer => createHirerCard(hirer))
        .join("");
}

// Call both functions when the page loads.
displayTopFreelancers();
displayTopHirers();


/* ---------------------------------------------------------
   PART 4: SWITCH BETWEEN HOME AND SEARCH PAGES
--------------------------------------------------------- */

function showSearchPage(pageId) {
    // Hide the homepage sections and show the selected search page.
    document.querySelectorAll("main > section").forEach(function (section) {
        section.hidden = true;
    });

    getElement(pageId).hidden = false;

    // Update the active footer tab to match the search page.
    document.querySelectorAll(".footer-nav-link").forEach(function (link) {
        const isFreelancerSearch =
            pageId === "freelancerSearchPage" &&
            link.getAttribute("href") === "#freelancers";

        const isHirerSearch =
            pageId === "hirerSearchPage" &&
            link.getAttribute("href") === "#hirers";

        link.classList.toggle("active", isFreelancerSearch || isHirerSearch);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
}


function showHomeSections(targetId) {
    // Hide the two search pages first.
    getElement("freelancerSearchPage").hidden = true;
    getElement("hirerSearchPage").hidden = true;

    // Restore all normal homepage sections.
    document.querySelectorAll("main > section").forEach(function (section) {
        section.hidden = false;
    });

    // If a section ID was supplied, scroll to that section.
    if (targetId) {
        const targetSection = getElement(targetId);

        if (targetSection) {
            // Wait one frame so the browser has restored the section layout.
            requestAnimationFrame(function () {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            });
        }
    } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}


// Back buttons restore the relevant homepage section.
document.querySelectorAll("[data-return-home]").forEach(function (button) {
    button.addEventListener("click", function () {
        const pageId = button.closest(".search-page").id;

        if (pageId === "freelancerSearchPage") {
            showHomeSections("freelancers");
        } else {
            showHomeSections("hirers");
        }
    });
});


// Bottom navigation must work even while a search page is open.
// It restores the homepage before scrolling to the chosen section.
document.querySelectorAll(".footer-nav-link, .footer-brand").forEach(function (link) {
    link.addEventListener("click", function (event) {
        const href = link.getAttribute("href");

        if (href && href.startsWith("#")) {
            event.preventDefault();
            const targetId = href.substring(1);
            showHomeSections(targetId);
        }
    });
});


// Open the freelancer search page when its call-to-action button is clicked.
getElement("showFreelancerSearch").addEventListener("click", function () {
    showSearchPage("freelancerSearchPage");

    // Display all 20 profiles initially. The visitor can then apply filters.
    filterFreelancers();
});


// Open the hirer search page when its call-to-action button is clicked.
getElement("showHirerSearch").addEventListener("click", function () {
    showSearchPage("hirerSearchPage");

    // Display all 15 profiles initially. The visitor can then apply filters.
    filterHirers();
});


/* ---------------------------------------------------------
   PART 5: FREELANCER SEARCH AND FILTERS
--------------------------------------------------------- */

function filterFreelancers() {
    // Read the visitor's search text.
    const searchText = getElement("freelancerSearchInput")
        .value
        .trim()
        .toLowerCase();

    // Read the minimum and maximum price.
    const minimumPrice = Number(getElement("freelancerMinPrice").value) || 0;

    const maximumPriceInput = getElement("freelancerMaxPrice").value;
    const maximumPrice = maximumPriceInput === ""
        ? Infinity
        : Number(maximumPriceInput);

    // Read the selected skill and hiring timeline.
    const selectedSkill = getElement("freelancerSkill").value;
    const selectedTimeline = getElement("freelancerTime").value;

    // Filter the freelancer data using all selected conditions.
    const matchingFreelancers = freelancerData.filter(function (freelancer) {
        const searchableInformation = (
            freelancer.name + " " +
            freelancer.role + " " +
            freelancer.skill + " " +
            freelancer.description
        ).toLowerCase();

        const matchesSearch = searchableInformation.includes(searchText);
        const matchesMinimum = freelancer.price >= minimumPrice;
        const matchesMaximum = freelancer.price <= maximumPrice;

        const matchesSkill = selectedSkill === "" ||
            freelancer.skill === selectedSkill;

        const matchesTimeline = selectedTimeline === "" ||
            freelancer.timeline === selectedTimeline;

        return matchesSearch &&
            matchesMinimum &&
            matchesMaximum &&
            matchesSkill &&
            matchesTimeline;
    });

    // Display the filtered results.
    displayFreelancerResults(matchingFreelancers);
}


function displayFreelancerResults(results) {
    const resultContainer = getElement("freelancerSearchResults");
    const countContainer = getElement("freelancerResultCount");

    countContainer.textContent =
        results.length + (results.length === 1
            ? " freelancer found"
            : " freelancers found");

    if (results.length === 0) {
        resultContainer.innerHTML = `
            <div class="empty-state">
                No freelancers match these filters.
                Try changing your search or widening your price range.
            </div>
        `;
        return;
    }

    resultContainer.innerHTML = results.map(function (freelancer) {
        return `
            <article class="result-card">
                <div>
                    <h3>${freelancer.name}</h3>
                    <p>${freelancer.role} — ${freelancer.description}</p>

                    <div class="result-tags">
                        <span>${freelancer.skill}</span>
                        <span>${freelancer.timeline}</span>
                        <span>★ ${freelancer.rating}</span>
                    </div>
                </div>

                <div class="result-price">
                    <strong>${formatRupees(freelancer.price)}</strong>
                    Starting price
                </div>
            </article>
        `;
    }).join("");
}


// Re-run freelancer filtering whenever a filter changes.
const freelancerFilterIds = [
    "freelancerSearchInput",
    "freelancerMinPrice",
    "freelancerMaxPrice",
    "freelancerSkill",
    "freelancerTime"
];

freelancerFilterIds.forEach(function (elementId) {
    getElement(elementId).addEventListener("input", filterFreelancers);
});


// Reset all freelancer search fields.
getElement("resetFreelancerFilters").addEventListener("click", function () {
    getElement("freelancerSearchInput").value = "";
    getElement("freelancerMinPrice").value = "";
    getElement("freelancerMaxPrice").value = "";
    getElement("freelancerSkill").value = "";
    getElement("freelancerTime").value = "";

    filterFreelancers();
});


/* ---------------------------------------------------------
   PART 6: HIRER SEARCH AND FILTERS
--------------------------------------------------------- */

function filterHirers() {
    const searchText = getElement("hirerSearchInput")
        .value
        .trim()
        .toLowerCase();

    const minimumPay = Number(getElement("hirerMinPay").value) || 0;

    const maximumPayInput = getElement("hirerMaxPay").value;
    const maximumPay = maximumPayInput === ""
        ? Infinity
        : Number(maximumPayInput);

    const selectedDuration = getElement("hirerDuration").value;
    const selectedWorkType = getElement("hirerWorkType").value;

    const matchingHirers = hirerData.filter(function (hirer) {
        const searchableInformation = (
            hirer.name + " " +
            hirer.role + " " +
            hirer.description + " " +
            hirer.workType
        ).toLowerCase();

        const matchesSearch = searchableInformation.includes(searchText);
        const matchesMinimum = hirer.paycheck >= minimumPay;
        const matchesMaximum = hirer.paycheck <= maximumPay;

        const matchesDuration = selectedDuration === "" ||
            hirer.duration === selectedDuration;

        const matchesWorkType = selectedWorkType === "" ||
            hirer.workType === selectedWorkType;

        return matchesSearch &&
            matchesMinimum &&
            matchesMaximum &&
            matchesDuration &&
            matchesWorkType;
    });

    displayHirerResults(matchingHirers);
}


function displayHirerResults(results) {
    const resultContainer = getElement("hirerSearchResults");
    const countContainer = getElement("hirerResultCount");

    countContainer.textContent =
        results.length + (results.length === 1
            ? " hirer found"
            : " hirers found");

    if (results.length === 0) {
        resultContainer.innerHTML = `
            <div class="empty-state">
                No hirers match these filters.
                Try changing your search conditions.
            </div>
        `;
        return;
    }

    resultContainer.innerHTML = results.map(function (hirer) {
        return `
            <article class="result-card">
                <div>
                    <h3>${hirer.name}</h3>
                    <p>${hirer.role} — ${hirer.description}</p>

                    <div class="result-tags">
                        <span>${hirer.workType}</span>
                        <span>${hirer.duration}</span>
                    </div>
                </div>

                <div class="result-price">
                    <strong>${formatRupees(hirer.paycheck)}</strong>
                    Paycheck
                </div>
            </article>
        `;
    }).join("");
}


// Re-run hirer filtering whenever a filter changes.
const hirerFilterIds = [
    "hirerSearchInput",
    "hirerMinPay",
    "hirerMaxPay",
    "hirerDuration",
    "hirerWorkType"
];

hirerFilterIds.forEach(function (elementId) {
    getElement(elementId).addEventListener("input", filterHirers);
});


// Reset all hirer search fields.
getElement("resetHirerFilters").addEventListener("click", function () {
    getElement("hirerSearchInput").value = "";
    getElement("hirerMinPay").value = "";
    getElement("hirerMaxPay").value = "";
    getElement("hirerDuration").value = "";
    getElement("hirerWorkType").value = "";

    filterHirers();
});



/* ---------------------------------------------------------
   SHOW ALL PROFILES
   ---------------------------------------------------------
   These buttons clear all search conditions and display every
   item in the relevant data array: 20 freelancers or 15 hirers.
--------------------------------------------------------- */

getElement("showAllFreelancers").addEventListener("click", function () {
    getElement("freelancerSearchInput").value = "";
    getElement("freelancerMinPrice").value = "";
    getElement("freelancerMaxPrice").value = "";
    getElement("freelancerSkill").value = "";
    getElement("freelancerTime").value = "";
    filterFreelancers();
});

getElement("showAllHirers").addEventListener("click", function () {
    getElement("hirerSearchInput").value = "";
    getElement("hirerMinPay").value = "";
    getElement("hirerMaxPay").value = "";
    getElement("hirerDuration").value = "";
    getElement("hirerWorkType").value = "";
    filterHirers();
});



/* ---------------------------------------------------------
   PART 7: BOTTOM NAVIGATION
--------------------------------------------------------- */

// Mark the currently visible section in the bottom navigation.
const navigationLinks = document.querySelectorAll(".footer-nav-link");

const pageSections = [
    getElement("home"),
    getElement("freelancers"),
    getElement("hirers"),
    getElement("about")
];

const sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            navigationLinks.forEach(function (link) {
                const sectionLink = link.getAttribute("href");
                const currentSection = "#" + entry.target.id;

                link.classList.toggle(
                    "active",
                    sectionLink === currentSection
                );
            });
        }
    });
}, {
    rootMargin: "-35% 0px -55% 0px"
});

pageSections.forEach(function (section) {
    sectionObserver.observe(section);
});


/* ---------------------------------------------------------
   PART 8: OPEN AND CLOSE SIGNUP MODAL
--------------------------------------------------------- */

const signupModal = getElement("signupModal");

getElement("openSignup").addEventListener("click", function () {
    signupModal.hidden = false;
    document.body.style.overflow = "hidden";
});


function closeSignupModal() {
    signupModal.hidden = true;
    document.body.style.overflow = "";
}

getElement("closeSignup").addEventListener("click", closeSignupModal);

// Close the modal if the user clicks the dark area outside the form.
signupModal.addEventListener("click", function (event) {
    if (event.target === signupModal) {
        closeSignupModal();
    }
});


/* ---------------------------------------------------------
   PART 9: SWITCH BETWEEN FREELANCER AND HIRER FORMS
--------------------------------------------------------- */

const accountTypeButtons = document.querySelectorAll(".account-type-button");

function changeAccountType(accountType) {
    // Update the selected button's appearance.
    accountTypeButtons.forEach(function (button) {
        const isSelected = button.dataset.accountType === accountType;
        button.classList.toggle("selected", isSelected);
    });

    // Show the correct form and hide the other form.
    if (accountType === "freelancer") {
        getElement("freelancerSignupForm").hidden = false;
        getElement("hirerSignupForm").hidden = true;
    } else {
        getElement("freelancerSignupForm").hidden = true;
        getElement("hirerSignupForm").hidden = false;
    }

    // Clear the form message when switching account type.
    getElement("formMessage").textContent =
        "Frontend demo: connect a backend to securely save account details.";
}


// Add a click event to both account type buttons.
accountTypeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        changeAccountType(button.dataset.accountType);
    });
});


/* ---------------------------------------------------------
   PART 10: HIRER USAGE SELECTION
---------------------------------------------------------

   The address field is always shown.
   The certificate upload is relevant to firm/company use,
   so it is shown when either of those options is selected.
--------------------------------------------------------- */

const hirerUsageOptions = document.querySelectorAll('input[name="hirerUsage"]');

function updateHirerFields() {
    let selectedUsage = "";

    hirerUsageOptions.forEach(function (option) {
        if (option.checked) {
            selectedUsage = option.value;
        }
    });

    const certificateField = getElement("companyCertificateField");

    if (selectedUsage === "Firm" || selectedUsage === "Company") {
        certificateField.hidden = false;
    } else {
        certificateField.hidden = true;
        getElement("hirerCertificate").value = "";
    }
}

hirerUsageOptions.forEach(function (option) {
    option.addEventListener("change", updateHirerFields);
});


/* ---------------------------------------------------------
   PART 11: FORM SUBMISSION DEMONSTRATION
---------------------------------------------------------

   These event handlers demonstrate front-end validation.
   They do not send data to a server or create real accounts.
--------------------------------------------------------- */

getElement("freelancerSignupForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect all selected freelancer skills.
    const selectedSkills = document.querySelectorAll(
        'input[name="freelancerSkills"]:checked'
    );

    if (selectedSkills.length === 0) {
        getElement("formMessage").textContent =
            "Please select at least one skill before submitting.";
        return;
    }

    getElement("formMessage").textContent =
        "Freelancer form validated. Connect a backend to securely register this account.";
});


getElement("hirerSignupForm").addEventListener("submit", function (event) {
    event.preventDefault();

    getElement("formMessage").textContent =
        "Hirer form validated. Connect a backend to securely register this account.";
});


/* ---------------------------------------------------------
   END OF HIRELANCE JAVASCRIPT
--------------------------------------------------------- */
