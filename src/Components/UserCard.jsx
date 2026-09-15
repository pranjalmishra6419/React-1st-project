import React from 'react'
import './Css/UserCard.css'

const UserCard = () => {
  return (
    <>
        <div className="client-card-outer">
            <p>What Our Client Says</p>
            <div className="client-card-container">
                <div className="client-card-main">
                    <img src="/images/user.webp" alt="" />
                    <div className="client-card-texts">
                        <p>Vidwan Singh</p>
                        <p>Nice And Fast Gifting Option</p>
                        <p>They helped me deliver right away in India.?
                        The customer support is very helpful. Would definitely use their service again.They helped me deliver right away in India.?
                        The customer support is very helpful. Would definitely use their service again.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default UserCard