;`use strict`

const rootEl = document.getElementById('root')
const root = ReactDOM.createRoot(rootEl)

root.render(<App />)

function App () {
  const user = {
    name: 'Emma',
    surname: 'Watson',
    gender: 'female',
    age: 35,
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hG7GD7aa5R3syPCkANL9RmSfyA2-Wg5JQg&s'
  }
  const user1 = {
    name: 'Tom',
    surname: 'Henks',
    gender: 'male',
    age: 35,
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hG7GD7aa5R3syPCkANL9RmSfyA2-Wg5JQg&s'
  }
  const user2 = {
    name: '---',
    surname: 'Henks',
    gender: 'other',
    age: 35,
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hG7GD7aa5R3syPCkANL9RmSfyA2-Wg5JQg&s'
  }
  return (
    <div>
      <UserCard user={user} />
      <UserCard user={user1} />
      <UserCard user={user2} />
    </div>
  )
  // UserCard({user: user})
  // UserCard(user1)
}

function UserCard (props) {
  // console.log(props)
  let color = null
  if (props.user.gender === 'male') {
    color = 'blue'
  } else if (props.user.gender === 'female') {
    color = 'red'
  } else {
    color = 'grey'
  }
  // const color = props.user.gender === 'male' ? 'blue' : 'red'
  const nameStyle = { color: color }

  return (
    <main className='userWrap'>
      <article className='userCard'>
        <h1 style={nameStyle}>{props.user.name}</h1>
        <h2>{props.user.surname}</h2>
        <img
          className='userImg'
          src={props.user.imgSrc}
          alt={props.user.name}
        />
        <p>{props.user.age}</p>
      </article>
    </main>
  )
}
