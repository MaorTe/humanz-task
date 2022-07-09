import React from 'react';
import { getUsers, deleteUsers, addUser } from '../api/usersApi';
import { getGeolocation } from './../api/geoLocationApi';
const UsersContext = React.createContext();

function UsersProvider(props) {
   const [users, setUsers] = React.useState([]);
   const [isLoading, setIsLoading] = React.useState(false);

   React.useEffect(() => {
      getUsers()
         .then((res) => setUsers(res))
         .catch((e) => console.log(e));
   }, []);

   const handleDelete = React.useCallback(
      async (selectedIds) => {
         try {
            await deleteUsers(selectedIds);
            const filteredUsers = users.filter((user) => !selectedIds.includes(user.ID));
            setUsers(filteredUsers);
         } catch (e) {
            console.log(e);
         }
      },
      [users],
   );
   const handleCreateUser = React.useCallback(
      async (user) => {
         try {
            const geoInfo = await getGeolocation(user.IP);
            const newUser = {
               ...user,
               GeoInfo: `${geoInfo.country}, ${geoInfo.city}`,
            };
            await addUser(newUser);
            setUsers([...users, newUser]);
         } catch (e) {
            console.log(e);
         }
      },
      [users],
   );
   const handleFilter = React.useCallback(async (searchTerm, category) => {
      try {
         setIsLoading(true);
         const filteredUsers = await getUsers(searchTerm, category);
         setUsers(filteredUsers);
         setIsLoading(false);
      } catch (e) {
         console.log(e);
      }
   }, []);

   const value = React.useMemo(
      () => ({
         users,
         handleDelete,
         handleCreateUser,
         handleFilter,
         isLoading,
      }),
      [users, handleDelete, handleCreateUser, handleFilter, isLoading],
   );

   return <UsersContext.Provider value={value} {...props} />;
}

function useUsers() {
   const context = React.useContext(UsersContext);
   if (context === undefined) {
      throw new Error('useUsers must be used within a UsersProvider');
   }
   return context;
}

export { UsersProvider, useUsers };
