const techs = {
    node: 'Node JS',
    react: 'React JS',
    mongo: 'Mongo DB',
    express: 'Express JS',
    redux: 'Redux JS',
    rn: 'React Native',
    psql: 'PostgreSQL',
    cs: 'C#',
    mvc: 'ASP .NET MVC',
    sql: 'SQL Server',
};
const platforms = {
    web: 'Web Application',
    mobile: 'Mobile Application',
};

export const gbari = {
    id: 1,
    name: 'GBari',
    description: '',
    duration: '',
    tech: [techs.node, techs.react, techs.mongo, techs.express, techs.redux],
    platforms: [platforms.web],
};
export const estore = {
    id: 2,
    name: 'E-store',
    description: '',
    duration: '',
    techs: [techs.rn],
    platforms: [platforms.mobile],
};
export const bds = {
    id: 3,
    name: 'BDS',
    description: '',
    duration: '',
    techs: [techs.cs, techs.mvc, techs.sql],
    platforms: [platforms.web, platforms.mobile],
};
export const emedi = {
    id: 4,
    name: 'Emedi',
    description: '',
    duration: '',
    techs: [techs.node, techs.react, techs.mongo, techs.express, techs.redux, techs.rn],
    platforms: [platforms.web, platforms.mobile],
    link: 'https://play.google.com/store/apps/details?id=com.landbizz.emedi',
};
export const cascaid = {
    id: 5,
    name: 'Impact Tapestry',
    description: '',
    duration: '',
    techs: [],
    platforms: [platforms.web],
    link: 'https://impacttapestry.com/',
};

export const projects = [cascaid, emedi, bds, estore, gbari, estore];
