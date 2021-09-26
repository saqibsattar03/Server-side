module.exports = Questions = [
    {
        name: "Cleaner",
        imageUrl:'/images/categoryImages/Cleaner.png',
        categories: [

            {
                _id: 0,
                name: "House cleaning",
                questions: [
                    {
                        _id: 0,
                        question: "What type of property needs to be cleaned?",
                        questionType: "radio",
                        pushedQuestion: 'Type of property',
                        choices: [
                            {
                                _id: 0,
                                option: "Apartment",
                            },
                            {
                                _id: 1,
                                option: "House",
                            },
                            {
                                _id: 2,
                                option: "Townhouse",
                            },
                            {
                                _id: 3,
                                option: "Mulching",
                            },
                            {
                                _id: 4,
                                option: "Other (Please specify)",
                            },
                        ],
                    },
                    {
                        _id: 1,
                        question:
                            "How many of these rooms do you need cleaned?(Number of bathrooms)",
                        questionType: "range",
                        pushedQuestion: 'Number of bathrooms',
                    },
                    {
                        _id: 2,
                        question:
                            "How many of these rooms do you need cleaned?(Number of bedrooms)",
                        questionType: "range",
                        pushedQuestion: 'Number of bedrooms',
                    },
                    {
                        _id: 3,
                        question: "What type of clean do you need?",
                        questionType: "radio",
                        choices: [
                            {
                                _id: 0,
                                option: "General clean",
                            },
                            {
                                _id: 1,
                                option: "Deep clean",
                            },
                            {
                                _id: 2,
                                option: "Townhouse",
                            },
                            {
                                _id: 3,
                                option: "End of lease clean",
                            },
                        ],
                    },
                    {
                        _id: 4,
                        question: "Which other things would you like cleaned?",
                        questionType: "radio",
                        pushedQuestion: 'Other things cleaning',
                        choices: [
                            {
                                _id: 0,
                                option: "Fridge",
                            },
                            {
                                _id: 1,
                                option: "Inside windows",
                            },
                            {
                                _id: 2,
                                option: "Cabinets",
                            },
                            {
                                _id: 3,
                                option: "Kitchen",
                            },
                            {
                                _id: 4,
                                option: "None",
                            },
                        ],
                    },
                    {
                        _id: 5,
                        question:
                            "Will you provide a vacuum and mop for the cleaner to use?",
                        questionType: "radio",
                        pushedQuestion: 'Vacuum and mop provided',
                        choices: [
                            {
                                _id: 0,
                                option: "Yes",
                            },
                            {
                                _id: 1,
                                option: "No",
                            },
                        ],
                    },
                    {
                        _id: 6,
                        question: "How often do you need this service?",
                        questionType: "radio",
                        pushedQuestion: 'Duration of service',
                        choices: [
                            {
                                _id: 0,
                                option: "Weekly",
                            },
                            {
                                _id: 1,
                                option: "Monthly",
                            },
                            {
                                _id: 2,
                                option: "Fortnightly",
                            },
                            {
                                _id: 3,
                                option: "Once off",
                            },
                            {
                                _id: 4,
                                option: "Have not decided",
                            },
                        ],
                    },
                    {
                        _id: 7,
                        question: "When do you need this done?",
                        questionType: "radio",
                        pushedQuestion: 'When',
                        choices: [
                            {
                                _id: 0,
                                option: "As soon as possible",
                            },
                            {
                                _id: 1,
                                option: "Any time that works",
                            },
                            {
                                _id: 2,
                                option: "Specific date",
                            },
                        ],
                    },
                    {
                        _id: 7,
                        question: "Any further details?",
                        questionType: "textarea",
                        pushedQuestion: 'Description',
                        isSkipAble: true,
                    },
                    {
                        _id: 8,
                        question: "What is Your contact Email?",
                        questionType: "input",
                        pushedQuestion: 'Email',
                    },
                    {
                        _id: 9,
                        question: "What is your name?",
                        questionType: "input",
                        pushedQuestion: 'Name',
                    },
                    {
                        _id: 10,
                        question: "What is your mobile number?",
                        questionType: "input",
                        pushedQuestion: 'Mobile Number',
                    },
                ],
            },
            {
                _id: 1,
                name: "Commercial cleaning",
                questions: [
                    {
                        _id: 0,
                        question: "What type of property needs to be cleaned?",
                        questionType: "radio",
                        pushedQuestion: 'Type of property',
                        choices: [
                            {
                                _id: 0,
                                option: "Retail",
                            },
                            {
                                _id: 1,
                                option: "Cafe or restaurant",
                            },
                            {
                                _id: 2,
                                option: "Office",
                            },
                            {
                                _id: 3,
                                option: "Other (Please specify)",
                            },
                        ],
                    },
                    {
                        _id: 1,
                        question: "How big is the area that needs to be cleaned?",
                        questionType: "radio",
                        pushedQuestion: 'Size of area',
                        choices: [
                            {
                                _id: 0,
                                option: "Less than 50 sqm",
                            },
                            {
                                _id: 1,
                                option: "50 to 100 sqm",
                            },
                            {
                                _id: 2,
                                option: "100 to 150 sqm",
                            },
                            {
                                _id: 3,
                                option: "more than 150 sqm",
                            },
                            {
                                _id: 4,
                                option: "I am not sure",
                            },
                        ],
                    },
                    {
                        _id: 2,
                        question:
                            "If serviced well, would you be interested in booking this service regularly?",
                        questionType: "radio",
                        pushedQuestion: 'Interested in booking regularly',
                        choices: [
                            {
                                _id: 0,
                                option: "Yes",
                            },
                            {
                                _id: 1,
                                option: "No",
                            },
                            {
                                _id: 2,
                                option: "Office",
                            },
                            {
                                _id: 3,
                                option: "I am not sure",
                            },
                        ],
                    },
                    {
                        _id: 3,
                        question: "How often do you need this service?",
                        questionType: "radio",
                        pushedQuestion: 'Duration of service',
                        choices: [
                            {
                                _id: 0,
                                option: "Weekly",
                            },
                            {
                                _id: 1,
                                option: "Monthly",
                            },
                            {

                                _id: 2,
                                option: "Quarterly",

                            },
                            {
                                _id: 3,
                                option: "Other (Please specify)",
                            },
                        ],
                    },
                    {
                        _id: 4,
                        question: "When do you need this done?",
                        questionType: "radio",
                        pushedQuestion: 'When',
                        choices: [
                            {
                                _id: 0,
                                option: "As soon as possible",
                            },
                            {
                                _id: 1,
                                option: "Any time that works",
                            },
                            {
                                _id: 2,
                                option: "Specific date",
                            },
                        ],
                    },
                    {
                        _id: 5,
                        question: "Any further details?",
                        questionType: "textarea",
                        pushedQuestion: 'Description',
                        isSkipAble: true,
                    },
                    {
                        _id: 6,
                        question: "What is Your contact Email?",
                        questionType: "input",
                        pushedQuestion: 'Email',
                    },
                    {
                        _id: 7,
                        question: "What is your name?",
                        questionType: "input",
                        pushedQuestion: 'Name',
                    },
                    {
                        _id: 8,
                        question: "What is your mobile number?",
                        questionType: "input",
                        pushedQuestion: 'Mobile Number',
                    },
                ],
            },
            {
                _id: 2,
                name: "Carpet cleaning",
                questions: [
                    {
                        _id: 0,
                        question: "What type of job is this?",
                        questionType: "radio",
                        pushedQuestion: 'Type of job',
                        choices: [
                            {
                                _id: 0,
                                option: "Residential",
                            },
                            {
                                _id: 1,
                                option: "Commercial",
                            },
                        ],
                    },
                    {
                        _id: 1,
                        question: "Which type of cleaning service do you need?",
                        questionType: "radio",
                        pushedQuestion: 'Type of cleaning service',
                        choices: [
                            {
                                _id: 0,
                                option: "Dry cleaning (maintenance clean, quick drying time)",
                            },
                            {
                                _id: 1,
                                option: "Steam cleaning (deep clean, more drying time)",
                            },
                            {
                                _id: 2,
                                option: "I am not sure",
                            },
                        ],
                    },
                    {
                        _id: 2,
                        question:
                            "How many rooms require carpet cleaning?(Number of furnished rooms)",
                        questionType: "range",
                        pushedQuestion: 'Number of furnished rooms',
                    },
                    {
                        _id: 3,
                        question:
                            "How many rooms require carpet cleaning?(Number of unfurnished rooms)",
                        questionType: "range",
                        pushedQuestion: 'Number of unfurnished rooms',
                    },
                    {
                        _id: 4,
                        question: "How big is the area that needs cleaning?",
                        questionType: "radio",
                        pushedQuestion: 'Size of area',
                        choices: [
                            {
                                _id: 0,
                                option: "Less than 15 sqm",
                            },
                            {
                                _id: 1,
                                option: "15 to 50 sqm",
                            },
                            {
                                _id: 2,
                                option: "51 to 80 sqm",
                            },
                            {
                                _id: 3,
                                option: "More than 80 sqm",
                            },
                            {
                                _id: 4,
                                option: "I am not sure",
                            },
                        ],
                    },
                    {
                        _id: 5,
                        question: "What is your budget like for this service?",
                        questionType: "radio",
                        pushedQuestion: 'Budget',
                        choices: [
                            {
                                _id: 0,
                                option: "I am on a tight budget",
                            },
                            {
                                _id: 1,
                                option: "I am happy to pay for premium service",
                            },
                            {
                                _id: 2,
                                option: "I am not sure",
                            },
                        ],
                    },
                    {
                        _id: 6,
                        question: "When do you need this done?",
                        questionType: "radio",
                        pushedQuestion: 'When',
                        choices: [
                            {
                                _id: 0,
                                option: "As soon as possible",
                            },
                            {
                                _id: 1,
                                option: "Any time that works",
                            },
                            {
                                _id: 2,
                                option: "Specific date",
                            },
                        ],
                    },
                    {
                        _id: 7,
                        question: "Any further details?",
                        questionType: "textarea",
                        pushedQuestion: 'Description',
                        isSkipAble: true,
                    },
                    {
                        _id: 8,
                        question: "What is Your contact Email?",
                        questionType: "input",
                        pushedQuestion: 'Email',
                    },
                    {
                        _id: 9,
                        question: "What is your name?",
                        questionType: "input",
                        pushedQuestion: 'Name',
                    },
                    {
                        _id: 10,
                        question: "What is your mobile number?",
                        questionType: "input",
                        pushedQuestion: 'Mobile Number',
                    },
                ],
            },
            {
                _id: 3,
                name: "Deck and patio cleaning",
                questions: [
                    {
                        _id: 0,
                        question: "What type of job is this?",
                        questionType: "radio",
                        pushedQuestion: 'Type of job',
                        choices: [
                            {
                                _id: 0,
                                option: "Residential",
                            },
                            {
                                _id: 1,
                                option: "Commercial",
                            },
                        ],
                    },
                    {
                        _id: 1,
                        question: "What is the condition of the area?",
                        questionType: "radio",
                        pushedQuestion: 'Area condition',
                        choices: [
                            {
                                _id: 0,
                                option: "Grimey",
                            },
                            {
                                _id: 1,
                                option: "Stained",
                            },
                            {
                                _id: 2,
                                option: "Mouldy or mossy",
                            },
                            {
                                _id: 3,
                                option: "Weathered",
                            },
                            {
                                _id: 4,
                                option: "Other (Please specify)",
                            },
                        ],
                    },
                    {
                        _id: 2,
                        question: "What is the size of the area?",
                        questionType: "radio",
                        pushedQuestion: 'Size of area',
                        choices: [
                            {
                                _id: 0,
                                option: "Less than 50 sqm",
                            },
                            {
                                _id: 1,
                                option: "50 to 100 sqm",
                            },
                            {
                                _id: 2,
                                option: "100 to 150 sqm",
                            },
                            {
                                _id: 3,
                                option: "150 to 200 sqm",
                            },
                            {
                                _id: 4,
                                option: "more than 200 sqm",
                            },
                            {
                                _id: 5,
                                option: "I am not sure",
                            },
                        ],
                    },
                    {
                        _id: 3,
                        question: "What is your budget like for this service?",
                        questionType: "radio",
                        pushedQuestion: 'Budget',
                        choices: [
                            {
                                _id: 0,
                                option: "I am on a tight budget",
                            },
                            {
                                _id: 1,
                                option: "I am happy to pay for premium service",
                            },
                            {
                                _id: 2,
                                option: "I am not sure",
                            },
                        ],
                    },
                    {
                        _id: 4,
                        question: "When do you need this done?",
                        questionType: "radio",
                        pushedQuestion: 'When',
                        choices: [
                            {
                                _id: 0,
                                option: "As soon as possible",
                            },
                            {
                                _id: 1,
                                option: "Any time that works",
                            },
                            {
                                _id: 2,
                                option: "Specific date",
                            },
                        ],
                    },
                    {
                        _id: 5,
                        question: "Any further details?",
                        questionType: "textarea",
                        pushedQuestion: 'Description',
                        isSkipAble: true,
                    },
                    {
                        _id: 6,
                        question: "What is Your contact Email?",
                        questionType: "input",
                        pushedQuestion: 'Email',
                    },
                    {
                        _id: 7,
                        question: "What is your name?",
                        questionType: "input",
                        pushedQuestion: 'Name',
                    },
                    {
                        _id: 8,
                        question: "What is your mobile number?",
                        questionType: "input",
                        pushedQuestion: 'Mobile Number',
                    },
                ],
            },
            {
                _id: 4,
                name: "Bond cleaning",
                questions: [
                    {
                        _id: 0,
                        question: "What type of job is this?",
                        questionType: "radio",
                        pushedQuestion: 'Type of job',
                        choices: [
                            {
                                _id: 0,
                                option: "Residential",
                            },
                            {
                                _id: 1,
                                option: "Commercial",
                            },
                        ],
                    },
                    {
                        _id: 1,
                        question: "What type of property needs to be cleaned?",
                        questionType: "radio",
                        pushedQuestion: 'Type of property',
                        choices: [
                            {
                                _id: 0,
                                option: "Apartment",
                            },
                            {
                                _id: 1,
                                option: "House",
                            },
                            {
                                _id: 2,
                                option: "Townhouse",
                            },
                            {
                                _id: 3,
                                option: "Other (Please specify)",
                            },
                        ],
                    },
                    {
                        _id: 2,
                        question:
                            "How many of these rooms do you need cleaned?(Number of bathrooms rooms)",
                        questionType: "range",
                        pushedQuestion: 'Number of bathrooms',
                    },
                    {
                        _id: 3,
                        question:
                            "How many of these rooms do you need cleaned?(Number of bedrooms rooms)",
                        questionType: "range",
                        pushedQuestion: 'Number of bedrooms',
                    },
                    {
                        _id: 4,
                        question: "What type of clean do you need?",
                        questionType: "radio",
                        pushedQuestion: 'Type of cleaning',
                        choices: [
                            {
                                _id: 0,
                                option: "General clean",
                            },
                            {
                                _id: 1,
                                option: "Deep clean",
                            },
                            {
                                _id: 2,
                                option: "End of lease clean",
                            },
                        ],
                    },
                    {
                        _id: 5,
                        question: "Which other things would you like cleaned?",
                        questionType: "radio",
                        pushedQuestion: 'Things needed to be cleaned',
                        choices: [
                            {
                                _id: 0,
                                option: "Fridge",
                            },
                            {
                                _id: 0,
                                option: "Inside windows",
                            },
                            {
                                _id: 0,
                                option: "Cabinets",
                            },
                            {
                                _id: 0,
                                option: "None",
                            },
                        ],
                    },
                    {
                        _id: 6,
                        question:
                            "Will you provide a vacuum and mop for the cleaner to use?",
                        questionType: "radio",
                        pushedQuestion: 'Vacuum is provided by client',
                        choices: [
                            {
                                _id: 0,
                                option: "Yes",
                            },
                            {
                                _id: 1,
                                option: "No",
                            },
                        ],
                    },
                    {
                        _id: 7,
                        question: "How often do you need this service?",
                        questionType: "radio",
                        pushedQuestion: 'Duration of service',
                        choices: [
                            {
                                _id: 0,
                                option: "Weekly",
                            },
                            {
                                _id: 1,
                                option: "Monthly",
                            },
                            {
                                _id: 2,
                                option: "Fortnightly",
                            },
                            {
                                _id: 3,
                                option: "Once off",
                            },
                            {
                                _id: 4,
                                option: "Have not decided",
                            },
                        ],
                    },
                    {
                        _id: 8,
                        question: "When do you need this done?",
                        questionType: "radio",
                        pushedQuestion: 'When',
                        choices: [
                            {
                                _id: 0,
                                option: "As soon as possible",
                            },
                            {
                                _id: 1,
                                option: "Any time that works",
                            },
                            {
                                _id: 2,
                                option: "Specific date",
                            },
                        ],
                    },
                    {
                        _id: 9,
                        question: "Any further details?",
                        questionType: "textarea",
                        pushedQuestion: 'Description',
                        isSkipAble: true,
                    },
                    {
                        _id: 10,
                        question: "What is Your contact Email?",
                        questionType: "input",
                        pushedQuestion: 'Email',
                    },
                    {
                        _id: 11,
                        question: "What is your name?",
                        questionType: "input",
                        pushedQuestion: 'Name',
                    },
                    {
                        _id: 12,
                        question: "What is your mobile number?",
                        questionType: "input",
                        pushedQuestion: 'Mobile Number',
                    },
                ],
            },
            {
                _id: 5,
                name: "Driveway and pavement cleaning",
                questions: [
                    {
                        _id: 0,
                        question: "What type of job is this?",
                        questionType: "radio",
                        pushedQuestion: 'Type of job',
                        choices: [
                            {
                                _id: 0,
                                option: "Residential",
                            },
                            {
                                _id: 1,
                                option: "Commercial",
                            },
                        ],
                    },
                    {
                        _id: 1,
                        question: "What is the condition of the area?",
                        questionType: "radio",
                        pushedQuestion: 'Area condition',
                        choices: [
                            {
                                _id: 0,
                                option: "Grimey",
                            },
                            {
                                _id: 1,
                                option: "Stained",
                            },
                            {
                                _id: 2,
                                option: "Mouldy or mossy",
                            },
                            {
                                _id: 3,
                                option: "Weathered",
                            },
                            {
                                _id: 4,
                                option: "Other (please specify)",
                            },
                        ],
                    },
                    {
                        _id: 2,
                        question: "What is the size of the area?",
                        questionType: "radio",
                        pushedQuestion: 'Size of area',
                        choices: [
                            {
                                _id: 0,
                                option: "Less than 50 sqm",
                            },
                            {
                                _id: 1,
                                option: "50 to 100 sqm",
                            },
                            {
                                _id: 2,
                                option: "100 to 150 sqm",
                            },
                            {
                                _id: 3,
                                option: "150 to 200 sqm",
                            },
                            {
                                _id: 4,
                                option: "more than 200 sqm",
                            },
                            {
                                _id: 5,
                                option: "I am not sure",
                            },
                        ],
                    },
                    {
                        _id: 3,
                        question: "What is your budget like for this service?",
                        questionType: "radio",
                        pushedQuestion: 'Budget',
                        choices: [
                            {
                                _id: 0,
                                option: "I am on a tight budget",
                            },
                            {
                                _id: 1,
                                option: "I am happy to pay for premium service",
                            },
                        ],
                    },
                    {
                        _id: 4,
                        question: "When do you need this done?",
                        questionType: "radio",
                        pushedQuestion: 'When',
                        choices: [
                            {
                                _id: 0,
                                option: "As soon as possible",
                            },
                            {
                                _id: 1,
                                option: "Any time that works",
                            },
                            {
                                _id: 2,
                                option: "Specific date",
                            },
                        ],
                    },
                    {
                        _id: 5,
                        question: "Any further details?",
                        questionType: "textarea",
                        pushedQuestion: 'Description',
                        isSkipAble: true,
                    },
                    {
                        _id: 6,
                        question: "What is Your contact Email?",
                        questionType: "input",
                        pushedQuestion: 'Email',
                    },
                    {
                        _id: 7,
                        question: "What is your name?",
                        questionType: "input",
                        pushedQuestion: 'Name',
                    },
                    {
                        _id: 8,
                        question: "What is your mobile number?",
                        questionType: "input",
                        pushedQuestion: 'Mobile Number',
                    },
                ],
            },
            {
                _id: 6,
                name: "Gutter cleaning",
                questions: [
                    {
                        _id: 0,
                        question: "What type of job is this?",
                        questionType: "radio",
                        pushedQuestion: 'Type of job',
                        choices: [
                            {
                                _id: 0,
                                option: "Residential",
                            },
                            {
                                _id: 1,
                                option: "Commercial",
                            },
                        ],
                    },
                    {
                        _id: 1,
                        question: "What do you need done to your gutters?",
                        questionType: "radio",
                        pushedQuestion: 'Gutter requirement',
                        choices: [
                            {
                                _id: 0,
                                option: "Gutters require a clean",
                            },
                            {
                                _id: 1,
                                option: "Gutters need to be unblocked",
                            },
                            {
                                _id: 2,
                                option: "Gutters need to be repaired",
                            },
                            {
                                _id: 3,
                                option: "Other (Please specify)",
                            },
                        ],
                    },
                    {
                        _id: 2,
                        question:
                            "How many storeys off the ground are these gutters?(Number of stories)",
                        questionType: "range",
                        pushedQuestion: 'Number of storeys',
                    },
                    {
                        _id: 3,
                        question:
                            "If serviced well, would you be interested in booking this service regularly?",
                        questionType: "radio",
                        pushedQuestion: 'Interested in booking regularly',
                        choices: [
                            {
                                _id: 0,
                                option: "Yes",
                            },
                            {
                                _id: 1,
                                option: "No",
                            },
                            {
                                _id: 2,
                                option: "I am not sure",
                            },
                        ],
                    },
                    {
                        _id: 4,
                        question: "How often do you need this service?",
                        questionType: "radio",
                        pushedQuestion: 'Service duration',
                        choices: [
                            {
                                _id: 0,
                                option: "Weekly",
                            },
                            {
                                _id: 1,
                                option: "Monthly",
                            },
                            {
                                _id: 2,
                                option: "Quarterly",
                            },
                            {
                                _id: 3,
                                option: "Once off",
                            },
                            {
                                _id: 4,
                                option: "Other (Please specify)",
                            },
                        ],
                    },
                    {
                        _id: 5,
                        question: "When do you need this done?",
                        questionType: "radio",
                        pushedQuestion: 'When it is done',
                        choices: [
                            {
                                _id: 0,
                                option: "As soon as possible",
                            },
                            {
                                _id: 1,
                                option: "Any time that works",
                            },
                            {
                                _id: 2,
                                option: "Specific date",
                            },
                        ],
                    },
                    {
                        _id: 5,
                        question: "Any further details?",
                        questionType: "textarea",
                        pushedQuestion: 'Description',
                        isSkipAble: true,
                    },
                    {
                        _id: 6,
                        question: "What is Your contact Email?",
                        questionType: "input",
                        pushedQuestion: 'Email',
                    },
                    {
                        _id: 7,
                        question: "What is your name?",
                        questionType: "input",
                        pushedQuestion: 'Name',
                    },
                    {
                        _id: 8,
                        question: "What is your mobile number?",
                        questionType: "input",
                        pushedQuestion: 'Mobile Number',
                    },
                ],
            },
            {
                _id: 7,
                name: "High pressure cleaning",
                questions: [
                    {
                        _id: 0,
                        question: "What type of job is this?",
                        questionType: "radio",
                        pushedQuestion: 'Type of job',
                        choices: [
                            {
                                _id: 0,
                                option: "Residential",
                            },
                            {
                                _id: 1,
                                option: "Commercial",
                            },
                        ],
                    },
                    {
                        _id: 1,
                        question: "What kind of high pressure clean service do you need?",
                        questionType: "radio",
                        pushedQuestion: 'Kind of high pressure clean service',
                        choices: [
                            {
                                _id: 0,
                                option: "House or building washing",
                            },
                            {
                                _id: 1,
                                option: "Concrete cleaning",
                            },
                            {
                                _id: 2,
                                option: "Deck and patio cleaning",
                            },
                            {
                                _id: 3,
                                option: "Driveway and pavement cleaning",
                            },
                            {
                                _id: 4,
                                option: "Pool cleaning",
                            },
                            {
                                _id: 5,
                                option: "Roof cleaning",
                            },
                            {
                                _id: 6,
                                option: "Sandstone cleaning",
                            },
                            {
                                _id: 7,
                                option: "Tile and grout cleaning",
                            },
                            {
                                _id: 8,
                                option: "Other (please specify)",
                            },
                        ],
                    },
                    {
                        _id: 2,
                        question: "What is the surface condition of the house exterior?",
                        questionType: "radio",
                        pushedQuestion: 'Surface condition',
                        choices: [
                            {
                                _id: 0,
                                option: "Graffiti",
                            },
                            {
                                _id: 1,
                                option: "Green or black",
                            },
                            {
                                _id: 2,
                                option: "Mossy",
                            },
                            {
                                _id: 3,
                                option: "Mouldy",
                            },
                            {
                                _id: 4,
                                option: "Stained",
                            },
                            {
                                _id: 5,
                                option: "Weathered",
                            },
                            {
                                _id: 6,
                                option: "Other (Please specify)",
                            },
                        ],
                    },
                    {
                        _id: 3,
                        question: "Do you need additional areas cleaned as well?",
                        questionType: "radio",
                        pushedQuestion: 'Additional areas cleaning',
                        choices: [
                            {
                                _id: 0,
                                option: "Yes",
                            },
                            {
                                _id: 1,
                                option: "No",
                            },
                        ],
                    },
                    {
                        _id: 4,
                        question: "Additional areas such as?",
                        questionType: "radio",
                        pushedQuestion: 'Additional areas',
                        choices: [
                            {
                                _id: 0,
                                option: "Courtyard",
                            },
                            {
                                _id: 1,
                                option: "Deck",
                            },
                            {
                                _id: 2,
                                option: "Driveway or carpark area",
                            },
                            {
                                _id: 3,
                                option: "Garage exterior and/or floor",
                            },
                            {
                                _id: 4,
                                option: "Pathway and pavements",
                            },
                            {
                                _id: 5,
                                option: "Patio",
                            },
                            {
                                _id: 6,
                                option: "Roof",
                            },
                        ],
                    },
                    {
                        _id: 5,
                        question: "What is your budget like for this service?",
                        questionType: "radio",
                        pushedQuestion: 'Budget',
                        choices: [
                            {
                                _id: 0,
                                option: "I am on a tight budget",
                            },
                            {
                                _id: 1,
                                option: "I am happy to pay for premium service",
                            },
                            {
                                _id: 2,
                                option: "I am not sure",
                            },
                        ],
                    },
                    {
                        _id: 6,
                        question: "When do you need this done?",
                        questionType: "radio",
                        questionTitle: "Radio",
                        pushedQuestion: 'When it is done',
                        choices: [
                            {
                                _id: 0,
                                option: "As soon as possible",
                            },
                            {
                                _id: 1,
                                option: "Any time that works",
                            },
                            {
                                _id: 2,
                                option: "Specific date",
                            },
                        ],
                    },
                    {
                        _id: 7,
                        question: "Any further details?",
                        questionType: "textarea",
                        pushedQuestion: 'Description',
                        isSkipAble: true,
                    },
                    {
                        _id: 8,
                        question: "What is Your contact Email?",
                        questionType: "input",
                        pushedQuestion: 'Email',
                    },
                    {
                        _id: 9,
                        question: "What is your name?",
                        questionType: "input",
                        pushedQuestion: 'Name',
                    },
                    {
                        _id: 10,
                        question: "What is your mobile number?",
                        questionType: "input",
                        pushedQuestion: 'Mobile Number',
                    },
                ],
            },
            {
                _id: 8,
                name: "House washing",
                questions: [
                    {
                        _id: 0,
                        question: "What type of job is this?",
                        questionType: "radio",
                        pushedQuestion: 'Type of job',
                        choices: [
                            {
                                _id: 0,
                                option: "Residential",
                            },
                            {
                                _id: 1,
                                option: "Commercial",
                            },
                        ],
                    },
                    {
                        _id: 1,
                        question: "What is the surface condition of the building exterior?",
                        questionType: "radio",
                        pushedQuestion: 'Surface condition',
                        choices: [
                            {
                                _id: 0,
                                option: "Graffiti",
                            },
                            {
                                _id: 1,
                                option: "Green or black",
                            },
                            {
                                _id: 2,
                                option: "Mossy",
                            },
                            {
                                _id: 3,
                                option: "Mouldy",
                            },
                            {
                                _id: 4,
                                option: "Stained",
                            },
                            {
                                _id: 5,
                                option: "Weathered",
                            },
                            {
                                _id: 6,
                                option: "Other (Please specify)",
                            },
                        ],
                    },
                    {
                        _id: 2,
                        question: "Do you need additional areas cleaned as well?",
                        questionType: "radio",
                        pushedQuestion: 'Additional cleaning required',
                        choices: [
                            {
                                _id: 0,
                                option: "Yes",
                            },
                            {
                                _id: 1,
                                option: "No thanks",
                            },
                        ],
                    },
                    {
                        _id: 3,
                        question: "Additional areas such as?",
                        questionType: "radio",
                        pushedQuestion: 'Additional areas',
                        choices: [
                            {
                                _id: 0,
                                option: "Courtyard",
                            },
                            {
                                _id: 1,
                                option: "Deck",
                            },
                            {
                                _id: 2,
                                option: "Driveway or carpark area",
                            },
                            {
                                _id: 3,
                                option: "Garage exterior and/or floor",
                            },
                            {
                                _id: 4,
                                option: "Pathway and pavements",
                            },
                            {
                                _id: 5,
                                option: "Patio",
                            },
                            {
                                _id: 6,
                                option: "Roof",
                            },
                        ],
                    },
                    {
                        _id: 4,
                        question: "What is your budget like for this service?",
                        questionType: "radio",
                        pushedQuestion: 'Budget',
                        choices: [
                            {
                                _id: 0,
                                option: "I am on a tight budget",
                            },
                            {
                                _id: 1,
                                option: "I am happy to pay for premium service",
                            },
                            {
                                _id: 2,
                                option: "I am not sure",
                            },
                        ],
                    },
                    {
                        _id: 5,
                        question: "When do you need this done?",
                        questionType: "radio",
                        pushedQuestion: 'When',
                        choices: [
                            {
                                _id: 0,
                                option: "As soon as possible",
                            },
                            {
                                _id: 1,
                                option: "Any time that works",
                            },
                            {
                                _id: 2,
                                option: "Specific date",
                            },
                        ],
                    },
                    {
                        _id: 6,
                        question: "Any further details?",
                        questionType: "textarea",
                        pushedQuestion: 'Description',
                        isSkipAble: true,
                    },
                    {
                        _id: 7,
                        question: "What is Your contact Email?",
                        questionType: "input",
                        pushedQuestion: 'Email',
                    },
                    {
                        _id: 8,
                        question: "What is your name?",
                        questionType: "input",
                        pushedQuestion: 'Name',
                    },
                    {
                        _id: 9,
                        question: "What is your mobile number?",
                        questionType: "input",
                        pushedQuestion: 'Mobile Number',
                    },
                ],
            },
            {
                _id: 9,
                name: "Pool cleaning",
                questions: [
                    {
                        _id: 0,
                        question: "What type of job is this?",
                        questionType: "radio",
                        pushedQuestion: 'Type of job',
                        choices: [
                            {
                                _id: 0,
                                option: "Residential",
                            },
                            {
                                _id: 1,
                                option: "Commercial",
                            },
                        ],
                    },
                    {
                        _id: 1,
                        question: "What type of pool do you have?",
                        questionType: "radio",
                        pushedQuestion: 'Type of pool',
                        choices: [
                            {
                                _id: 0,
                                option: "Above ground pool",
                            },
                            {
                                _id: 1,
                                option: "In ground pool",
                            },
                        ],
                    },
                    {
                        _id: 2,
                        question: "What type of pool water do you have?",
                        questionType: "radio",
                        pushedQuestion: 'Type of pool water',
                        choices: [
                            {
                                _id: 0,
                                option: "Salt water",
                            },
                            {
                                _id: 1,
                                option: "Chlorine",
                            },
                            {
                                _id: 2,
                                option: "I am not sure",
                            },
                            {
                                _id: 3,
                                option: "Other (Please specify)",
                            },
                        ],
                    },
                    {
                        _id: 3,
                        question: "What type of service does your pool require?",
                        questionType: "radio",
                        pushedQuestion: 'Type of service pool required',
                        choices: [
                            {
                                _id: 0,
                                option: "Casual pool clean",
                            },
                            {
                                _id: 1,
                                option: "Green pool clean",
                            },
                            {
                                _id: 2,
                                option: "Pool maintenance",
                            },
                            {
                                _id: 3,
                                option: "I am not sure/or floor",
                            },
                            {
                                _id: 4,
                                option: "Other (Please specify)",
                            },
                        ],
                    },
                    {
                        _id: 4,
                        question:
                            "If serviced well, would you be interested in booking this service regularly?",
                        questionType: "radio",
                        pushedQuestion: 'Interested in booking regularly',
                        choices: [
                            {
                                _id: 0,
                                option: "Yes",
                            },
                            {
                                _id: 1,
                                option: "No",
                            },
                            {
                                _id: 2,
                                option: "I am not sure",
                            },
                        ],
                    },
                    {
                        _id: 5,
                        question: "How often do you need this service?",
                        questionType: "radio",
                        pushedQuestion: 'Service duration',
                        choices: [
                            {
                                _id: 0,
                                option: "Weekly",
                            },
                            {
                                _id: 1,
                                option: "Monthly",
                            },
                            {
                                _id: 2,
                                option: "Quarterly",
                            },
                            {
                                _id: 3,
                                option: "Other (Please specify)",
                            },
                        ],
                    },
                    {
                        _id: 6,
                        question: "When do you need this done?",
                        questionType: "radio",
                        pushedQuestion: 'When',
                        choices: [
                            {
                                _id: 0,
                                option: "As soon as possible",
                            },
                            {
                                _id: 1,
                                option: "Any time that works",
                            },
                            {
                                _id: 2,
                                option: "Specific date",
                            },
                        ],
                    },
                    {
                        _id: 7,
                        question: "Any further details?",
                        questionType: "textarea",
                        pushedQuestion: 'Description',
                    },
                    {
                        _id: 8,
                        question: "What is Your contact Email?",
                        questionType: "input",
                        pushedQuestion: 'Email',
                    },
                    {
                        _id: 9,
                        question: "What is your name?",
                        questionType: "input",
                        pushedQuestion: 'Name',
                    },
                    {
                        _id: 10,
                        question: "What is your mobile number?",
                        questionType: "input",
                        pushedQuestion: 'Mobile Number',
                    },
                ],
            },
            {
                _id: 10,
                name: "Roof cleaning",
                questions: [
                    {
                        _id: 0,
                        question: "What type of job is this?",
                        questionType: "radio",
                        pushedQuestion: 'Type of job',
                        choices: [
                            {
                                _id: 0,
                                option: "Residential",
                            },
                            {
                                _id: 1,
                                option: "Commercial",
                            },
                        ],
                    },
                    {
                        _id: 1,
                        question: "Which type of home roof clean do you need?",
                        questionType: "radio",
                        pushedQuestion: 'Type of home roof',
                        choices: [
                            {
                                _id: 0,
                                option: "Metal roof clean",
                            },
                            {
                                _id: 1,
                                option: "Terracotta roof clean",
                            },
                            {
                                _id: 2,
                                option: "I am not sure",
                            },
                            {
                                _id: 3,
                                option: "Other (Please specify)",
                            },
                        ],
                    },
                    {
                        _id: 2,
                        question: "What is the condition of your roof?",
                        questionType: "radio",
                        pushedQuestion: 'Condition of roof',
                        choices: [
                            {
                                _id: 0,
                                option: "Mossy",
                            },
                            {
                                _id: 1,
                                option: "Rusty",
                            },
                            {
                                _id: 2,
                                option: "Mouldy",
                            },
                            {
                                _id: 3,
                                option: "Weathered",
                            },
                        ],
                    },
                    {
                        _id: 3,
                        question: "What is the approximate size of your roof?",
                        questionType: "radio",
                        pushedQuestion: 'Size of area',
                        choices: [
                            {
                                _id: 0,
                                option: "Less than 25 sqm",
                            },
                            {
                                _id: 1,
                                option: "25 to 50 sqm",
                            },
                            {
                                _id: 2,
                                option: "51 to 80 sqm",
                            },
                            {
                                _id: 3,
                                option: "More than 80 sqm",
                            },
                            {
                                _id: 4,
                                option: "I am not sure",
                            },
                        ],
                    },
                    {
                        _id: 4,
                        question: "When do you need this done?",
                        questionType: "radio",
                        pushedQuestion: 'When',
                        choices: [
                            {
                                _id: 0,
                                option: "As soon as possible",
                            },
                            {
                                _id: 1,
                                option: "Any time that works",
                            },
                            {
                                _id: 2,
                                option: "Specific date",
                            },
                        ],
                    },
                    {
                        _id: 5,
                        question: "Any further details?",
                        questionType: "textarea",
                        pushedQuestion: 'Description',
                        isSkipAble: true,
                    },
                    {
                        _id: 6,
                        question: "What is Your contact Email?",
                        questionType: "input",
                        pushedQuestion: 'Email',
                    },
                    {
                        _id: 7,
                        question: "What is your name?",
                        questionType: "input",
                        pushedQuestion: 'Name',
                    },
                    {
                        _id: 8,
                        question: "What is your mobile number?",
                        questionType: "input",
                        pushedQuestion: 'Mobile Number',
                    },
                ],
            },
            {
                _id: 11,
                name: "Tile and grout cleaning",
                questions: [
                    {
                        _id: 0,
                        question: "Where is the tile area that needs cleaning?",
                        questionType: "radio",
                        pushedQuestion: 'Area type',
                        choices: [
                            {
                                _id: 0,
                                option: "Indoor",
                            },
                            {
                                _id: 1,
                                option: "Outdoor",
                            },
                        ],
                    },
                    {
                        _id: 1,
                        question: "Which rooms require the tile cleaning?",
                        questionType: "radio",
                        pushedQuestion: 'Rooms that requires tile cleaning',
                        choices: [
                            {
                                _id: 0,
                                option: "Bathroom",
                            },
                            {
                                _id: 1,
                                option: "Kitchen",
                            },
                            {
                                _id: 2,
                                option: "Bedroom",
                            },
                            {
                                _id: 3,
                                option: "Other (Please specify)",
                            },
                        ],
                    },
                    {
                        _id: 2,
                        question: "How big is the area that needs cleaning?",
                        questionType: "radio",
                        pushedQuestion: 'Size of area',
                        choices: [
                            {
                                _id: 0,
                                option: "Less than 15sqm",
                            },
                            {
                                _id: 1,
                                option: "15 to 30 sqm",
                            },
                            {
                                _id: 2,
                                option: "30 to 45 sqm",
                            },
                            {
                                _id: 3,
                                option: "More than 45 sqm",
                            },
                            {
                                _id: 4,
                                option: "I am not sure",
                            },
                        ],
                    },
                    {
                        _id: 3,
                        question: "When do you need this done?",
                        questionType: "radio",
                        pushedQuestion: 'When',
                        choices: [
                            {
                                _id: 0,
                                option: "As soon as possible",
                            },
                            {
                                _id: 1,
                                option: "Any time that works",
                            },
                            {
                                _id: 2,
                                option: "Specific date",
                            },
                        ],
                    },
                    {
                        _id: 4,
                        question: "Any further details?",
                        questionType: "textarea",
                        pushedQuestion: 'Description',
                        isSkipAble: true,
                    },
                    {
                        _id: 5,
                        question: "What is Your contact Email?",
                        questionType: "input",
                        pushedQuestion: 'Email',
                    },
                    {
                        _id: 6,
                        question: "What is your name?",
                        questionType: "input",
                        questionTitle: "Input",
                        pushedQuestion: 'Name',
                    },
                    {
                        _id: 7,
                        question: "What is your mobile number?",
                        questionType: "input",
                        pushedQuestion: 'Mobile Number',
                    },
                ],
            },
            {
                _id: 12,
                name: "Window cleaning",
                questions: [
                    {
                        _id: 0,
                        question: "What type of job is this?",
                        questionType: "radio",
                        pushedQuestion: 'Type of job',
                        choices: [
                            {
                                _id: 0,
                                option: "Residential",
                            },
                            {
                                _id: 1,
                                option: "Commercial",
                            },
                        ],
                    },
                    {
                        _id: 1,
                        question: "How many windows need cleaning?",
                        questionType: "radio",
                        pushedQuestion: 'Number of windows',
                        choices: [
                            {
                                _id: 0,
                                option: "Up to 5 windows",
                            },
                            {
                                _id: 1,
                                option: "5 to 10 windows",
                            },
                            {
                                _id: 2,
                                option: "10 to 15 windows",
                            },
                            {
                                _id: 3,
                                option: "More than 15 windows",
                            },
                        ],
                    },
                    {
                        _id: 2,
                        question: "How would you like your windows cleaned?",
                        questionType: "radio",
                        pushedQuestion: 'Window clean',
                        choices: [
                            {
                                _id: 0,
                                option: "From the inside",
                            },
                            {
                                _id: 1,
                                option: "From the outside",
                            },
                            {
                                _id: 2,
                                option: "From both sides",
                            },
                        ],
                    },
                    {
                        _id: 3,
                        question: "How many storeys are there?(Number of Stories)",
                        questionType: "range",
                        pushedQuestion: 'Number of stories',
                    },
                    {
                        _id: 4,
                        question: "Is there anything else you would like cleaned?",
                        questionType: "radio",
                        pushedQuestion: 'Any other thing requires',
                        choices: [
                            {
                                _id: 0,
                                option: "Yes",
                            },
                            {
                                _id: 1,
                                option: "No thanks",
                            },
                        ],
                    },
                    {
                        _id: 5,
                        question: "Which other things would you like cleaned?",
                        questionType: "radio",
                        pushedQuestion: 'Other things needs to clean',
                        choices: [
                            {
                                _id: 0,
                                option: "Balustrades",
                            },
                            {
                                _id: 1,
                                option: "Skylights",
                            },
                            {
                                _id: 2,
                                option: "Window frame",
                            },
                            {
                                _id: 3,
                                option: "Other (Please specify)",
                            },
                        ],
                    },
                    {
                        _id: 6,
                        question:
                            "If serviced well, would you be interested in booking this service regularly?",
                        questionType: "radio",
                        pushedQuestion: 'Would you like to book this regularly',
                        choices: [
                            {
                                _id: 0,
                                option: "Yes",
                            },
                            {
                                _id: 1,
                                option: "No",
                            },
                            {
                                _id: 2,
                                option: "I am not sure",
                            },
                        ],
                    },
                    {
                        _id: 7,
                        question: "How often do you need this service?",
                        questionType: "radio",
                        pushedQuestion: 'Service duration',
                        choices: [
                            {
                                _id: 0,
                                option: "Weekly",
                            },
                            {
                                _id: 1,
                                option: "Monthly",
                            },
                            {
                                _id: 2,
                                option: "Quarterly",
                            },
                            {
                                _id: 3,
                                option: "Other (Please specify)",
                            },
                        ],
                    },
                    {
                        _id: 8,
                        question: "When do you need this done?",
                        questionType: "radio",
                        pushedQuestion: 'When',
                        choices: [
                            {
                                _id: 0,
                                option: "As soon as possible",
                            },
                            {
                                _id: 1,
                                option: "Any time that works",
                            },
                            {
                                _id: 2,
                                option: "Specific date",
                            },
                        ],
                    },
                    {
                        _id: 9,
                        question: "Any further details?",
                        questionType: "textarea",
                        pushedQuestion: 'Description',
                        isSkipAble: true,
                    },
                    {
                        _id: 10,
                        question: "What is Your contact Email?",
                        questionType: "input",
                        pushedQuestion: 'Email',
                    },
                    {
                        _id: 11,
                        question: "What is your name?",
                        questionType: "input",
                        pushedQuestion: 'Name',
                    },
                    {
                        _id: 12,
                        question: "What is your mobile number?",
                        questionType: "input",
                        pushedQuestion: 'Mobile Number',
                    },
                ],
            },
            {
                _id: 13,
                name: "Oven cleaning",
                questions: [
                    {
                        _id: 0,
                        question: "What type of job is this?",
                        questionType: "radio",
                        pushedQuestion: 'Type of job',
                        choices: [
                            {
                                _id: 0,
                                option: "Residential",
                            },
                            {
                                _id: 1,
                                option: "Commercial",
                            },
                        ],
                    },
                    {
                        _id: 1,
                        question: "What components need to be cleaned?",
                        questionType: "radio",
                        pushedQuestion: 'Components needs to be cleaned',
                        choices: [
                            {
                                _id: 0,
                                option: "Oven",
                            },
                            {
                                _id: 1,
                                option: "Grill",
                            },
                            {
                                _id: 2,
                                option: "Cooktop",
                            },
                            {
                                _id: 3,
                                option: "Rangehood",
                            },
                            {
                                _id: 4,
                                option: "BBQ",
                            },
                            {
                                _id: 5,
                                option: "Other (Please specify)",
                            },
                        ],
                    },
                    {
                        _id: 2,
                        question: "Is there anything else you would like cleaned?",
                        questionType: "radio",
                        pushedQuestion: 'Additional cleaning required',
                        choices: [
                            {
                                _id: 0,
                                option: "Yes",
                            },
                            {
                                _id: 1,
                                option: "No thanks",
                            },
                        ],
                    },
                    {
                        _id: 3,
                        question: "When do you need this done?",
                        questionType: "radio",
                        pushedQuestion: 'When',
                        choices: [
                            {
                                _id: 0,
                                option: "As soon as possible",
                            },
                            {
                                _id: 1,
                                option: "Any time that works",
                            },
                            {
                                _id: 2,
                                option: "Specific date",
                            },
                        ],
                    },
                    {
                        _id: 4,
                        question: "Any further details?",
                        questionType: "textarea",
                        pushedQuestion: 'Description',
                        isSkipAble: true,
                    },
                    {
                        _id: 5,
                        question: "What is Your contact Email?",
                        questionType: "input",
                        pushedQuestion: 'Email',
                    },
                    {
                        _id: 6,
                        question: "What is your name?",
                        questionType: "input",
                        pushedQuestion: 'Name',
                    },
                    {
                        _id: 7,
                        question: "What is your mobile number?",
                        questionType: "input",
                        pushedQuestion: 'Mobile Number',
                    },
                ],
            },
        ],
    },
    {
        name: "Carpet Cleaner",
        imageUrl:'/images/categoryImages/CarpetCleaner.png',
        categories: [
            {
                _id: 0,
                name: "Dry cleaning (maintenance clean, quick drying time)",
                questions: [
                    {
                        _id: 0,
                        question:
                            "How many rooms require carpet cleaning?(Number of furnished rooms)",
                        questionType: "range",
                        pushedQuestion: 'Number of furnished rooms',
                    },
                    {
                        _id: 1,
                        question:
                            "How many rooms require carpet cleaning?(Number of unfurnished rooms)",
                        questionType: "range",
                        pushedQuestion: 'Number of unfurnished rooms',
                    },
                    {
                        _id: 2,
                        question: "How big is the area that needs cleaning?",
                        questionType: "radio",
                        pushedQuestion: 'Size of area',
                        choices: [
                            {
                                _id: 0,
                                option: "Less than 15 sqm",
                            },
                            {
                                _id: 1,
                                option: "15 to 50 sqm",
                            },
                            {
                                _id: 2,
                                option: "51 to 80 sqm",
                            },
                            {
                                _id: 3,
                                option: "More than 80 sqm",
                            },
                            {
                                _id: 4,
                                option: "I am not sure",
                            },
                        ],
                    },
                    {
                        _id: 3,
                        question: "When do you need this done?",
                        questionType: "radio",
                        pushedQuestion: 'When',
                        choices: [
                            {
                                _id: 0,
                                option: "As soon as possible",
                            },
                            {
                                _id: 1,
                                option: "Any time that works",
                            },
                            {
                                _id: 2,
                                option: "Specific date",
                            },
                        ],
                    },
                    {
                        _id: 4,
                        question: "Any further details?",
                        questionType: "textarea",
                        pushedQuestion: 'Description',
                        isSkipAble: true
                    },
                    {
                        _id: 5,
                        question: "What is Your contact Email?",
                        questionType: "input",
                        pushedQuestion: 'Email',
                        isSkipAble: true,
                    },
                    {
                        _id: 6,
                        question: "What is your name?",
                        questionType: "input",
                        pushedQuestion: 'Name',
                    },
                    {
                        _id: 7,
                        question: "What is your mobile number?",
                        questionType: "input",
                        pushedQuestion: 'Mobile Number',
                    },
                ],
            },
            {
                _id: 1,
                name: "Steam cleaning (deep clean, more drying time)",
                questions: [
                    {
                        _id: 0,
                        question:
                            "How many rooms require carpet cleaning?(Number of furnished rooms)",
                        questionType: "range",
                        pushedQuestion: 'Number of furnished rooms',
                    },
                    {
                        _id: 1,
                        question:
                            "How many rooms require carpet cleaning?(Number of unfurnished rooms)",
                        questionType: "range",
                        pushedQuestion: 'Number of unfurnished rooms',
                    },
                    {
                        _id: 2,
                        question: "How big is the area that needs cleaning?",
                        questionType: "radio",
                        pushedQuestion: 'Size of area',
                        choices: [
                            {
                                _id: 0,
                                option: "Less than 15 sqm",
                            },
                            {
                                _id: 1,
                                option: "15 to 50 sqm",
                            },
                            {
                                _id: 2,
                                option: "51 to 80 sqm",
                            },
                            {
                                _id: 3,
                                option: "More than 80 sqm",
                            },
                            {
                                _id: 4,
                                option: "I am not sure",
                            },
                        ],
                    },
                    {
                        _id: 3,
                        question: "When do you need this done?",
                        questionType: "radio",
                        pushedQuestion: 'When',
                        choices: [
                            {
                                _id: 0,
                                option: "As soon as possible",
                            },
                            {
                                _id: 1,
                                option: "Any time that works",
                            },
                            {
                                _id: 2,
                                option: "Specific date",
                            },
                        ],
                    },
                    {
                        _id: 4,
                        question: "Any further details?",
                        questionType: "textarea",
                        pushedQuestion: 'Description',
                        isSkipAble: true,
                    },
                    {
                        _id: 5,
                        question: "What is Your contact Email?",
                        questionType: "input",
                        pushedQuestion: 'Email',
                    },
                    {
                        _id: 6,
                        question: "What is your name?",
                        questionType: "input",
                        pushedQuestion: 'Name',
                    },
                    {
                        _id: 7,
                        question: "What is your mobile number?",
                        questionType: "input",
                        pushedQuestion: 'Mobile Number',
                    },
                ],
            },
            {
                _id: 2,
                name: "I am not sure",
                questions: [
                    {
                        _id: 0,
                        question:
                            "How many rooms require carpet cleaning?(Number of furnished rooms)",
                        questionType: "range",
                        pushedQuestion: 'Number of furnished rooms',
                    },
                    {
                        _id: 1,
                        question:
                            "How many rooms require carpet cleaning?(Number of unfurnished rooms)",
                        questionType: "range",
                        pushedQuestion: 'Number of unfurnished rooms',

                    },
                    {
                        _id: 2,
                        question: "How big is the area that needs cleaning?",
                        questionType: "radio",
                        choices: [
                            {
                                _id: 0,
                                option: "Less than 15 sqm",
                            },
                            {
                                _id: 1,
                                option: "15 to 50 sqm",
                            },
                            {
                                _id: 2,
                                option: "51 to 80 sqm",
                            },
                            {
                                _id: 3,
                                option: "More than 80 sqm",
                            },
                            {
                                _id: 4,
                                option: "I am not sure",
                            },
                        ],
                    },
                    {
                        _id: 3,
                        question: "When do you need this done?",
                        questionType: "radio",
                        pushedQuestion: 'Size of area',
                        choices: [
                            {
                                _id: 0,
                                option: "As soon as possible",
                            },
                            {
                                _id: 1,
                                option: "Any time that works",
                            },
                            {
                                _id: 2,
                                option: "Specific date",
                            },
                        ],
                    },
                    {
                        _id: 4,
                        question: "Any further details?",
                        questionType: "textarea",
                        pushedQuestion: 'Description',
                        isSkipAble: true,
                    },
                    {
                        _id: 5,
                        question: "What is Your contact Email?",
                        questionType: "input",
                        pushedQuestion: 'Email',
                    },
                    {
                        _id: 6,
                        question: "What is your name?",
                        questionType: "input",
                        pushedQuestion: 'Name',
                    },
                    {
                        _id: 7,
                        question: "What is your mobile number?",
                        questionType: "input",
                        pushedQuestion: 'Mobile Number',
                    },
                ],
            },
        ],
    },
     {
        name: "Gardener",
        imageUrl:'/images/categoryImages/Gardener.png',
        categories: [
            {
                _id: 0,
                name: "Garden maintenance",
                questions: [
                    {
                        _id: 0,
                        question: "Which garden maintenance services do you need?",
                        questionType: "radio",
                        pushedQuestion: 'Maintenence service',

                        choices: [
                            {
                                _id: 0,
                                option: "Weeding",
                            },
                            {
                                _id: 1,
                                option: "Pruning and hedge trimming",
                            },
                            {
                                _id: 2,
                                option: "Garden clean up and waste removal",
                            },
                            {
                                _id: 3,
                                option: "Mulching",
                            },
                            {
                                _id: 4,
                                option: "New plant installation",
                            },
                            {
                                _id: 5,
                                option: "Fertilisation",
                            },
                            {
                                _id: 6,
                                option: "Watering",
                            },
                            {
                                _id: 7,
                                option: "Indoor plant maintenance",
                            },
                            {
                                _id: 8,
                                option: "Cleaning gutters",
                            },
                            {
                                _id: 9,
                                option: "Lawn mowing",
                            },
                        ],
                    },
                    {
                        _id: 1,
                        question:
                            "If serviced well, would you like this service booked regularly?",
                        questionType: "radio",
                        pushedQuestion: 'Would i like to book this regularly',
                        choices: [
                            {
                                _id: 0,
                                option: "Yes",
                            },
                            {
                                _id: 1,
                                option: "No",
                            },
                            {
                                _id: 2,
                                option: "I am not sure",
                            },
                        ],
                    },
                    {
                        _id: 2,
                        question: "How often do you need this service?",
                        questionType: "radio",
                        pushedQuestion: 'Duration of service',
                        choices: [
                            {
                                _id: 0,
                                option: "Weekly",
                            },
                            {
                                _id: 1,
                                option: "Monthly",
                            },
                            {
                                _id: 2,
                                option: "Quarterly",
                            },
                            {
                                _id: 3,
                                option: "Fortnightly",
                            },
                            {
                                _id: 4,
                                option: "Other (Please specify)",
                            },
                        ],
                    },
                    {
                        _id: 3,
                        question: "What is the area of the garden or lawn?",
                        questionType: "radio",
                        pushedQuestion: 'Size of area',
                        choices: [
                            {
                                _id: 0,
                                option: "Less than 30 sqm",
                            },
                            {
                                _id: 1,
                                option: "30 to 50 sqm",
                            },
                            {
                                _id: 2,
                                option: "50 to 100 sqm",
                            },
                            {
                                _id: 3,
                                option: "100 to 150 sqm",
                            },
                            {
                                _id: 4,
                                option: "More than 150 sqm",
                            },
                        ],
                    },
                    {
                        _id: 4,
                        question: "When do you need this done?",
                        questionType: "radio",
                        pushedQuestion: 'When',
                        choices: [
                            {
                                _id: 0,
                                option: "As soon as possible",
                            },
                            {
                                _id: 1,
                                option: "Any time that works",
                            },
                            {
                                _id: 2,
                                option: "Specific date",
                            },
                        ],
                    },
                    {
                        _id: 5,
                        question: "Any further details?",
                        questionType: "textarea",
                        pushedQuestion: 'Description',
                        isSkipAble: true,
                    },
                    {
                        _id: 6,
                        question: "What is Your contact Email?",
                        questionType: "input",
                        pushedQuestion: 'Email',
                    },
                    {
                        _id: 7,
                        question: "What is your name?",
                        questionType: "input",
                        pushedQuestion: 'Name',
                    },
                    {
                        _id: 8,
                        question: "What is your mobile number?",
                        questionType: "input",
                        pushedQuestion: 'Mobile Number',
                    },
                ],
            },
            {
                _id: 1,
                name: "Lawn services (mowing and care)",
                questions: [
                    {
                        _id: 1,
                        question: "What type of lawn service is needed?",
                        questionType: "radio",
                        pushedQuestion: 'Type of Lawn service',
                        choices: [
                            {
                                _id: 0,
                                option: "Lawn mowing",
                            },
                            {
                                _id: 1,
                                option: "Lawn care",
                            },
                        ],
                    },
                    {
                        _id: 1,
                        question: "What describes the grass length?",
                        questionType: "radio",
                        pushedQuestion: 'Length of grass',
                        choices: [
                            {
                                _id: 0,
                                option: "Regular grass",
                            },
                            {
                                _id: 1,
                                option: "Tall grass (needs slashing)",
                            },
                        ],
                    },
                    {
                        _id: 2,
                        question:
                            "If serviced well, would you like this service booked regularly?",
                        questionType: "radio",
                        pushedQuestion: 'Would i like to book this regularly',
                        choices: [
                            {
                                _id: 0,
                                option: "Yes",
                            },
                            {
                                _id: 1,
                                option: "No",
                            },
                            {
                                _id: 2,
                                option: "I am not sure",
                            },
                        ],
                    },
                    {
                        _id: 3,
                        question: "How often do you need this service?",
                        questionType: "radio",
                        pushedQuestion: 'Duration of service',
                        choices: [
                            {
                                _id: 0,
                                option: "Weekly",
                            },
                            {
                                _id: 1,
                                option: "Monthly",
                            },
                            {
                                _id: 2,
                                option: "Quarterly",
                            },
                            {
                                _id: 3,
                                option: "Fortnightly",
                            },
                            {
                                _id: 4,
                                option: "Other (Please specify)",
                            },
                        ],
                    },
                    {
                        _id: 4,
                        question: "What is the area of the garden or lawn?",
                        questionType: "radio",
                        pushedQuestion: 'Size of area',
                        choices: [
                            {
                                _id: 0,
                                option: "Less than 30 sqm",
                            },
                            {
                                _id: 1,
                                option: "30 to 50 sqm",
                            },
                            {
                                _id: 2,
                                option: "50 to 100 sqm",
                            },
                            {
                                _id: 3,
                                option: "100 to 150 sqm",
                            },
                            {
                                _id: 4,
                                option: "More than 150 sqm",
                            },
                        ],
                    },
                    {
                        _id: 5,
                        question: "When do you need this done?",
                        questionType: "radio",
                        pushedQuestion: 'When',
                        choices: [
                            {
                                _id: 0,
                                option: "As soon as possible",
                            },
                            {
                                _id: 1,
                                option: "Any time that works",
                            },
                            {
                                _id: 2,
                                option: "Specific date",
                            },
                        ],
                    },
                    {
                        _id: 6,
                        question: "Any further details?",
                        questionType: "textarea",
                        pushedQuestion: 'Description',
                        isSkipAble: true,
                    },
                    {
                        _id: 7,
                        question: "What is Your contact Email?",
                        questionType: "input",
                        pushedQuestion: 'Email',
                    },
                    {
                        _id: 8,
                        question: "What is your name?",
                        questionType: "input",
                        pushedQuestion: 'Name',
                    },
                    {
                        _id: 9,
                        question: "What is your mobile number?",
                        questionType: "input",
                        pushedQuestion: 'Mobile Number',
                    },
                ],
            },
            {
                _id: 2,
                name: "Tree lopping",
                questions: [
                    {
                        _id: 1,
                        question: "What Tree lopping service do you need?",
                        questionType: "radio",
                        pushedQuestion: 'Tree lopping service',
                        choices: [
                            {
                                _id: 0,
                                option: "Complete removal",
                            },
                            {
                                _id: 1,
                                option: "Reshaping, trimming or pruning",
                            },
                            {
                                _id: 2,
                                option: "Stump grinding",
                            },
                            {
                                _id: 3,
                                option: "Tree surgery and repair",
                            },
                            {
                                _id: 4,
                                option: "Inspect and advise",
                            },
                            {
                                _id: 5,
                                option: "Tree transplanting",
                            },
                        ],
                    },
                    {
                        _id: 1,
                        question: "How many trees?",
                        questionType: "range",
                        pushedQuestion: 'Number of trees',
                    },
                    {
                        _id: 2,
                        question: "What is the approximate height of the trees?",
                        questionType: "range",
                        pushedQuestion: 'Height of trees',
                    },
                    {
                        _id: 3,
                        question:
                            "If serviced well, would you like this service booked regularly?",
                        questionType: "radio",
                        pushedQuestion: 'Would i like to book this regularly',
                        choices: [
                            {
                                _id: 0,
                                option: "Yes",
                            },
                            {
                                _id: 1,
                                option: "No",
                            },
                            {
                                _id: 2,
                                option: "I am not sure",
                            },
                        ],
                    },
                    {
                        _id: 4,
                        question: "How often do you need this service?",
                        questionType: "radio",
                        pushedQuestion: 'Duration of service',
                        choices: [
                            {
                                _id: 0,
                                option: "Weekly",
                            },
                            {
                                _id: 1,
                                option: "Monthly",
                            },
                            {
                                _id: 2,
                                option: "Quarterly",
                            },
                            {
                                _id: 3,
                                option: "Fortnightly",
                            },
                            {
                                _id: 4,
                                option: "Other (Please specify)",
                            },
                        ],
                    },
                    {
                        _id: 5,
                        question: "What is the area of the garden or lawn?",
                        questionType: "radio",
                        pushedQuestion: 'Size of area',
                        choices: [
                            {
                                _id: 0,
                                option: "Less than 30 sqm",
                            },
                            {
                                _id: 1,
                                option: "30 to 50 sqm",
                            },
                            {
                                _id: 2,
                                option: "50 to 100 sqm",
                            },
                            {
                                _id: 3,
                                option: "100 to 150 sqm",
                            },
                            {
                                _id: 4,
                                option: "More than 150 sqm",
                            },
                        ],
                    },
                    {
                        _id: 6,
                        question: "When do you need this done?",
                        questionType: "radio",
                        pushedQuestion: 'When',
                        choices: [
                            {
                                _id: 0,
                                option: "As soon as possible",
                            },
                            {
                                _id: 1,
                                option: "Any time that works",
                            },
                            {
                                _id: 2,
                                option: "Specific date",
                            },
                        ],
                    },
                    {
                        _id: 7,
                        question: "Any further details?",
                        questionType: "textarea",
                        pushedQuestion: 'Description',
                        isSkipAble: true,
                    },
                    {
                        _id: 8,
                        question: "What is Your contact Email?",
                        questionType: "input",
                        pushedQuestion: 'Email',
                    },
                    {
                        _id: 9,
                        question: "What is your name?",
                        questionType: "input",
                        pushedQuestion: 'Name',
                    },
                    {
                        _id: 10,
                        question: "What is your mobile number?",
                        questionType: "input",
                        pushedQuestion: 'Mobile Number',
                    },
                ],
            },
            {
                _id: 3,
                name: "Garden landscaping, construction or design",
                questions: [
                    {
                        _id: 1,
                        question: "Which landscaping services do you need?",
                        questionType: "radio",
                        pushedQuestion: 'Landscaping service',
                        choices: [
                            {
                                _id: 0,
                                option: "Garden renovation",
                            },
                            {
                                _id: 1,
                                option: "Turfing",
                            },
                            {
                                _id: 2,
                                option: "Retaining walls",
                            },
                            {
                                _id: 3,
                                option: "Paving",
                            },
                            {
                                _id: 4,
                                option: "Other (Please specify)",
                            },
                        ],
                    },
                    {
                        _id: 1,
                        question: "What is the scale of work you need done?",
                        questionType: "radio",
                        pushedQuestion: 'Scale of work',
                        choices: [
                            {
                                _id: 0,
                                option:
                                    "Minor garden updates (New garden beds, a water feature, etc)",
                            },
                            {
                                _id: 1,
                                option:
                                    "Major garden update (Multiple small jobs or a couple large jobs)",
                            },
                            {
                                _id: 2,
                                option:
                                    "Complete garden renovation (Complete update of garden with several large jobs)",
                            },
                        ],
                    },
                    {
                        _id: 2,
                        question: "Do you have existing landscaping plans?",
                        questionType: "radio",
                        pushedQuestion: 'Have existing landscaping plans',
                        choices: [
                            {
                                _id: 0,
                                option: "Yes I have professional plans drawn up",
                            },
                            {
                                _id: 1,
                                option: "Yes I have a plan drawn up",
                            },
                            {
                                _id: 2,
                                option: "No I need assistance with planning",
                            },
                        ],
                    },
                    {
                        _id: 3,
                        question: "Which areas do you need landscaping services?",
                        questionType: "radio",
                        pushedQuestion: 'Area that needs landscaping service',
                        choices: [
                            {
                                _id: 0,
                                option: "Front yard",
                            },
                            {
                                _id: 1,
                                option: "Back yard",
                            },
                            {
                                _id: 2,
                                option: "Side yard",
                            },
                            {
                                _id: 3,
                                option: "Entire property",
                            },
                            {
                                _id: 4,
                                option: "Other (Please specify)",
                            },
                        ],
                    },
                    {
                        _id: 4,
                        question:
                            "Which hardscape features do you need in this renovation?",
                        questionType: "radio",
                        pushedQuestion: 'Handscape features',
                        choices: [
                            {
                                _id: 0,
                                option: "None",
                            },
                            {
                                _id: 1,
                                option: "Retaining walls",
                            },
                            {
                                _id: 2,
                                option: "Garden lighting",
                            },
                            {
                                _id: 3,
                                option: "Water features",
                            },
                            {
                                _id: 4,
                                option: "Paving",
                            },
                            {
                                _id: 5,
                                option: "Driveways",
                            },
                            {
                                _id: 6,
                                option: "Other (Please specify)",
                            },
                        ],
                    },
                    {
                        _id: 5,
                        question:
                            "Which softscape features do you need in this renovation?",
                        questionType: "radio",
                        pushedQuestion: 'Softscape features',
                        choices: [
                            {
                                _id: 0,
                                option: "None",
                            },
                            {
                                _id: 1,
                                option: "Turfing",
                            },
                            {
                                _id: 2,
                                option: "Tree planting",
                            },
                            {
                                _id: 3,
                                option: "Flower beds",
                            },
                            {
                                _id: 4,
                                option: "Sprinkler installation",
                            },
                            {
                                _id: 5,
                                option: "Outdoor lighting",
                            },

                            {
                                _id: 6,
                                option: "Other (Please specify)",
                            },
                        ],
                    },
                    {
                        _id: 6,
                        question:
                            "If serviced well, would you like this service booked regularly?",
                        questionType: "radio",
                        pushedQuestion: 'Would i like to book this regularly',
                        choices: [
                            {
                                _id: 0,
                                option: "Yes",
                            },
                            {
                                _id: 1,
                                option: "No",
                            },
                            {
                                _id: 2,
                                option: "I am not sure",
                            },
                        ],
                    },
                    {
                        _id: 7,
                        question: "How often do you need this service?",
                        questionType: "radio",
                        pushedQuestion: 'Duration of service',
                        choices: [
                            {
                                _id: 0,
                                option: "Weekly",
                            },
                            {
                                _id: 1,
                                option: "Monthly",
                            },
                            {
                                _id: 2,
                                option: "Quarterly",
                            },
                            {
                                _id: 3,
                                option: "Fortnightly",
                            },
                            {
                                _id: 4,
                                option: "Other (Please specify)",
                            },
                        ],
                    },
                    {
                        _id: 8,
                        question: "What is the area of the garden or lawn?",
                        questionType: "radio",
                        pushedQuestion: 'Size of area',
                        choices: [
                            {
                                _id: 0,
                                option: "Less than 30 sqm",
                            },
                            {
                                _id: 1,
                                option: "30 to 50 sqm",
                            },
                            {
                                _id: 2,
                                option: "50 to 100 sqm",
                            },
                            {
                                _id: 3,
                                option: "100 to 150 sqm",
                            },
                            {
                                _id: 4,
                                option: "More than 150 sqm",
                            },
                        ],
                    },
                    {
                        _id: 9,
                        question: "When do you need this done?",
                        questionType: "radio",
                        pushedQuestion: 'When',
                        choices: [
                            {
                                _id: 0,
                                option: "As soon as possible",
                            },
                            {
                                _id: 1,
                                option: "Any time that works",
                            },
                            {
                                _id: 2,
                                option: "Specific date",
                            },
                        ],
                    },
                    {
                        _id: 10,
                        question: "Any further details?",
                        questionType: "textarea",
                        pushedQuestion: 'Description',
                        isSkipAble: true,
                    },
                    {
                        _id: 11,
                        question: "What is Your contact Email?",
                        questionType: "input",
                        pushedQuestion: 'Email',
                    },
                    {
                        _id: 12,
                        question: "What is your name?",
                        questionType: "input",
                        pushedQuestion: 'Name',
                    },
                    {
                        _id: 13,
                        question: "What is your mobile number?",
                        questionType: "input",
                        pushedQuestion: 'Mobile Number',
                    },
                ],
            },
        ],
    },
    {
        name: "Graphic Designer",
        imageUrl: '/images/categoryImages/GraphicDesigner.png',
        categories: [
            {
                _id: 0,
                name: "Graphic Design",
                questions:[
                    {
                        _id:0,
                        question: "What type of graphic design do you require?",
                        questionType: "radio",
                        pushedQuestion: 'Type of design',
                        choices:[
                            { option: 'Logo design', _id: 1 },
                            { option: 'Business cards or stationery', _id: 2 },
                            { option: 'Website graphics', _id: 3 },
                            { option: 'Flyers / brochures / catalogues', _id: 4 },
                            { option: 'Book or CD/DVD Covers',_id: 5 },
                            { option: 'Illustrations', _id: 6 },
                            { option: 'Packaging', _id: 7 },
                            { option: 'T-shirt design', _id: 8 },
                            { option: 'Signwriting', _id: 9 },
                        ]
                    },
                    {
                        _id:1,
                        question: "What is the scope of the project?",
                        questionType: "radio",
                        pushedQuestion: 'Scope of project',
                        choices: [
                            {
                                _id:0,
                                option: 'Once off'
                            },
                            {
                                _id:1,
                                option: 'Ongoing'
                            },
                            {
                            _id:2,
                                option: 'I am not sure.'
                            }
                        ]
                    },
                    {
                        _id:2,
                        question: "Do you need printing services?",
                        questionType: "radio",
                        pushedQuestion: 'Is printing services needed',
                        choices: [
                            {
                                _id:0,
                                option: 'Yes'
                            },
                            {
                                _id:1,
                                option: 'No'
                            }
                        ]
                    },
                    {
                        _id:3,
                        question: "Would you like face to face consultation?",
                        questionType: "radio",
                        pushedQuestion: 'Face consultation required',
                        choices: [
                            {
                                _id:0,
                                option: 'Yes'
                            },
                            {
                                _id:1,
                                option: "No"
                            },
                            {
                                _id:2,
                                option: "Do not mind"
                            }
                        ]
                    },
                    {
                        _id:4,
                        question: "When do you need this done?",
                        questionType: "radio",
                        pushedQuestion: 'When',
                        choices: [
                            {
                                _id:0,
                                option: 'As soon as possible'
                            },
                            {
                                _id: 1,
                                option: 'Any time that works'
                            },
                            {
                                _id:2,
                                option: 'Specific date'
                            }
                        ]
                    },
                    {
                        _id:5,
                        question: "Any further details?",
                        questionType: "input",
                        pushedQuestion: 'Description',
                        isSkipAble: true,
                    },
                    {
                        _id: 6,
                        question: "What is Your contact Email?",
                        questionType: "input",
                        pushedQuestion: 'Email',
                    },
                    {
                        _id: 7,
                        question: "What is your name?",
                        questionType: "input",
                        pushedQuestion: 'Name',
                    },
                    {
                        _id: 8,
                        question: "What is your mobile number?",
                        questionType: "input",
                        pushedQuestion: 'Name',
                    },

                ]
            }
        ]
    },
    {
        name: 'Web Designer',
        imageUrl: '/images/categoryImages/WebDesigner.png',
        categories: [
            {
               _id:0,
               name: 'Web Designer',
               questions: [
                   {
                       _id:0,
                       question: "What type of web design work is required?",
                       questionType: "radio",
                       pushedQuestion: 'Type of web design work',
                       choices: [
                           { option: 'New website', _id: 0 },
                           { option: 'Revamp existing website', _id: 1 },
                           { option: 'Install software or script', _id: 2 },
                           { option: 'Fix website',  _id: 3 },
                           { option: 'Design / produce graphics', _id: 4 }
                       ]
                   },
                   {
                       _id: 1,
                       question: "What type of website do you require?",
                       questionType: "radio",
                       pushedQuestion: 'Type of website',
                       choices: [
                           { option: 'Business',  _id: 0 },
                           { option: 'Blog',  _id: 1 },
                           { option: 'E-commerce / online store',  _id: 2 },
                           { option: 'Personal',  _id: 3 },
                           { option: 'Non-profit',  _id: 4 },
                           { option: 'I am not sure',  _id: 5 }
                       ]
                   },
                   {
                       _id: 2,
                       question: "Will you need additional services?",
                       questionType: "radio",
                       pushedQuestion: 'Additional services',
                       choices: [
                           { option: 'Email / newsletter', _id: 0 },
                           { option: 'Search engine optimisation', _id: 1 },
                           { option: 'Mobile site', _id: 2 },
                           { option: 'Mobile app', _id: 3 },
                           { option: 'I am not sure', _id: 4 },
                           { option: 'None', _id: 5 }
                       ]
                   },
                   {
                       _id: 3,
                       question: "Would you like face to face consultation?",
                       pushedQuestion: 'Face consultation required',
                       questionType: "radio",
                       choices: [
                           {
                               _id:0,
                               option: "Yes"
                           },
                           {
                               _id:1,
                               option: "No"
                           }
                       ]
                   },
                   {
                       _id:4,
                       question: "When do you need this done?",
                       questionType: "radio",
                       pushedQuestion: 'When',
                       choices: [
                           {
                               _id: 0,
                               option: 'As soon as possible'
                           },
                           {
                               _id: 1,
                               option: 'Any time that works'
                           },
                           {
                               _id: 2,
                               option: 'Specific date'
                           }
                       ]
                   },
                   {
                       _id: 5,
                       question: "Any further details?",
                       questionType: "input",
                       pushedQuestion: 'Description',
                       isSkipAble: true,
                   },
                   {
                       _id: 6,
                       question: "What is Your contact Email?",
                       questionType: "input",
                       pushedQuestion: 'Email',
                   },
                   {
                       _id: 7,
                       question: "What is your name?",
                       questionType: "input",
                       pushedQuestion: 'Name',
                   },
                   {
                       _id: 8,
                       question: "What is your mobile number?",
                       questionType: "input",
                       pushedQuestion: 'Name',
                   },
               ]
            }
        ]
    }
];


