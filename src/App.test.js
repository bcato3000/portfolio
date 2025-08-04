System.register("components/Header", ["react", "../assets/img/bc-logo.svg", "../assets/img/profile-pic-2.jpg", "react-scroll"], function (exports_1, context_1) {
    "use strict";
    var react_1, bc_logo_svg_1, profile_pic_2_jpg_1, react_scroll_1, Header;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (bc_logo_svg_1_1) {
                bc_logo_svg_1 = bc_logo_svg_1_1;
            },
            function (profile_pic_2_jpg_1_1) {
                profile_pic_2_jpg_1 = profile_pic_2_jpg_1_1;
            },
            function (react_scroll_1_1) {
                react_scroll_1 = react_scroll_1_1;
            }
        ],
        execute: function () {
            Header = function () {
                return (react_1["default"].createElement("header", null,
                    react_1["default"].createElement("span", { className: "bc-logo" },
                        react_1["default"].createElement("img", { src: bc_logo_svg_1["default"], alt: "BC Logo" })),
                    react_1["default"].createElement("div", { className: "hero-wrapper" },
                        react_1["default"].createElement("h1", null, "The Front-end Dev Portfolio"),
                        react_1["default"].createElement("h1", null, "of Benjamin Cato"),
                        react_1["default"].createElement("div", { className: "profile-pic" },
                            react_1["default"].createElement("img", { src: profile_pic_2_jpg_1["default"], alt: "profile pic" })),
                        react_1["default"].createElement("p", { className: "hero-blurb" },
                            "Thanks for checking out my little portfolio.",
                            react_1["default"].createElement("br", null),
                            "Feel free to hit me up anytime.",
                            " ",
                            react_1["default"].createElement("a", { href: "mailto:bcato3000@gmail.com?subject=Hey%20Cato3000!", target: "_self" }, "bcato3000@gmail.com"),
                            " ",
                            "Cheers!"),
                        react_1["default"].createElement("nav", { className: "portfolio-links" },
                            react_1["default"].createElement("ul", null,
                                react_1["default"].createElement("li", null,
                                    react_1["default"].createElement("a", { href: "/Ben-Cato-resume.pdf", download: "Ben-Cato-resume" }, "Download Resume")),
                                react_1["default"].createElement("li", null,
                                    react_1["default"].createElement(react_scroll_1.Link, { to: "work", smooth: true, offset: -70, duration: 500 }, "Work Examples")),
                                react_1["default"].createElement("li", null,
                                    react_1["default"].createElement(react_scroll_1.Link, { to: "skills", smooth: true, offset: -70, duration: 500 }, "Skills / Expertise")),
                                react_1["default"].createElement("li", null,
                                    react_1["default"].createElement(react_scroll_1.Link, { to: "history", smooth: true, offset: -70, duration: 500 }, "Work History")),
                                react_1["default"].createElement("li", null,
                                    react_1["default"].createElement(react_scroll_1.Link, { to: "education", smooth: true, offset: -70, duration: 500 }, "Education")),
                                react_1["default"].createElement("li", null,
                                    react_1["default"].createElement(react_scroll_1.Link, { to: "about", smooth: true, offset: -70, duration: 500 }, "About")),
                                react_1["default"].createElement("li", null,
                                    react_1["default"].createElement(react_scroll_1.Link, { to: "contact", smooth: true, offset: -70, duration: 500 }, "Contact")))))));
            };
            exports_1("default", Header);
        }
    };
});
System.register("data/portfolioData", [], function (exports_2, context_2) {
    "use strict";
    var workExamples;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            exports_2("workExamples", workExamples = [
                {
                    "title": "Sonic Drive-In",
                    "url": "https://www.sonicdrivein.com/",
                    "image": "work_sonic.jpg",
                    "description": "Developed responsive UI for Sonic’s order management platform, improving team workflows and code maintainability",
                    "details": [
                        "React / Next JS",
                        "TypeScript",
                        "Dynamic Content",
                        "RESTful API",
                        "Component-based architecture"
                    ]
                },
                {
                    "title": "Publix",
                    "url": "https://www.publix.com/",
                    "image": "work_publix.jpg",
                    "description": "Built and maintained Vue-based front-end for Publix’s online sandwich ordering tool, enhancing UX and performance",
                    "details": [
                        "Vue JS",
                        "TypeScript",
                        "RESTful API",
                        "State management w/ Vuex",
                        "Accessibility best practices"
                    ]
                },
                {
                    "title": "Resideo / Honeywell Home",
                    "url": "https://www.resideo.com/us/en",
                    "image": "work_resideo.jpg",
                    "description": "Led responsive front-end implementation for a major home tech brand, focusing on maintainable UI architecture",
                    "details": [
                        "Design by VMLY&R",
                        "Project UI Lead (Beginning - Near End)",
                        "HTML",
                        "CSS (w/ Sass)",
                        "JS"
                    ]
                },
                {
                    "title": "Resideo / Honeywell Home",
                    "url": "https://www.resideo.com/us/en",
                    "image": "work_honeywellhome.jpg",
                    "description": "Led responsive front-end implementation for a major home tech brand, focusing on maintainable UI architecture",
                    "details": [
                        "Design by VMLY&R / Honeywell Home",
                        "Project UI Lead (Beginning - Near End)",
                        "HTML",
                        "CSS (w/ Sass)",
                        "JS"
                    ]
                },
                {
                    "title": "Marcus & Millichap IPA",
                    "url": "https://www.institutionalpropertyadvisors.com/",
                    "image": "work_ipa.jpg",
                    "description": "Delivered a polished responsive UI for commercial real estate, built from scratch as sole developer",
                    "details": [
                        "Design by Brooklyn Digital Foundry",
                        "Sole UI Dev (Beginning - End)",
                        "HTML",
                        "CSS (w/ Sass)",
                        "JS"
                    ]
                },
                {
                    "title": "Allegis Group",
                    "url": "https://www.allegisgroup.com/",
                    "image": "work_allegis.jpg",
                    "description": "Engineered highly animated and responsive UI with GSAP/ScrollMagic; full lifecycle ownership",
                    "details": [
                        "Design by Allegis Group",
                        "Sole UI Dev (Beginning - End)",
                        "Heavy Animation",
                        "HTML",
                        "CSS (w/ Sass)",
                        "JS (w/ GSAP & ScrollMagic)"
                    ]
                },
                {
                    "title": "Amdro",
                    "url": "https://www.amdro.com/#0",
                    "image": "work_amdro.jpg",
                    "description": "Built fast-loading, accessible marketing pages with Sass, collaborating directly with design lead",
                    "details": [
                        "Design by Jason Piona",
                        "Sole UI Dev (Beginning - End)",
                        "HTML",
                        "CSS (w/ Sass)"
                    ]
                },
                {
                    "title": "Iron Mountain",
                    "url": "https://www.ironmountain.com/",
                    "image": "work_iron_mountain.jpg",
                    "description": "Developed modular, enterprise-ready components for data storage services; ensured cross-browser support",
                    "details": [
                        "Design by Brainjocks",
                        "Sole UI Dev (Beginning - End)",
                        "HTML",
                        "CSS (w/ Sass)",
                        "JS"
                    ]
                }
            ]);
        }
    };
});
System.register("components/WorkExamples", ["react", "data/portfolioData"], function (exports_3, context_3) {
    "use strict";
    var react_2, portfolioData_1, WorkExamples;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (react_2_1) {
                react_2 = react_2_1;
            },
            function (portfolioData_1_1) {
                portfolioData_1 = portfolioData_1_1;
            }
        ],
        execute: function () {
            WorkExamples = function () {
                return (react_2["default"].createElement("section", { id: "work" },
                    react_2["default"].createElement("h2", null, "Work Examples"),
                    react_2["default"].createElement("ul", { className: "work-list" }, portfolioData_1.workExamples.map(function (item, index) { return (react_2["default"].createElement("li", { key: index },
                        react_2["default"].createElement("div", { className: "background", style: { backgroundImage: "url(./assets/img/" + item.image + ")" } },
                            react_2["default"].createElement("a", { href: item.url, target: "_blank", rel: "noopener noreferrer", className: "foreground" },
                                react_2["default"].createElement("h3", null,
                                    item.title,
                                    ":"),
                                react_2["default"].createElement("ul", null,
                                    react_2["default"].createElement("li", null,
                                        item.description,
                                        react_2["default"].createElement("ul", null, item.details.map(function (detail, idx) { return (react_2["default"].createElement("li", { key: idx }, detail)); })))))))); }))));
            };
            exports_3("default", WorkExamples);
        }
    };
});
System.register("components/Skills", ["react"], function (exports_4, context_4) {
    "use strict";
    var react_3, skillGroups, Skills;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (react_3_1) {
                react_3 = react_3_1;
            }
        ],
        execute: function () {
            skillGroups = [
                [
                    'HTML5',
                    'CSS3',
                    'Sass',
                    'Javascript (ES6)',
                    'Typescript',
                    'Storybook',
                    'Single Page Applications and components (React, Vue)',
                    'RESTful APIs',
                    'Node',
                    'Web Animation',
                    'Responsive Web Development',
                    'Cross-browser',
                    'Accessibility',
                ],
                [
                    'User Interface Design',
                    'User Experience',
                    'Adobe Creative Suite',
                    'Figma',
                    'Git',
                    'Agile Methodology',
                    'UI Team Lead',
                    'UI Class Instructor for Software Training',
                    'Expansive Enterprise Sites',
                    'Client Facing Contributor',
                    'Collaboration w/ Internal and 3rd Party Agencies',
                    'PC Windows',
                    'Mac iOS',
                ]
            ];
            Skills = function () {
                return (react_3["default"].createElement("section", { id: "skills" },
                    react_3["default"].createElement("h2", null, "Skills / Expertise / Experience"),
                    react_3["default"].createElement("div", { className: "skills-expertise" }, skillGroups.map(function (group, index) { return (react_3["default"].createElement("ul", { key: index }, group.map(function (skill, idx) { return (react_3["default"].createElement("li", { key: idx }, skill)); }))); }))));
            };
            exports_4("default", Skills);
        }
    };
});
System.register("data/workHistoryData", [], function (exports_5, context_5) {
    "use strict";
    var workHistory;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [],
        execute: function () {
            exports_5("workHistory", workHistory = [
                {
                    "date": "July '24 - July '25 (relocated from Atlanta, GA to Sacramento, CA June 2025)",
                    "company": "Inspire Brands",
                    "companyUrl": "https://www.capstonelogistics.com/",
                    "location": "Atlanta, GA",
                    "title": "UI Engineer",
                    "description": "Developed white-label React/Next.js applications across multiple brands \u2022 Acted as liaison between UX design and engineering teams \u2022 Contributed to scalable and accessible UI using HTML5, CSS3, Sass, JavaScript, and TypeScript"
                },
                {
                    "date": "January '24 - July '24 (contract role)",
                    "company": "Capstone Logistics",
                    "companyUrl": "https://www.capstonelogistics.com/",
                    "location": "Atlanta, GA",
                    "title": "Lead Front-end Developer",
                    "description": "Led web portal development using Vue 3 (JS/TS) for logistics applications \u2022 Mentored junior developers and coordinated with design teams \u2022 Oversaw front-end architecture and delivery for a large SPA"
                },
                {
                    "date": "May '23 - October '23 (contract role)",
                    "company": "WHEREOWARE",
                    "companyUrl": "https://www.whereoware.com/",
                    "location": "Atlanta, GA",
                    "title": "Senior Front-end / UI / UX Developer",
                    "description": "Created modular React components with Storybook (TypeScript) \u2022 Built and optimized front-ends for CMS platforms like Optimizely and Sitecore \u2022 Led multiple front-end projects and code reviews, with focus on performance and accessibility"
                },
                {
                    "date": "April '13 - July '20 / Dec '21 - May '23",
                    "company": "Perficient",
                    "companyUrl": "http://www.brainjocks.com/",
                    "location": "Alpharetta, GA",
                    "title": "Lead Front-end / UI / UX Developer",
                    "description": "Built SPAs using React for large-scale Sitecore and Optimizely CMS platforms \u2022 Delivered modular components using Storybook + TypeScript \u2022 Mentored junior devs and collaborated closely with client teams like Publix and Sage \u2022 Created and maintained SPAs for enterprise CMS platforms \u2022 Led UI efforts for clients including P&G, Honeywell, and Pergo \u2022 Trained junior devs and led internal front-end initiatives (SCORE UI training)"
                },
                {
                    "date": "August '20 - Dec '21",
                    "company": "FleetCor Technologies",
                    "companyUrl": "https://www.fleetcor.com/",
                    "location": "Atlanta, GA",
                    "title": "Senior Front-end / UI Developer",
                    "description": "Developed front-end for fintech products with a focus on data visualization (D3.js) \u2022 Built global component library for enterprise-wide usage \u2022 Collaborated with designers and QA to deliver pixel-perfect, tested interfaces"
                },
                {
                    "date": "Dec '12 - April '13",
                    "company": "LaDart Creative",
                    "companyUrl": "http://www.ladartcreative.com/",
                    "location": "Atlanta, GA",
                    "title": "Front-end Developer",
                    "description": "Interned as a front-end developer \u2022 Specialized in responsive web design development \u2022 HTML5 and CSS3 with Foundation boilerplate via Wordpress"
                },
                {
                    "date": "Oct '10 - Dec '11",
                    "company": "Screen USA / GrinderCrusherScreen.com",
                    "companyUrl": "http://screenusa.net/",
                    "location": "Smyrna, GA",
                    "title": "Component technician / web administrator",
                    "description": "Converted 2D Autocad drawings into 3D models and assemblies using SolidWorks \u2022 Provided IT support for both companies (one owner) \u2022 Created and maintained GCS website via WYSIWYG"
                },
                {
                    "date": "May 2003 \u2013 February 2010",
                    "company": "Probuild, LLC. | Plymart, Inc. | Structural Wood Systems of Georgia",
                    "companyUrl": "",
                    "location": "Atlanta, GA",
                    "title": "Lead truss designer / component technician",
                    "description": "Acquired by Probuild (via \u2018word of mouth\u2019) to execute new software initiative designs \u2022 Lead designer for nationwide design \u2022 Received WTCA Level I (Wood Truss Council of America) Certification \u2022 Advised customer\u2019s engineers and architects with creative ideas and solutions for designs",
                    "formerCareer": true
                }
            ]);
        }
    };
});
System.register("components/WorkHistory", ["react", "data/workHistoryData"], function (exports_6, context_6) {
    "use strict";
    var react_4, workHistoryData_1, WorkHistory;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (react_4_1) {
                react_4 = react_4_1;
            },
            function (workHistoryData_1_1) {
                workHistoryData_1 = workHistoryData_1_1;
            }
        ],
        execute: function () {
            WorkHistory = function () {
                return (react_4["default"].createElement("section", { id: "history" },
                    react_4["default"].createElement("h2", null, "Work History"),
                    react_4["default"].createElement("div", { className: "work-history" }, workHistoryData_1.workHistory.map(function (job, index) {
                        var isFormer = job.formerCareer;
                        return (react_4["default"].createElement(react_4["default"].Fragment, { key: index },
                            react_4["default"].createElement("div", { className: "date" + (isFormer ? ' former-career' : '') },
                                react_4["default"].createElement("h3", null, job.date)),
                            react_4["default"].createElement("div", { className: "description" + (isFormer ? ' former-career' : '') },
                                react_4["default"].createElement("h3", null, job.companyUrl ? (react_4["default"].createElement("a", { href: job.companyUrl, target: "_blank", rel: "noopener noreferrer" }, job.company)) : (job.company)),
                                react_4["default"].createElement("h4", null,
                                    job.location,
                                    react_4["default"].createElement("br", null),
                                    job.title),
                                react_4["default"].createElement("p", null, job.description))));
                    }))));
            };
            exports_6("default", WorkHistory);
        }
    };
});
System.register("components/Education", ["react"], function (exports_7, context_7) {
    "use strict";
    var react_5, Education;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [
            function (react_5_1) {
                react_5 = react_5_1;
            }
        ],
        execute: function () {
            Education = function () {
                return (react_5["default"].createElement("section", { id: "education" },
                    react_5["default"].createElement("h2", null, "Education"),
                    react_5["default"].createElement("div", { className: "education" },
                        react_5["default"].createElement("div", { className: "date" },
                            react_5["default"].createElement("h3", null,
                                "Graduated",
                                react_5["default"].createElement("br", null),
                                "June '13")),
                        react_5["default"].createElement("div", { className: "description" },
                            react_5["default"].createElement("h3", null,
                                react_5["default"].createElement("a", { href: "http://www.creativecircus.edu/", target: "_blank", rel: "noopener noreferrer" }, "The Creative Circus")),
                            react_5["default"].createElement("h4", null,
                                "Atlanta, GA",
                                react_5["default"].createElement("br", null),
                                "Interactive development")),
                        react_5["default"].createElement("div", { className: "date" },
                            react_5["default"].createElement("h3", null,
                                "Graduated",
                                react_5["default"].createElement("br", null),
                                "Dec '03")),
                        react_5["default"].createElement("div", { className: "description" },
                            react_5["default"].createElement("h3", null,
                                react_5["default"].createElement("a", { href: "http://www.chattahoocheetech.edu/", target: "_blank", rel: "noopener noreferrer" }, "North Metro Technical College")),
                            react_5["default"].createElement("h4", null,
                                "Acworth, GA",
                                react_5["default"].createElement("br", null),
                                "Diploma, Computer Information Systems/Microcomputer",
                                react_5["default"].createElement("br", null),
                                "Specialization GPA 3.97")),
                        react_5["default"].createElement("div", { className: "date" },
                            react_5["default"].createElement("h3", null, "Sep '97 - Sep '00")),
                        react_5["default"].createElement("div", { className: "description" },
                            react_5["default"].createElement("h3", null,
                                react_5["default"].createElement("a", { href: "http://www.kennesaw.edu/", target: "_blank", rel: "noopener noreferrer" }, "Kennesaw State University")),
                            react_5["default"].createElement("h4", null,
                                "Kennesaw, GA",
                                react_5["default"].createElement("br", null),
                                "Computer science")))));
            };
            exports_7("default", Education);
        }
    };
});
System.register("data/logoData", [], function (exports_8, context_8) {
    "use strict";
    var logoData;
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [],
        execute: function () {
            exports_8("logoData", logoData = [
                {
                    "src": "logo-human-rights.svg",
                    "alt": "human rights logo"
                },
                {
                    "src": "logo-pride.svg",
                    "alt": "pride flag!"
                },
                {
                    "src": "logo-ukraine.svg",
                    "alt": "flag of Ukraine"
                },
                {
                    "src": "logo-outkast.svg",
                    "alt": "outkast logo"
                },
                {
                    "src": "logo-apple.svg",
                    "alt": "apple logo"
                },
                {
                    "src": "logo-netflix.svg",
                    "alt": "netflix logo"
                },
                {
                    "src": "logo-react.svg",
                    "alt": "react logo"
                },
                {
                    "src": "logo-next.svg",
                    "alt": "next logo"
                },
                {
                    "src": "logo-mtv.svg",
                    "alt": "yo mtv logo"
                },
                {
                    "src": "logo-css3.svg",
                    "alt": "css logo"
                },
                {
                    "src": "logo-the-80-s.svg",
                    "alt": "the 80s logo"
                },
                {
                    "src": "logo-sketch.svg",
                    "alt": "sketch app logo"
                },
                {
                    "src": "logo-bttf.svg",
                    "alt": "back to the future logo"
                },
                {
                    "src": "logo-html-5.svg",
                    "alt": "html5 logo"
                },
                {
                    "src": "logo-vans.svg",
                    "alt": "vans logo"
                },
                {
                    "src": "logo-web-components.svg",
                    "alt": "webcomponents logo"
                },
                {
                    "src": "logo-trans-support.svg",
                    "alt": "trans support logo"
                },
                {
                    "src": "logo-pa.svg",
                    "alt": "parental advisory logo"
                },
                {
                    "src": "logo-united-states-flag.svg",
                    "alt": "us flag logo"
                },
                {
                    "src": "logo-google.svg",
                    "alt": "google logo"
                },
                {
                    "src": "logo-love.svg",
                    "alt": "love logo"
                },
                {
                    "src": "logo-ghostbusters.svg",
                    "alt": "ghostbusters logo"
                },
                {
                    "src": "logo-javascript-1.svg",
                    "alt": "javascript logo"
                },
                {
                    "src": "logo-slack.svg",
                    "alt": "slack logo"
                },
                {
                    "src": "logo-sass.svg",
                    "alt": "sass logo"
                },
                {
                    "src": "logo-codrops.svg",
                    "alt": "codrops logo"
                },
                {
                    "src": "logo-dutch.svg",
                    "alt": "dutch bros logo"
                },
                {
                    "src": "logo-nintendo.svg",
                    "alt": "nintendo logo"
                },
                {
                    "src": "logo-git.svg",
                    "alt": "git logo"
                },
                {
                    "src": "logo-webstorm.svg",
                    "alt": "webstorm logo"
                },
                {
                    "src": "logo-reddit.svg",
                    "alt": "reddit logo"
                }
            ]);
        }
    };
});
System.register("components/About", ["react", "flickity", "flickity/css/flickity.css", "data/logoData"], function (exports_9, context_9) {
    "use strict";
    var react_6, flickity_1, logoData_1, About;
    var __moduleName = context_9 && context_9.id;
    return {
        setters: [
            function (react_6_1) {
                react_6 = react_6_1;
            },
            function (flickity_1_1) {
                flickity_1 = flickity_1_1;
            },
            function (_1) {
            },
            function (logoData_1_1) {
                logoData_1 = logoData_1_1;
            }
        ],
        execute: function () {
            About = function () {
                var carouselRef = react_6.useRef(null);
                react_6.useEffect(function () {
                    if (carouselRef.current) {
                        new flickity_1["default"](carouselRef.current, {
                            freeScroll: true,
                            autoPlay: true,
                            prevNextButtons: false,
                            pageDots: false,
                            wrapAround: true
                        });
                    }
                }, []);
                return (react_6["default"].createElement("section", { id: "about" },
                    react_6["default"].createElement("h2", null, "About"),
                    react_6["default"].createElement("div", { className: "about-me" },
                        react_6["default"].createElement("p", null,
                            "I ",
                            react_6["default"].createElement("span", { className: "highlight-blueC" }, "Love"),
                            " front-end/UI development, interactive design, latest technologies, ",
                            react_6["default"].createElement("span", { className: "highlight-orangeC" }, "burritos"),
                            ", the 80's (movies & music), anything vintage / retro, American History, 90's hip-hop / rap, classic rock, oldies, 20's jazz, modern blue grass, and ",
                            react_6["default"].createElement("strong", null, "my family"),
                            ". I ",
                            react_6["default"].createElement("span", { className: "highlight-purpleC" }, "Like"),
                            " to be courteous, punctual, to laugh, to look out windows, people watching, binge watching a series.\u00A0",
                            react_6["default"].createElement("span", { className: "highlight-greenC" }, "Everything else "),
                            "is fine."),
                        react_6["default"].createElement("div", { className: "carousel", ref: carouselRef }, logoData_1.logoData.map(function (logo, index) { return (react_6["default"].createElement("img", { key: index, className: "carousel-cell", src: "/assets/img/" + logo.src, alt: logo.alt })); })))));
            };
            exports_9("default", About);
        }
    };
});
System.register("components/Contact", ["react"], function (exports_10, context_10) {
    "use strict";
    var react_7, Contact;
    var __moduleName = context_10 && context_10.id;
    return {
        setters: [
            function (react_7_1) {
                react_7 = react_7_1;
            }
        ],
        execute: function () {
            Contact = function () {
                return (react_7["default"].createElement("section", { id: "contact" },
                    react_7["default"].createElement("h2", null, "Contact"),
                    react_7["default"].createElement("ul", { className: "contact-me" },
                        react_7["default"].createElement("li", null,
                            react_7["default"].createElement("a", { href: "mailto:bcato3000@gmail.com?subject=Hey%20Cato3000!", target: "_self" }, "bcato3000@gmail.com")),
                        react_7["default"].createElement("li", null,
                            react_7["default"].createElement("a", { href: "https://www.linkedin.com/in/cato3000/", target: "_blank", rel: "noopener noreferrer" },
                                react_7["default"].createElement("img", { src: "/assets/img/linkedin.svg", alt: "linkedin" })))),
                    react_7["default"].createElement("img", { src: "/assets/img/1918.png", alt: "amazed 1918 people", className: "looking-up" })));
            };
            exports_10("default", Contact);
        }
    };
});
System.register("components/Footer", ["react", "../assets/img/bc-logo.svg"], function (exports_11, context_11) {
    "use strict";
    var react_8, bc_logo_svg_2, Footer;
    var __moduleName = context_11 && context_11.id;
    return {
        setters: [
            function (react_8_1) {
                react_8 = react_8_1;
            },
            function (bc_logo_svg_2_1) {
                bc_logo_svg_2 = bc_logo_svg_2_1;
            }
        ],
        execute: function () {
            Footer = function () {
                return (react_8["default"].createElement("footer", null,
                    react_8["default"].createElement("p", null, "2025"),
                    react_8["default"].createElement("span", { className: "bc-logo" },
                        react_8["default"].createElement("img", { src: bc_logo_svg_2["default"], alt: "BC logo" }))));
            };
            exports_11("default", Footer);
        }
    };
});
System.register("App", ["react", "./styles/styles.css", "components/Header", "components/WorkExamples", "components/Skills", "components/WorkHistory", "components/Education", "components/About", "components/Contact", "components/Footer"], function (exports_12, context_12) {
    "use strict";
    var react_9, Header_1, WorkExamples_1, Skills_1, WorkHistory_1, Education_1, About_1, Contact_1, Footer_1;
    var __moduleName = context_12 && context_12.id;
    function App() {
        return (react_9["default"].createElement(react_9["default"].Fragment, null,
            react_9["default"].createElement("main", { className: "App" },
                react_9["default"].createElement(Header_1["default"], null),
                react_9["default"].createElement(WorkExamples_1["default"], null),
                react_9["default"].createElement(Skills_1["default"], null),
                react_9["default"].createElement(WorkHistory_1["default"], null),
                react_9["default"].createElement(Education_1["default"], null),
                react_9["default"].createElement(About_1["default"], null),
                react_9["default"].createElement(Contact_1["default"], null),
                react_9["default"].createElement(Footer_1["default"], null))));
    }
    return {
        setters: [
            function (react_9_1) {
                react_9 = react_9_1;
            },
            function (_2) {
            },
            function (Header_1_1) {
                Header_1 = Header_1_1;
            },
            function (WorkExamples_1_1) {
                WorkExamples_1 = WorkExamples_1_1;
            },
            function (Skills_1_1) {
                Skills_1 = Skills_1_1;
            },
            function (WorkHistory_1_1) {
                WorkHistory_1 = WorkHistory_1_1;
            },
            function (Education_1_1) {
                Education_1 = Education_1_1;
            },
            function (About_1_1) {
                About_1 = About_1_1;
            },
            function (Contact_1_1) {
                Contact_1 = Contact_1_1;
            },
            function (Footer_1_1) {
                Footer_1 = Footer_1_1;
            }
        ],
        execute: function () {
            exports_12("default", App);
        }
    };
});
System.register("App.test", ["react", "@testing-library/react", "App"], function (exports_13, context_13) {
    "use strict";
    var react_10, react_11, App_1;
    var __moduleName = context_13 && context_13.id;
    return {
        setters: [
            function (react_10_1) {
                react_10 = react_10_1;
            },
            function (react_11_1) {
                react_11 = react_11_1;
            },
            function (App_1_1) {
                App_1 = App_1_1;
            }
        ],
        execute: function () {
            test('renders learn react link', function () {
                react_11.render(react_10["default"].createElement(App_1["default"], null));
                var linkElement = react_11.screen.getByText(/learn react/i);
                expect(linkElement).toBeInTheDocument();
            });
        }
    };
});
