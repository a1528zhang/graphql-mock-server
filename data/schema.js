import { makeExecutableSchema } from 'graphql-tools';

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

# the schema allows the following query:
type Query {
  sectionWithStudyArticle: [ActSection]
  studyArticles(id_eq: ID, id_in: [ID], topic_id_eq: ID, topic_name_eq: String, section_id_eq: ID): [ActStudyArticle]
  tutorApplication(state: String, id_eq: Int): [Application]
}

# this schema allows the following mutation:
`;

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});
