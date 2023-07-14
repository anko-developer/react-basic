import './App.css';

function AppJSX() {
  const name = '앙꼬';
  const list = ['우유', '딸기', '삼겹살'];
  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>Hi!</h2>
      <p>{ name }</p>
      <ul>
        {
          list.map(item => <li>{item}</li>)
        }
      </ul>
      <img style={{width: '200px', height: '200px'}} src='https://images.unsplash.com/photo-1682685796186-1bb4a5655653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80' alt='자연' />
    </>
  );
}

export default AppJSX;
