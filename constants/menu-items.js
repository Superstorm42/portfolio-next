import * as RoutePaths from './route-paths';
import { BsInfoSquare } from 'react-icons/bs';
import { SiExpertsexchange } from 'react-icons/si';
export const MenuItems = [
    { id: 1, name: '', label: 'Introduction', path: RoutePaths.introduction, icon: <BsInfoSquare /> },
    { id: 2, name: 'activity', label: 'Activities', path: RoutePaths.activity },

    // { id: 4, name: 'contact', label: 'Contact', path: RoutePaths.contact },
    { id: 5, name: 'education', label: 'Education', path: RoutePaths.education },
    { id: 6, name: 'experience', label: 'Experiences', path: RoutePaths.experience, icon: <SiExpertsexchange /> },
    { id: 7, name: 'project', label: 'Projects', path: RoutePaths.project },
    { id: 8, name: 'skill', label: 'Skills', path: RoutePaths.skill },
];
