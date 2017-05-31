import { find, filter } from 'lodash';
import { pubsub } from './subscriptions';

const articles = [
    {id: 1, content: "a", created_at: "b", featured_image_url: "3", study_topic_id: 1, title: "666"},
    {id: 2, content: "b", created_at: "b", featured_image_url: "3", study_topic_id: 2, title: "555"},
    {id: 3, content: "c", created_at: "b", featured_image_url: "3", study_topic_id: 3, title: "444"},
];

const topics = [
  { id: 1, name: 'Tom', position: 111, articles: [find(articles, {id: 1})]},
  { id: 2, name: 'Sashko', position: 222, articles: [find(articles, {id: 2})]},
  { id: 3, name: 'nani', position: 333, articles: [find(articles, {id: 3})]},
];

const sections = [
  { id: 1, name: "section 1", topics: [find(topics,  {id:1})], study_topics: [find(topics,  {id:1})]},
  { id: 2, name: "section 2", topics: [find(topics,  {id:2})], study_topics: [find(topics,  {id:2})]},
  { id: 3, name: "section 3", topics: [find(topics,  {id:3})], study_topics: [find(topics,  {id:3})]},
];

const resolveFunctions = {
  Query: {
      sectionWithStudyArticle() {
        return sections;
      },
      studyArticles(_, {id_eq, id_in, topic_id_eq, topic_name_eq, section_id_eq}) {
      return [find(articles, { id: parseInt(id_eq)})];
    },
  },
  // Mutation: {
  //   upvotePost(_, { postId }) {
  //     const post = find(posts, { id: postId });
  //     if (!post) {
  //       throw new Error(`Couldn't find post with id ${postId}`);
  //     }
  //     post.votes += 1;
  //     pubsub.publish('postUpvoted', post);
  //     return post;
  //   },
  // },
  // Subscription: {
  //   postUpvoted(post) {
  //     return post;
  //   },
  // },
  // Author: {
  //   posts(author) {
  //     return filter(posts, { authorId: author.id });
  //   },
  // },
  // Post: {
  //   author(post) {
  //     return find(authors, { id: post.authorId });
  //   },
  // },
};

export default resolveFunctions;
