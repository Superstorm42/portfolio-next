// const languages = {
//     js: { name: 'Javascript', point: 7, description: '' },
//     c: { name: 'C/C++', point: 7, description: '' },
//     cs: { name: 'C#', point: 6, description: '' },
// };
// const fw = {
//     node: { name: 'Node JS', point: 7, description: '' },
//     react: { name: 'React JS', point: 7, description: '' },
//     rn: { name: 'React Native', point: 7, description: '' },
// };
// const db = {};
// const ps = {

// };
const js = { name: 'Javascript', point: 70, description: 'Currently JS is the only language I am working with: Node JS for back-end and React JS for front-end.' };
const c = { name: 'C/C++', point: 70, description: '' };
const cs = { name: 'C#', point: 60, description: '' };
const node = { name: 'Node JS', point: 70, description: '' };
const react = { name: 'React JS', point: 70, description: '' };
const rn = { name: 'React Native', point: 70, description: '' };
const mongo = { name: 'Mongo DB', point: 80, description: '' };
const psql = { name: 'PostgreSQL', point: 50, description: '' };
const algo = { name: 'Algorithm', point: 70, description: '' };
const ds = { name: 'Data structure', point: 70, description: '' };
export const skills = [
    {
        id: 1,
        category: 'Languages',
        skills: [js, cs],
    },
    {
        id: 1,
        category: 'Front-end Development',
        skills: [react],
    },
    {
        id: 2,
        category: 'Back-end Development',
        skills: [node],
    },
    {
        id: 3,
        category: 'Database',
        skills: [mongo, psql],
    },
    {
        id: 4,
        category: 'Mobile Development',
        skills: [rn],
    },

    {
        id: 5,
        category: 'Problem Solving',
        skills: [algo, ds],
    },
];
