export interface NavItem {
  label: string;
  id: string;
}

export interface TeamMember {
  name: string;
  role?: string;
  image?: string;
}

export interface Law {
  title: string;
  description: string;
}

export interface ScheduleItem {
  module: string;
  title: string;
  activities: {
    week: string;
    description: string;
  }[];
}