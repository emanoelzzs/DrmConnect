export default function User({children, user_avatar}){
    return(
        <div className="User">
            <img src={user_avatar} />
            <p><span>{children}</span></p>
        </div>
    )
}