import React from 'react'
import UserCard from './UserCard';

function UserCardGenerator(props) {

  return (
    <>
        {props.data.map((user) => (
                            <div className="user-card">
                                {props.error === "No error" ? (
                                    <UserCard
                                        key={user.id}
                                        name={user.name}
                                        username={user.username}
                                        email={user.email}
                                        id={user.id}
                                        homeUpdateNotify={props.updateNotify}
                                        showModalUser={props.showModalHome}
                                        reload={props.reload}
                                    />
                                ) : (
                                    <div className="user-card">
                                        {props.error}
                                    </div>
                                )}
                            </div>
                        ))}
    </>
  )
}

export default UserCardGenerator