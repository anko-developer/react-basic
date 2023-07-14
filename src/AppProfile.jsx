import './App.css';
import Profile from './components/Profile';
import Avatar from './components/Avatar';
import Counter from './components/Counter';

function AppProfile() {
  const handleClick = event => {
    console.log(event);
  };
  return (
    <>
      <Counter />
      <button onClick={handleClick}>버튼</button>
      <form onSubmit={handleClick}>
        <input type="text" />
        <button>써밋</button>
      </form>
      <Profile isNew={true} image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80' name='wook' title='developer' />
      <Profile image='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80' name='anko' title='dog' />
      <Avatar image='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80' isNew={true} />
    </>
  );
}

export default AppProfile;
