import { createContext, useContext } from 'react';

// const DeveloperContext = createContext(undefined);
export const DeveloperContext = createContext(undefined);

// create an hook that return a developer if developer is undifined

export const useDeveloperContext = () => {
    const developer = useContext(DeveloperContext);

    if (developer === undefined) {
        throw new Error("useDeveloperContext must be used with a DeveloperContext");
    }

    return developer
}

// export default DeveloperContext;

// export const UserProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     return (
//         <UserContext.Provider value={[user, setUser]}>
//             {children}
//         </UserContext.Provider>
//     )
// }

// const DeveloperContext = React.createContext(null);

// // export const UserProvider = ({ children }) => {
// //     const [user, setUser] = useState(null);

// //     return (
// //         <UserContext.Provider value={[user, setUser]}>
// //             {children}
// //         </UserContext.Provider>
// //     )
// // }

// export default DeveloperContext;