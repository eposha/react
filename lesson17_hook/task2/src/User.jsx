import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  const [userGithub, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error();
      })
      .then(userData => {
        setUserData(userData);
      });
  }, [userId]);

  if (!userGithub) return null;

  const { avatar_url, name, location } = userGithub;

  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

// class User extends React.Component {
//   state = {
//     userGithub: ""
//   };

//   componentDidMount() {
//     this.fetchUser(this.props.match.params.userId);
//   }

//   componentDidUpdate(prevProp) {
//     if (this.props.match.params.userId !== prevProp.match.params.userId) {
//       this.fetchUser(this.props.match.params.userId);
//     }
//   }

//   fetchUser = userId => {
//     fetch(`https://api.github.com/users/${userId}`)
//       .then(response => response.json())
//       .then(data => {
//         this.setState({
//           userGithub: data
//         });
//       });
//   };

//   render() {
//     const { userGithub } = this.state;
//     return (
//       <div className="user">
//         <img
//           alt="User Avatar"
//           src={userGithub.avatar_url}
//           className="user__avatar"
//         />
//         <div className="user__info">
//           <span className="user__name">{userGithub.name}</span>
//           <span className="user__location">{userGithub.location}</span>
//         </div>
//       </div>
//     );
//   }
// }

export default User;
