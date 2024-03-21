export declare class AppController {
    constructor();
    getCV(): {
        name: string;
        contact: {
            phone: string;
            email: string;
            linkedin: string;
        };
        work_experience: ({
            position: string;
            company: string;
            start_date: string;
            end_date: string;
            description: string;
            technologies: string[];
            highlights: string[];
            duration?: undefined;
        } | {
            position: string;
            company: string;
            start_date: string;
            end_date: string;
            duration: string;
            description: string;
            technologies: string[];
            highlights: string[];
        } | {
            position: string;
            company: string;
            start_date: string;
            end_date: string;
            duration: string;
            description: string;
            highlights: string[];
            technologies?: undefined;
        })[];
        education: {
            institution: string;
            start_date: string;
            end_date: string;
            duration: string;
            description: string;
            highlights: string[];
        }[];
        skills_activities_interests: string[];
    };
}
