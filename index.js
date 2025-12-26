const books = {
    Mathematics: {
        name: "Mathematics",
        details: {
            chapters: 13
        },
        chapter: [
            { name: "Maths Ch1 : Number Systems", file: "./files/maths/number-systems.pdf" },
            { name: "Maths Ch2 : Polynomials", file: "./files/maths/polynomials.pdf" },
            { name: "Maths Ch3 : Coordinate Geometry", file: "./files/maths/coordinate-geometry.pdf" },
            { name: "Maths Ch4 : Linear Equations in Two Variables", file: "./files/maths/linear-equations.pdf" },
            { name: "Maths Ch5 : Introduction to Euclid’s Geometry", file: "./files/maths/euclids-geometry.pdf" },
            { name: "Maths Ch6 : Lines and Angles", file: "./files/maths/lines-and-angles.pdf" },
            { name: "Maths Ch7 : Triangles", file: "./files/maths/triangles.pdf" },
            { name: "Maths Ch8 : Quadrilaterals", file: "./files/maths/quadrilaterals.pdf" },
            { name: "Maths Ch9 : Circles", file: "./files/maths/circles.pdf" },
            { name: "Maths Ch10 : Heron’s Formula", file: "./files/maths/herons-formula.pdf" },
            { name: "Maths Ch11 : Surface Areas and Volumes", file: "./files/maths/surface-area.pdf" },
            { name: "Maths Ch12 : Statistics", file: "./files/maths/statistics.pdf" },
            { name: "Maths : Rd Sharma", file: "./files/maths/rdsharma.pdf" },
        ]
    },

    Science: {
        name: "Science",
        details: {
            chapters: 12
        },
        chapter: [
            { name: "Chemistry Ch1 : Matter in Our Surroundings", file: "./files/science/matter.pdf" },
            { name: "Chemistry Ch2 : Is Matter Around Us Pure?", file: "./files/science/pure-matter.pdf" },
            { name: "Chemistry Ch3 : Atoms and Molecules", file: "./files/science/atoms.pdf" },
            { name: "Chemistry Ch4 : Structure of the Atom", file: "./files/science/structure-atom.pdf" },
            { name: "Biology Ch1 : The Fundamental Unit of Life", file: "./files/science/cell.pdf" },
            { name: "Biology Ch2 : Tissues", file: "./files/science/tissues.pdf" },
            { name: "Physics Ch1 : Motion", file: "./files/science/motion.pdf" },
            { name: "Physics Ch2 : Force and Laws of Motion", file: "./files/science/force-laws.pdf" },
            { name: "Physics Ch3 : Gravitation", file: "./files/science/gravitation.pdf" },
            { name: "Physics Ch4 : Work and Energy", file: "./files/science/work-energy.pdf" },
            { name: "Physics Ch5 : Sound", file: "./files/science/sound.pdf" },
            { name: "Biology Ch3 : Improvement in Food Resources", file: "./files/science/food-resources.pdf" },
        ]
    },

    SocialScience: {
        name: "Social Science",
        details: {
            chapters: 20
        },
        chapter: [
            // History
            { name: "History Ch1 : The French Revolution", file: "./files/sst/history-french-revolution.pdf" },
            { name: "History Ch2 : Socialism in Europe and the Russian Revolution", file: "./files/sst/history-russian-revolution.pdf" },
            { name: "History Ch3 : Nazism and the Rise of Hitler", file: "./files/sst/history-hitler.pdf" },
            { name: "History Ch4 : Forest Society and Colonialism", file: "./files/sst/history-forest.pdf" },
            { name: "History Ch5 : Pastoralists in the Modern World", file: "./files/sst/history-pastoralists.pdf" },

            // Geography
            { name: "Geography Ch1 : India – Size and Location", file: "./files/sst/geography-size-location.pdf" },
            { name: "Geography Ch2 : Physical Features of India", file: "./files/sst/geography-physical-features.pdf" },
            { name: "Geography Ch3 : Drainage", file: "./files/sst/geography-drainage.pdf" },
            { name: "Geography Ch4 : Climate", file: "./files/sst/geography-climate.pdf" },
            { name: "Geography Ch5 : Natural Vegetation and Wildlife", file: "./files/sst/geography-vegetation.pdf" },
            { name: "Geography Ch6 : Population", file: "./files/sst/geography-population.pdf" },

            // Political Science
            { name: "Civics Ch1 : What is Democracy? Why Democracy?", file: "./files/sst/political-what-is-democracy.pdf" },
            { name: "Civics Ch2 : Constitutional Design", file: "./files/sst/political-constitution.pdf" },
            { name: "Civics Ch3 : Electoral Politics", file: "./files/sst/political-elections.pdf" },
            { name: "Civics Ch4 : Working of Institutions", file: "./files/sst/political-institutions.pdf" },
            { name: "Civics Ch5 : Democratic Rights", file: "./files/sst/political-rights.pdf" },

            // Economics
            { name: "Economics Ch1 : The Story of Village Palampur", file: "./files/sst/economics-palampur.pdf" },
            { name: "Economics Ch2 : People as Resource", file: "./files/sst/economics-people.pdf" },
            { name: "Economics Ch3 : Poverty as a Challenge", file: "./files/sst/economics-poverty.pdf" },
            { name: "Economics Ch4 : Food Security in India", file: "./files/sst/economics-food-security.pdf" }
        ]
    },

    English: {
        name: "English",
        details: {
            chapters: 21
        },
        chapter: [
            // Beehive
            { name: "Beehive Ch1 : The Fun They Had", file: "./files/english/bfth.pdf" },
            { name: "Beehive Ch2 : The Sound of Music", file: "./files/english/tsom.pdf" },
            { name: "Beehive Ch3 : The Little Girl", file: "./files/english/tlg.pdf" },
            { name: "Beehive Ch4 : A Truly Beautiful Mind", file: "./files/english/atbm.pdf" },
            { name: "Beehive Ch5 : The Snake and the Mirror", file: "./files/english/tsatm.pdf" },
            { name: "Beehive Ch6 : My Childhood", file: "./files/english/mc.pdf" },
            { name: "Beehive Ch7 : Reach for the Top", file: "./files/english/rftt.pdf" },
            { name: "Beehive Ch8 : Kathmandu", file: "./files/english/tbol.pdf" },
            { name: "Beehive Ch9 : If I Were You", file: "./files/english/iiwy.pdf" },

            // Moments
            { name: "Moments Ch1 : Lost Child", file: "./files/english/tlc.pdf" },
            { name: "Moments Ch2 : The Adventure of the Toto", file: "./files/english/taott.pdf" },
            { name: "Moments Ch3 : Iswaran the Storyteller", file: "./files/english/itst.pdf" },
            { name: "Moments Ch4 : In the Kingdom of Fools", file: "./files/english/itkof.pdf" },
            { name: "Moments Ch5 : The Happy Prince", file: "./files/english/thp.pdf" },
            { name: "Moments Ch6 : Weathering the Storm in Ersama", file: "./files/english/wtsie.pdf" },
            { name: "Moments Ch7 : The Last Leaf", file: "./files/english/tll.pdf" },
            { name: "Moments Ch8 : A House is Not a Home", file: "./files/english/ahinah.pdf" },
            { name: "Moments Ch9 : The Beggar", file: "./files/english/tb.pdf" }
        ]

    }
};

// darkmode shit

const toggleDarkMode = document.getElementById('toggleDarkMode');
const root = document.documentElement;

// Check for saved dark mode preference
const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
    toggleDarkMode.checked = true;
    applyDarkMode();
}

toggleDarkMode.addEventListener('change', () => {
    if (toggleDarkMode.checked) {
        applyDarkMode();
        localStorage.setItem('darkMode', 'true');
    } else {
        removeDarkMode();
        localStorage.setItem('darkMode', 'false');
    }
});

function applyDarkMode() {
    const darkTheme = {
        '--muted': '#a8a8a8',
        '--itemsbg': '#2d2d2d',
        '--translucentbg': 'rgba(26, 26, 26, 0.590)',
        '--bg': '#000',
        '--text': '#ffffff',
    };
    Object.entries(darkTheme).forEach(([key, value], index) => {
        root.style.setProperty(key, value);
    });
}

function removeDarkMode() {
    root.style.setProperty('--bg', '#e7e5e5ff');
    root.style.setProperty('--text', '#000');
    root.style.setProperty('--muted', '#232323');
    root.style.setProperty('--itemsbg', 'rgb(232, 235, 244)');
    root.style.setProperty('--translucentbg', 'rgba(255, 255, 255, 0.590)');
}

//searching and all

window.onload = () => {
    search.focus();
}

const search = document.querySelector(".inputSearch");

// name and place of every chapter

const allChapters = Object.values(books).flatMap(subject =>
    subject.chapter.map(ch => ({
        name: ch.name,
        file: ch.file
    }))
);

const suggestionContainer = document.querySelector(".suggestionContainer");
const suggestionInnerContainer = document.querySelector(".suggestionInnerContainer");

const addRecent = (chapter) => {

}

const openChapter = (chapter) => {
    addRecent(chapter);
    if (chapter.file) {
        let location = `pdf-viewer.html?file=${(chapter.file)}`;
        window.open(location, "_blank")
    } else {
        alert("Chapter file not found.");
    }
}

// search functions

const all_chapters = () => {
    suggestionInnerContainer.innerHTML = "";
    allChapters.forEach((c) => {
        const div = document.createElement("div");
        div.classList.add("suggestion");
        div.textContent = c.name;
        suggestionInnerContainer.appendChild(div);
        div.addEventListener("click", () => {
            openChapter(c)
        });
    })
}

const help = () => {
    window.open("help.html", "_blank")
}

search.addEventListener("input", () => {
    let query = search.value;
    if (query.length == 0) {
        suggestionContainer.style.bottom = "-360px";
        return;
    } else {
        suggestionContainer.style.bottom = "70px";
        query = query.toLowerCase();
        let words = query.split(" ")
        const filtered = allChapters.filter((c) => {
            const chapterNameLower = c.name.toLowerCase();
            return words.every(word => chapterNameLower.includes(word));
        });

        if (filtered.length == 0) {
            suggestionInnerContainer.innerText = `No matches found among ${allChapters.length} chapter titles :(`;
        } else {
            suggestionInnerContainer.innerHTML = "";
            filtered.forEach((c) => {
                const div = document.createElement("div");
                div.classList.add("suggestion");
                div.textContent = c.name;
                suggestionInnerContainer.appendChild(div);
                div.addEventListener("click", () => {
                    openChapter(c)
                });
            });
        }
    }
    eval(query)
})

//? book

const booksContainer = document.querySelector(".books");
const chapterList = document.querySelector(".chapterLists");
const chapterListContainer= document.querySelector(".chapterListsContainer");

Object.values(books).forEach((ch) => {
    let div = document.createElement("div");
    div.classList.add("book");
    div.setAttribute("subject", ch.name)
    div.innerHTML = `
            <div class="cover">${ch.name[0]}</div>
                <div class="info">
                    <p class="bookName">${ch.name}</p>
                    <p class="bookChapters">${ch.chapter.length} chapters</p>
                </div>
            </div>
    `;

    booksContainer.appendChild(div)

    div.addEventListener("click", () => {
        document.querySelector(".headder > h3").innerHTML = `${ch.name}`
        chapterListContainer.innerHTML = "";
        ch.chapter.forEach((c) => {
            let chap = document.createElement("div");
            chap.classList.add("chapter")
            chap.innerHTML = `
                <p>${c.name}</p>
            `
            chapterListContainer.appendChild(chap);
            chap.addEventListener("click" , () => {
                console.log(c , c.file)
                openChapter(c)
            })
        })
        chapterList.style.top = "50%"
    })
})

document.querySelector(".closeList").addEventListener("click", () => {
    chapterList.style.top = "150%";
})