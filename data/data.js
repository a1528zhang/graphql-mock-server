/**
 * Created by az on 2017/6/6.
 */
import {find, filter} from 'lodash';

export const tutors = [
    {
        id: 1,
        profile: {
            id: 1
        },
        first_name: 'tutor7@',
        last_name: 'quesbook.us',
        avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAAGkAQMAAABEgsN2AAAABlBMVEVj0gn/\n//+lhIGaAAAAz0lEQVR4nO3bMQ7CMAwAQNoFfgE/pTyNn8APGOlCEWmHVIGl\nEonanLfYOsVjZMXtsCAe7W5JUBRFUVRl6t584hASQ5PErNAV6ZCiKIqiKIqq\nQTXpcOf5r7soiqIoiqIoaow+zD2nxCUcTmmhZIcURVEURVFUFeocJqK3LHdR\nFEVRFEVR1at9eH6+xkM8F50VSnZIURRFURRFbVX18b7S+FP0GmXa7ypnhxRF\nURRFUdRWlbkoRVEURVEUlV8do3X5n3v0U6Er0iFFURRFrUy9AcYemAU/T1jZ\nAAAAAElFTkSuQmCC\n'
    }, {
        id: 2,
        profile: {
            id: 2
        },
        first_name: 'tutor8@',
        last_name: 'quesbook.us',
        avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAAGkAQMAAABEgsN2AAAABlBMVEVj0gn/\n//+lhIGaAAAAz0lEQVR4nO3bMQ7CMAwAQNoFfgE/pTyNn8APGOlCEWmHVIGl\nEonanLfYOsVjZMXtsCAe7W5JUBRFUVRl6t584hASQ5PErNAV6ZCiKIqiKIqq\nQTXpcOf5r7soiqIoiqIoaow+zD2nxCUcTmmhZIcURVEURVFUFeocJqK3LHdR\nFEVRFEVR1at9eH6+xkM8F50VSnZIURRFURRFbVX18b7S+FP0GmXa7ypnhxRF\nURRFUdRWlbkoRVEURVEUlV8do3X5n3v0U6Er0iFFURRFrUy9AcYemAU/T1jZ\nAAAAAElFTkSuQmCC\n'
    }, {
        id: 3,
        profile: {
            id: 3
        },
        first_name: 'tutor10@',
        last_name: 'quesbook.us',
        avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAAGkAQMAAABEgsN2AAAABlBMVEVj0gn/\n//+lhIGaAAAAz0lEQVR4nO3bMQ7CMAwAQNoFfgE/pTyNn8APGOlCEWmHVIGl\nEonanLfYOsVjZMXtsCAe7W5JUBRFUVRl6t584hASQ5PErNAV6ZCiKIqiKIqq\nQTXpcOf5r7soiqIoiqIoaow+zD2nxCUcTmmhZIcURVEURVFUFeocJqK3LHdR\nFEVRFEVR1at9eH6+xkM8F50VSnZIURRFURRFbVX18b7S+FP0GmXa7ypnhxRF\nURRFUdRWlbkoRVEURVEUlV8do3X5n3v0U6Er0iFFURRFrUy9AcYemAU/T1jZ\nAAAAAElFTkSuQmCC\n'
    }
];

export const examTypes = [
    {
        id: 1,
        name: 'ACT',
        sections: [
            {
                id: 1,
                name: 'ACT_English',
                skills: [
                    {
                        id: 11,
                        name: 'ACT_English_Skill01'
                    }, {
                        id: 12,
                        name: 'ACT_English_Skill02'
                    }
                ]
            }, {
                id: 2,
                name: 'ACT_Math',
                skills: [
                    {
                        id: 21,
                        name: 'ACT_Math_Skill01'
                    }, {
                        id: 22,
                        name: 'ACT_Math_Skill02'
                    }
                ]
            }, {
                id: 3,
                name: 'ACT_Reading',
                skills: [
                    {
                        id: 31,
                        name: 'ACT_Reading_Skill01'
                    }, {
                        id: 32,
                        name: 'ACT_Reading_Skill02'
                    }
                ]
            }, {
                id: 4,
                name: 'ACT_Science',
                skills: [
                    {
                        id: 41,
                        name: 'ACT_Science_Skill01'
                    }, {
                        id: 42,
                        name: 'ACT_Science_Skill02'
                    }
                ]
            }
        ]
    }, {
        id: 2,
        name: 'TOEFL',
        sections: [
            {
                id: 5,
                name: 'TOEFL_English',
                skills: [
                    {
                        id: 51,
                        name: 'TOEFL_English_Skill01'
                    }, {
                        id: 52,
                        name: 'TOEFL_English_Skill02'
                    }
                ]
            }, {
                id: 6,
                name: 'TOEFL_Reading',
                skills: [
                    {
                        id: 61,
                        name: 'TOEFL_Reading_Skill01'
                    }, {
                        id: 62,
                        name: 'TOEFL_Reading_Skill02'
                    }
                ]
            }
        ]
    }
];

export const eClassScheds = [
    {
        id: 1,
        starts_at: '2017-05-29T07:25:48',
        regStatus: true,
        is_show: true,
        status: 'Not Started',
        eClass: {
            id: 1,
            length_in_minutes: 30,
            title: 'Voluptatem harum sapiente id deleniti accusamus.',
            price: 9.99,
            seatNum: 6,
            type: 'Workshop',
            description: 'lorem ipsum dolor sit amet',
            tutor: {
                id: 1,
                first_name: 'tutor7@',
                last_name: 'quesbook.us'
            },
            skill: {
                id: 11,
                name: 'ACT_English_Skill01',
                section: {
                    id: 1,
                    name: 'ACT_English',
                    examType: {
                        id: 1,
                        name: 'ACT'
                    }
                }
            }
        },
        enrolledCount: 2,
        enrolledList: [
            {
                id: 1,
                name: 'Student 01',
                avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAAGkAQMAAABEgsN2AAAABlBMVEVj0gn/\n//+lhIGaAAAAz0lEQVR4nO3bMQ7CMAwAQNoFfgE/pTyNn8APGOlCEWmHVIGl\nEonanLfYOsVjZMXtsCAe7W5JUBRFUVRl6t584hASQ5PErNAV6ZCiKIqiKIqq\nQTXpcOf5r7soiqIoiqIoaow+zD2nxCUcTmmhZIcURVEURVFUFeocJqK3LHdR\nFEVRFEVR1at9eH6+xkM8F50VSnZIURRFURRFbVX18b7S+FP0GmXa7ypnhxRF\nURRFUdRWlbkoRVEURVEUlV8do3X5n3v0U6Er0iFFURRFrUy9AcYemAU/T1jZ\nAAAAAElFTkSuQmCC\n'
            }, {
                id: 2,
                name: 'Student 02',
                avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAAGkAQMAAABEgsN2AAAABlBMVEVj0gn/\n//+lhIGaAAAAz0lEQVR4nO3bMQ7CMAwAQNoFfgE/pTyNn8APGOlCEWmHVIGl\nEonanLfYOsVjZMXtsCAe7W5JUBRFUVRl6t584hASQ5PErNAV6ZCiKIqiKIqq\nQTXpcOf5r7soiqIoiqIoaow+zD2nxCUcTmmhZIcURVEURVFUFeocJqK3LHdR\nFEVRFEVR1at9eH6+xkM8F50VSnZIURRFURRFbVX18b7S+FP0GmXa7ypnhxRF\nURRFUdRWlbkoRVEURVEUlV8do3X5n3v0U6Er0iFFURRFrUy9AcYemAU/T1jZ\nAAAAAElFTkSuQmCC\n'
            }
        ]
    }, {
        id: 2,
        starts_at: '2017-06-08T10:25:48',
        regStatus: false,
        is_show: true,
        status: 'Started',
        eClass: {
            id: 1,
            length_in_minutes: 30,
            title: 'Voluptatem harum sapiente id deleniti accusamus.',
            price: 9.99,
            seatNum: 6,
            type: 'Workshop',
            description: 'lorem ipsum dolor sit amet',
            tutor: {
                id: 1,
                first_name: 'tutor7@',
                last_name: 'quesbook.us'
            },
            skill: {
                id: 11,
                name: 'ACT_English_Skill01',
                section: {
                    id: 1,
                    name: 'ACT_English',
                    examType: {
                        id: 1,
                        name: 'ACT'
                    }
                }
            }
        },
        enrolledCount: 3,
        enrolledList: [
            {
                id: 1,
                name: 'Student 01',
                avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAAGkAQMAAABEgsN2AAAABlBMVEVj0gn/\n//+lhIGaAAAAz0lEQVR4nO3bMQ7CMAwAQNoFfgE/pTyNn8APGOlCEWmHVIGl\nEonanLfYOsVjZMXtsCAe7W5JUBRFUVRl6t584hASQ5PErNAV6ZCiKIqiKIqq\nQTXpcOf5r7soiqIoiqIoaow+zD2nxCUcTmmhZIcURVEURVFUFeocJqK3LHdR\nFEVRFEVR1at9eH6+xkM8F50VSnZIURRFURRFbVX18b7S+FP0GmXa7ypnhxRF\nURRFUdRWlbkoRVEURVEUlV8do3X5n3v0U6Er0iFFURRFrUy9AcYemAU/T1jZ\nAAAAAElFTkSuQmCC\n'
            }, {
                id: 2,
                name: 'Student 02',
                avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAAGkAQMAAABEgsN2AAAABlBMVEVj0gn/\n//+lhIGaAAAAz0lEQVR4nO3bMQ7CMAwAQNoFfgE/pTyNn8APGOlCEWmHVIGl\nEonanLfYOsVjZMXtsCAe7W5JUBRFUVRl6t584hASQ5PErNAV6ZCiKIqiKIqq\nQTXpcOf5r7soiqIoiqIoaow+zD2nxCUcTmmhZIcURVEURVFUFeocJqK3LHdR\nFEVRFEVR1at9eH6+xkM8F50VSnZIURRFURRFbVX18b7S+FP0GmXa7ypnhxRF\nURRFUdRWlbkoRVEURVEUlV8do3X5n3v0U6Er0iFFURRFrUy9AcYemAU/T1jZ\nAAAAAElFTkSuQmCC\n'
            }, {
                id: 3,
                name: 'Student 03',
                avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAAGkAQMAAABEgsN2AAAABlBMVEVj0gn/\n//+lhIGaAAAAz0lEQVR4nO3bMQ7CMAwAQNoFfgE/pTyNn8APGOlCEWmHVIGl\nEonanLfYOsVjZMXtsCAe7W5JUBRFUVRl6t584hASQ5PErNAV6ZCiKIqiKIqq\nQTXpcOf5r7soiqIoiqIoaow+zD2nxCUcTmmhZIcURVEURVFUFeocJqK3LHdR\nFEVRFEVR1at9eH6+xkM8F50VSnZIURRFURRFbVX18b7S+FP0GmXa7ypnhxRF\nURRFUdRWlbkoRVEURVEUlV8do3X5n3v0U6Er0iFFURRFrUy9AcYemAU/T1jZ\nAAAAAElFTkSuQmCC\n'
            }
        ]
    }, {
        id: 3,
        starts_at: '2017-06-08T10:00:00',
        regStatus: false,
        is_show: true,
        status: 'Started',
        eClass: {
            id: 1,
            length_in_minutes: 30,
            title: 'Voluptatem harum sapiente id deleniti accusamus.',
            price: 9.99,
            seatNum: 6,
            type: 'Workshop',
            description: 'lorem ipsum dolor sit amet',
            tutor: {
                id: 1,
                first_name: 'tutor7@',
                last_name: 'quesbook.us'
            },
            skill: {
                id: 11,
                name: 'ACT_English_Skill01',
                section: {
                    id: 1,
                    name: 'ACT_English',
                    examType: {
                        id: 1,
                        name: 'ACT'
                    }
                }
            }
        },
        enrolledCount: 3,
        enrolledList: [
            {
                id: 1,
                name: 'Student 01',
                avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAAGkAQMAAABEgsN2AAAABlBMVEVj0gn/\n//+lhIGaAAAAz0lEQVR4nO3bMQ7CMAwAQNoFfgE/pTyNn8APGOlCEWmHVIGl\nEonanLfYOsVjZMXtsCAe7W5JUBRFUVRl6t584hASQ5PErNAV6ZCiKIqiKIqq\nQTXpcOf5r7soiqIoiqIoaow+zD2nxCUcTmmhZIcURVEURVFUFeocJqK3LHdR\nFEVRFEVR1at9eH6+xkM8F50VSnZIURRFURRFbVX18b7S+FP0GmXa7ypnhxRF\nURRFUdRWlbkoRVEURVEUlV8do3X5n3v0U6Er0iFFURRFrUy9AcYemAU/T1jZ\nAAAAAElFTkSuQmCC\n'
            }, {
                id: 2,
                name: 'Student 02',
                avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAAGkAQMAAABEgsN2AAAABlBMVEVj0gn/\n//+lhIGaAAAAz0lEQVR4nO3bMQ7CMAwAQNoFfgE/pTyNn8APGOlCEWmHVIGl\nEonanLfYOsVjZMXtsCAe7W5JUBRFUVRl6t584hASQ5PErNAV6ZCiKIqiKIqq\nQTXpcOf5r7soiqIoiqIoaow+zD2nxCUcTmmhZIcURVEURVFUFeocJqK3LHdR\nFEVRFEVR1at9eH6+xkM8F50VSnZIURRFURRFbVX18b7S+FP0GmXa7ypnhxRF\nURRFUdRWlbkoRVEURVEUlV8do3X5n3v0U6Er0iFFURRFrUy9AcYemAU/T1jZ\nAAAAAElFTkSuQmCC\n'
            }, {
                id: 3,
                name: 'Student 03',
                avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAAGkAQMAAABEgsN2AAAABlBMVEVj0gn/\n//+lhIGaAAAAz0lEQVR4nO3bMQ7CMAwAQNoFfgE/pTyNn8APGOlCEWmHVIGl\nEonanLfYOsVjZMXtsCAe7W5JUBRFUVRl6t584hASQ5PErNAV6ZCiKIqiKIqq\nQTXpcOf5r7soiqIoiqIoaow+zD2nxCUcTmmhZIcURVEURVFUFeocJqK3LHdR\nFEVRFEVR1at9eH6+xkM8F50VSnZIURRFURRFbVX18b7S+FP0GmXa7ypnhxRF\nURRFUdRWlbkoRVEURVEUlV8do3X5n3v0U6Er0iFFURRFrUy9AcYemAU/T1jZ\nAAAAAElFTkSuQmCC\n'
            }
        ]
    }, {
        id: 4,
        starts_at: '2017-07-08T10:25:48',
        regStatus: true,
        is_show: true,
        status: 'Not Started',
        eClass: {
            id: 2,
            length_in_minutes: 120,
            title: 'Voluptatem harum sapiente id deleniti accusamus.',
            price: 999.99,
            seatNum: 200,
            type: 'Lecture',
            description: 'lorem ipsum dolor sit amet',
            tutor: {
                id: 2,
                first_name: 'tutor8@',
                last_name: 'quesbook.us'
            },
            skill: {
                id: 5,
                name: 'TOEFL_English_Skill02',
                section: {
                    id: 2,
                    name: 'TOEFL_English',
                    examType: {
                        id: 52,
                        name: 'TOEFL'
                    }
                }
            }
        },
        enrolledCount: 0,
        enrolledList: []
    }, {
        id: 5,
        starts_at: '2017-07-06T10:25:48',
        regStatus: true,
        status: 'Not Started',
        eClass: {
            id: 2,
            length_in_minutes: 120,
            title: 'Voluptatem harum sapiente id deleniti accusamus.',
            price: 999.99,
            seatNum: 200,
            type: 'Lecture',
            description: 'lorem ipsum dolor sit amet',
            tutor: {
                id: 2,
                first_name: 'tutor8@',
                last_name: 'quesbook.us'
            },
            skill: {
                id: 5,
                name: 'TOEFL_English_Skill02',
                section: {
                    id: 2,
                    name: 'TOEFL_English',
                    examType: {
                        id: 52,
                        name: 'TOEFL'
                    }
                }
            }
        },
        enrolledCount: 0,
        enrolledList: []
    }
];

export const reminders = [
    {
        id: 1,
        hour: 0,
        minute: 30
    }, {
        id: 2,
        hour: 1,
        minute: 59
    }, {
        id: 3,
        hour: 6,
        minute: 0
    }
];

export const articles = [
    {
        id: 1,
        content: "a",
        created_at: "b",
        featured_image_url: "3",
        study_topic_id: 1,
        title: "666"
    }, {
        id: 2,
        content: "b",
        created_at: "b",
        featured_image_url: "3",
        study_topic_id: 2,
        title: "555"
    }, {
        id: 3,
        content: "c",
        created_at: "b",
        featured_image_url: "3",
        study_topic_id: 3,
        title: "444"
    }
];

export const topics = [
    {
        id: 1,
        name: 'Tom',
        position: 111,
        articles: [find(articles, {id: 1})]
    }, {
        id: 2,
        name: 'Sashko',
        position: 222,
        articles: [find(articles, {id: 2})]
    }, {
        id: 3,
        name: 'nani',
        position: 333,
        articles: [find(articles, {id: 3})]
    }
];

export const sections = [
    {
        id: 1,
        name: "section 1",
        topics: [find(topics, {id: 1})],
        study_topics: [find(topics, {id: 1})]
    }, {
        id: 2,
        name: "section 2",
        topics: [find(topics, {id: 2})],
        study_topics: [find(topics, {id: 2})]
    }, {
        id: 3,
        name: "section 3",
        topics: [find(topics, {id: 3})],
        study_topics: [find(topics, {id: 3})]
    }
];

export const applications = [
    {
        id: 1,
        "tutor": {
            "id": 13624,
            "email": "tutor7@quesbook.us",
            "first_name": "qa us",
            "last_name": "quesbook.us",
            "mobile_phone": "(555) 555-1213"
        },
        last_qb_date: '2017-09-09',
        date_of_application: '2017-00-00',
        tutor_test_types: [
            {
                "id": 1,
                "name": "Act",
                "desc": "Act"
            }
        ],
        skills: [
            {
                "id": 131,
                "name": "Finding a Data Point",
                "state": "open",
                "section": {
                    "id": 4,
                    "name": "Science"
                }
            }, {
                "id": 139,
                "name": "Fuuuuuuuuuuu",
                "state": "open",
                "section": {
                    "id": 4,
                    "name": "Science"
                }
            }, {
                "id": 132,
                "name": "skillTwo",
                "state": "open",
                "section": {
                    "id": 3,
                    "name": "math"
                }
            }
        ]
    }, {
        id: 2,
        "tutor": {
            "id": 13614,
            "email": "tutor2@quesbook.us",
            "first_name": "two",
            "last_name": "quesbook.us",
            "mobile_phone": "(555) 555-6666"
        },
        last_qb_date: '2017-09-09',
        date_of_application: '2017-00-02',
        tutor_test_types: [
            {
                "id": 1,
                "name": "Act",
                "desc": "Act"
            }
        ],
        skills: [
            {
                "id": 133,
                "name": "holy shit!",
                "state": "reject",
                "section": {
                    "id": 4,
                    "name": "Science"
                }
            }, {
                "id": 128,
                "name": "skill three",
                "state": "reject",
                "section": {
                    "id": 2,
                    "name": "English"
                }
            }
        ]
    }, {
        id: 3,
        "tutor": {
            "id": 13625,
            "email": "tutor1@quesbook.us",
            "first_name": "god",
            "last_name": "quesbook.us",
            "mobile_phone": "(555) 555-2333"
        },
        last_qb_date: '2017-09-09',
        date_of_application: '2017-00-05',
        tutor_test_types: [
            {
                "id": 1,
                "name": "Act",
                "desc": "Act"
            }
        ],
        skills: [
            {
                "id": 123,
                "name": "aoaoao",
                "state": "open",
                "section": {
                    "id": 4,
                    "name": "Science"
                }
            }
        ]
    }, {
        id: 4,
        tutor: {
            "id": 135,
            "email": "tutor0@quesbook.us",
            "first_name": "mod",
            "last_name": "quesbook.us",
            "mobile_phone": "(555) 555-1234"
        },
        last_qb_date: '2017-09-09',
        date_of_application: '2017-00-12',
        tutor_test_types: [
            {
                "id": 1,
                "name": "Act",
                "desc": "Act"
            }
        ],
        skills: [
            {
                "id": 123,
                "name": "aoaoao",
                "state": "reject",
                "section": {
                    "id": 4,
                    "name": "Science"
                }
            }
        ]
    }
];
