import {find, findIndex, filter} from 'lodash';
import {pubsub} from './subscriptions';
import * as Data from './data';

const resolveFunctions = {
    Query: {
        sectionWithStudyArticle() {
            return Data.sections;
        },
        reminderList() {
            return Data.reminders;
        },
        studyArticles(_, {id_eq, id_in, topic_id_eq, topic_name_eq, section_id_eq}) {
            return [find(Data.articles, {id: parseInt(id_eq)})];
        },
        tutorApplication(_, {state, id_eq}) {
            if (state) {
                return filter(Data.applications, function(d) {
                    return d.skills[0].state === state
                });
            } else if (id_eq) {
                return [find(Data.applications, {id: parseInt(id_eq)})];
            }
            return Data.openApplications
        }
    },
    Mutation: {
        addReminder(_, {time}) {
            let ret = Data.reminders;
            ret.push({id: ret.length+1, time: time});
            return ret;
        },
        updateReminder(_, {id, time}) {
            let ret = Data.reminders;
            let reminder = find(ret, {id: parseInt(id)});
            if (reminder) {
                reminder.time = time;
            }
            return ret;
        },
        deleteReminder(_, {id}) {
            let ret = Data.reminders;
            let index = findIndex(ret, {id: parseInt(id)});
            if (index && index >=0 ) {
                ret.splice(index, 1);
            }
            return ret;
        },
        // upvotePost(_, {postId}) {
        //     const post = find(posts, {id: postId});
        //     if (!post) {
        //         throw new Error(`Couldn't find post with id ${postId}`);
        //     }
        //     post.votes += 1;
        //     pubsub.publish('postUpvoted', post);
        //     return post;
        // }
    },
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
