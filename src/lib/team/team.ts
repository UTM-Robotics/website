export interface TeamMemberProps {
	name: string;
	role?: string;
	bio?: string;
	image?: string;
	linkedin?: string;
	github?: string;
}

/**
 * stub data
 */
export const team: TeamMemberProps[] = [];

/**
 * when to stop showing this data
 */
export const expires = new Date(0);
