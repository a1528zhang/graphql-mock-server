/**
 * Created by az on 2017/6/6.
 */
import { find, filter } from 'lodash';
export const articles = [
    {id: 1, content: "a", created_at: "b", featured_image_url: "3", study_topic_id: 1, title: "666"},
    {id: 2, content: "b", created_at: "b", featured_image_url: "3", study_topic_id: 2, title: "555"},
    {id: 3, content: "c", created_at: "b", featured_image_url: "3", study_topic_id: 3, title: "444"},
];

export const topics = [
    { id: 1, name: 'Tom', position: 111, articles: [find(articles, {id: 1})]},
    { id: 2, name: 'Sashko', position: 222, articles: [find(articles, {id: 2})]},
    { id: 3, name: 'nani', position: 333, articles: [find(articles, {id: 3})]},
];

export const sections = [
    { id: 1, name: "section 1", topics: [find(topics,  {id:1})], study_topics: [find(topics,  {id:1})]},
    { id: 2, name: "section 2", topics: [find(topics,  {id:2})], study_topics: [find(topics,  {id:2})]},
    { id: 3, name: "section 3", topics: [find(topics,  {id:3})], study_topics: [find(topics,  {id:3})]},
];

export const applications = [
    { id: 1, "tutor": {
        "id": 13624,
        "email": "tutor7@quesbook.us",
        "first_name": "qa us",
        "last_name": "quesbook.us",
        "mobile_phone": "(555) 555-1213"
    },last_qb_date:'2017-09-09', date_of_application: '2017-00-00', tutor_test_types: [
        {
            "id": 1,
            "name": "Act",
            "desc": "Act"
        }
    ], skills: [
            {
                "id": 131,
                "name": "Finding a Data Point",
                "state": "open",
                "section": {
                    "id": 4,
                    "name": "Science"
                }
            },{
                "id": 139,
                "name": "Fuuuuuuuuuuu",
                "state": "open",
                "section": {
                    "id": 4,
                    "name": "Science"
                }
            },
            {
                "id": 132,
                "name": "skillTwo",
                "state": "open",
                "section": {
                    "id": 3,
                    "name": "math"
                }
            }
        ]},
    { id: 2, "tutor": {
        "id": 13614,
        "email": "tutor2@quesbook.us",
        "first_name": "two",
        "last_name": "quesbook.us",
        "mobile_phone": "(555) 555-6666"
    },last_qb_date:'2017-09-09', date_of_application: '2017-00-02', tutor_test_types: [
        {
            "id": 1,
            "name": "Act",
            "desc": "Act"
        }
    ], skills:[
            {
                "id": 133,
                "name": "holy shit!",
                "state": "reject",
                "section": {
                    "id": 4,
                    "name": "Science"
                }
            },
            {
                "id": 128,
                "name": "skill three",
                "state": "reject",
                "section": {
                    "id": 2,
                    "name": "English"
                }
            }
        ]},
    { id: 3, "tutor": {
        "id": 13625,
        "email": "tutor1@quesbook.us",
        "first_name": "god",
        "last_name": "quesbook.us",
        "mobile_phone": "(555) 555-2333"
    },last_qb_date:'2017-09-09', date_of_application: '2017-00-05', tutor_test_types: [
        {
            "id": 1,
            "name": "Act",
            "desc": "Act"
        }
    ], skills:[
            {
                "id": 123,
                "name": "aoaoao",
                "state": "open",
                "section": {
                    "id": 4,
                    "name": "Science"
                }
            }
        ]},
    { id: 4, tutor: {
        "id": 135,
        "email": "tutor0@quesbook.us",
        "first_name": "mod",
        "last_name": "quesbook.us",
        "mobile_phone": "(555) 555-1234"
    },last_qb_date:'2017-09-09', date_of_application: '2017-00-12', tutor_test_types: [
        {
            "id": 1,
            "name": "Act",
            "desc": "Act"
        }
    ], skills:[
            {
                "id": 123,
                "name": "aoaoao",
                "state": "reject",
                "section": {
                    "id": 4,
                    "name": "Science"
                }
            }
        ]},
];

