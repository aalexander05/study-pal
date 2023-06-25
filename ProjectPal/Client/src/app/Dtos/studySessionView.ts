import { StudySessionLink } from "./studySessionLink";
import { StudySessionTag } from "./studySessionTag";

export interface StudySessionView {
    studySessionId: number;
    topic: string;
    links: StudySessionLink[];
    tags: StudySessionTag[];
    minutesStudied: number;
    notes: string;
    dateStudied: string;
}