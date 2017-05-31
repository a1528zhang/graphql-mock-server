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

# the schema allows the following query:
type Query {
  sectionWithStudyArticle: [ActSection]
  studyArticles(id_eq: ID, id_in: [ID], topic_id_eq: ID, topic_name_eq: String, section_id_eq: ID): [ActStudyArticle]
}

# this schema allows the following mutation:
`;

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});
