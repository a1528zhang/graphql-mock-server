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

type ActSection{
  id: Int
  name: String
  skills: [Skill]
  examType: ExamType
}
type ActSkill {
  id: Int!
  name: String
  section: ActSection
}
type Details {
  id: Int
  exam_type: String
  evaluate_score: Float
  state: String
  skill: ActSkill
}
type User{
  email: String
  first_name: String
  id: Int
  last_name: String
  mobile_phone: String
}
type Comment{
  content: String
  created_at: String,
  id: Int,
  score: Float,
  student: User
}
type TutorProfile {
  edu_background: String
  id: Int!
  teach_experience: String
  account_state: String
  exam_type: [String]
  skill_number: Int
  state: String
  approved_skills: [ActSkill]
  tutor_rating: Float
}

type Tutor{
  id: Int
  email: String
  first_name:String
  last_name: String
  mobile_phone: String
<<<<<<< Updated upstream
  avatar: String
}
type TestType{
  id: Int
  name: String
  desc: String
=======
  profile: TutorProfile
  comments: [Comment]
>>>>>>> Stashed changes
}
type Application {
  id: Int
  date_of_application: String
  last_qb_date: String
  details(state_eq: String): [Details]
  tutor: Tutor
  test_score: Float
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
  tutorApplications(id_eq: Int, page: Int, per: Int, sort_name: String, details_exam_type_eq: String,
    details_state_eq: String, skills_name_cont: String): [Application]
  tutors(page: Int, per: Int, sort_name: String, first_name_or_last_name_cont: String, 
    profile_account_state_eq: String, profile_state_eq: String, id_eq: Int): [Tutor]
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
