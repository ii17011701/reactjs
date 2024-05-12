// import React, { useState, useEffect } from 'react';

// const UsersComponent = () => {
//   const [users, setUsers] = useState([]);
//   const [newPost, setNewPost] = useState({ title: '', body: '' });
//   const [editingId, setEditingId] = useState(null);
//   const [editedPost, setEditedPost] = useState({ title: '', body: '' });

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
//       const data = await response.json();
//       setUsers(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setNewPost({ ...newPost, [name]: value });
//   };

//   const handleEditInputChange = (event) => {
//     const { name, value } = event.target;
//     setEditedPost({ ...editedPost, [name]: value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newPost),
//       });
//       if (!response.ok) {
//         throw new Error('Failed to create post');
//       }
//       const data = await response.json();
//       setUsers([...users, data]);
//       setNewPost({ title: '', body: '' }); // Reset newPost state
//     } catch (error) {
//       console.error('Error creating post:', error);
//     }
//   };

//   const handleEdit = (id) => {
//     setEditingId(id);
//     const postToEdit = users.find(user => user.id === id);
//     setEditedPost({ title: postToEdit.title, body: postToEdit.body });
//   };

//   const cancelEdit = () => {
//     setEditingId(null);
//     setEditedPost({ title: '', body: '' });
//   };

//   const handleSaveEdit = async (id) => {
//     try {
//       const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(editedPost),
//       });
//       if (!response.ok) {
//         throw new Error('Failed to update post');
//       }
//       const updatedPost = await response.json();
//       const updatedUsers = users.map(user =>
//         user.id === id ? { ...user, title: updatedPost.title, body: updatedPost.body } : user
//       );
//       setUsers(updatedUsers);
//       setEditingId(null);
//       setEditedPost({ title: '', body: '' });
//     } catch (error) {
//       console.error('Error updating post:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//         method: 'DELETE',
//       });
//       if (!response.ok) {
//         throw new Error('Failed to delete post');
//       }
//       const updatedUsers = users.filter(user => user.id !== id);
//       setUsers(updatedUsers);
//     } catch (error) {
//       console.error('Error deleting post:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Users</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Title:</label>
//           <input
//             type="text"
//             name="title"
//             value={newPost.title}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Body:</label>
//           <textarea
//             name="body"
//             value={newPost.body}
//             onChange={handleInputChange}
//           />
//         </div>
//         <button type="submit">Add Post</button>
//       </form>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>
//             {editingId === user.id ? (
//               <>
//                 <input
//                   type="text"
//                   name="title"
//                   value={editedPost.title}
//                   onChange={handleEditInputChange}
//                 />
//                 <textarea
//                   name="body"
//                   value={editedPost.body}
//                   onChange={handleEditInputChange}
//                 />
//                 <button onClick={() => handleSaveEdit(user.id)}>Save</button>
//                 <button onClick={cancelEdit}>Cancel</button>
//               </>
//             ) : (
//               <>
//                 <h2>{user.title}</h2>
//                 <p>{user.body}</p>
//                 <button onClick={() => handleEdit(user.id)}>Edit</button>
//                 <button onClick={() => handleDelete(user.id)}>Delete</button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UsersComponent;







import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsersComponent = () => {
  const [users, setUsers] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', body: '' });
  const [editingId, setEditingId] = useState(null);
  const [editedPost, setEditedPost] = useState({ title: '', body: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleEditInputChange = (event) => {
    const { name, value } = event.target;
    setEditedPost({ ...editedPost, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
      setUsers([...users, response.data]);
      setNewPost({ title: '', body: '' }); // Reset newPost state
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleEdit = (id) => {
    setEditingId(id);
    const postToEdit = users.find(user => user.id === id);
    setEditedPost({ title: postToEdit.title, body: postToEdit.body });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditedPost({ title: '', body: '' });
  };

  const handleSaveEdit = async (id) => {
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, editedPost);
      const updatedPost = response.data;
      const updatedUsers = users.map(user =>
        user.id === id ? { ...user, title: updatedPost.title, body: updatedPost.body } : user
      );
      setUsers(updatedUsers);
      setEditingId(null);
      setEditedPost({ title: '', body: '' });
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };
  

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const updatedUsers = users.filter(user => user.id !== id);
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div>
      <h1>Users</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={newPost.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Body:</label>
          <textarea
            name="body"
            value={newPost.body}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Post</button>
      </form>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {editingId === user.id ? (
              <>
                <input
                  type="text"
                  name="title"
                  value={editedPost.title}
                  onChange={handleEditInputChange}
                />
                <textarea
                  name="body"
                  value={editedPost.body}
                  onChange={handleEditInputChange}
                />
                <button onClick={() => handleSaveEdit(user.id)}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <h2>{user.title}</h2>
                <p>{user.body}</p>
                <button onClick={() => handleEdit(user.id)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersComponent;
