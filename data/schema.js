import {makeExecutableSchema} from 'graphql-tools';

import resolvers from './resolvers';

const schema = `
type ActStudyArticle {
  content: String
  created_at: String
  featured_image_url: String
  id: Int
  position: Int
  slug: String
  study_topic_id: Int
  title: String!
  topic: ActTopic
  updated_at: String
}

type ActStudyTopic {
  articles: [ActStudyArticle]
  id: ID!
  name: String!
  position: Int
  section: ActSection
}

type ActTopic {
  id: ID!
  name: String!
  position: Int
  section: ActSection
}

type ActSection {
  id: Int
  name: String
  study_topics: [ActStudyTopic]
  topics: [ActTopic]
}

type Section{
  id: Int
  name: String
  skills: [Skill]
  examType: ExamType
}

type Skills {
  id: Int
  name: String
  state: String
  section: Section
}

type Tutor{
  id: Int
  email: String
  first_name:String
  last_name: String
  mobile_phone: String
  avatar: String
}
type TestType{
  id: Int
  name: String
  desc: String
}
type Application {
  id: Int
  date_of_application: String
  last_qb_date: String
  skills: [Skills]
  tutor: Tutor
  tutor_test_types: [TestType]
}

# For Admin Calendar

type Student {
    id: Int!
    name: String!
    avatar: String
    grade: String
}

type ExamType {
    id: Int!
    name: String!
    sections: [Section]
}

type Reminder {
    id: Int!
    hour: Int!
    minute: Int!
}

type Skill {
    id: Int!
    name: String!
    section: Section
}

type EClass {
    id: Int!
    length_in_minutes: Int!
    title: String!
    price: Float!
    seatNum: Int!
    type: String!
    description: String
    tutor: Tutor
    skill: Skill!
}

type EClassSched {
    id: Int!
    starts_at: String!
    regStatus: Boolean!
    status: String!
    eClass: EClass
    enrolledCount: Int!
    enrolledList: [Student]
}



# the schema allows the following query:
type Query {
  sectionWithStudyArticle: [ActSection]
  studyArticles(id_eq: ID, id_in: [ID], topic_id_eq: ID, topic_name_eq: String, section_id_eq: ID): [ActStudyArticle]
  tutorApplication(state: String, id_eq: Int): [Application]
  tutors(page: Int!): [Tutor]
  examTypeList: [ExamType]
  reminderList: [Reminder]
  eClassSchedList(year: Int!, month: Int!): [EClassSched]
}

# this schema allows the following mutation:
type Mutation {
    updateEClassSched_ShutDown (
        id: Int!
    ): EClassSched
    updateEClassSched_SaveSendEmail (
        id: Int!
        idTutor: Int!
        typeClass: String!
        regStatus: Boolean!
        isRemoveAll: Boolean!
    ): EClassSched
    addReminder (
        hour: Int!
        minute: Int!
    ): [Reminder]
    updateReminder (
        id: Int!
        hour: Int!
        minute: Int!
    ): [Reminder]
    deleteReminder (
        id: Int!
    ): [Reminder]
}
`;

export default makeExecutableSchema({typeDefs: schema, resolvers});
