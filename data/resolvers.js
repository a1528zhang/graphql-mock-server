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
        tutorApplications(_, {id_eq, page, per, sort_name, details_exam_type_eq, details_state_eq, skills_name_cont}) {
            if (details_state_eq) {
                return filter(Data.applications, function(d){ return d.details[0].state === details_state_eq});
            } else if (id_eq) {
                return [find(Data.applications, {id: parseInt(id_eq)})];
            }
            return Data.applications
        },
        tutors(_, {page, per, sort_name,
            first_name_or_last_name_cont, profile_account_state_eq, profile_state_eq, id_eq}) {
            if (id_eq) {
                return filter(Data.tutors, function(d){ return d.id === id_eq});
            }
            return Data.tutors;
        },
        examTypeList() {
            return Data.examTypes;
        },
        eClassSchedList(_, {year, month}) {
            let lastDay = new Date(year, month - 2, 0).getDate();
            lastDay -= 7;
            let dateStart = new Date(year, month - 2, lastDay);
            let dateEnd = new Date(year, month, 7);

            let ret = [];

            Data.eClassScheds.map(item => {
                let dateItem = new Date(item.starts_at);
                if (dateItem >= dateStart && dateItem <= dateEnd) {
                    ret.push(item);
                }
            });

            return ret;
        }
    },
    Mutation: {
        updateEClassSched_ShutDown(_, {id}) {
            let ret = find(Data.eClassScheds, {id: parseInt(id)});
            ret.status = 'Shut Down';
            return ret;
        },
        updateEClassSched_SaveSendEmail(_, {id, idTutor, typeClass, regStatus, isRemoveAll}) {
            let ret = find(Data.eClassScheds, {id: parseInt(id)});
            let tutor = find(Data.tutors, {id: parseInt(idTutor)});

            ret.eClass.tutor = tutor;
            ret.eClass.type = typeClass;
            ret.regStatus = regStatus;
            if (isRemoveAll) {
                ret.enrolledCount = 0;
                ret.enrolledList = [];
            }

            return ret;
        },
        addReminder(_, {hour, minute}) {
            let ret = Data.reminders;
            ret.push({
                id: ret.length + 1,
                hour: hour,
                minute: minute
            });
            return ret;
        },
        updateReminder(_, {id, hour, minute}) {
            let ret = Data.reminders;
            let reminder = find(ret, {id: parseInt(id)});
            if (reminder) {
                reminder.hour = hour;
                reminder.minute = minute;
            }
            return ret;
        },
        deleteReminder(_, {id}) {
            let ret = Data.reminders;
            let index = findIndex(ret, {id: parseInt(id)});
            if (index && index >= 0) {
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
