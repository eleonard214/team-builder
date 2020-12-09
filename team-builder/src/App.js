import React,{useState} from 'react';
import Form from './component/form';
import logo from './logo.svg';
import './App.css';


const initialTeam = [
  {fName: 'Erica Leonard', email:'someemail@email.com', role:'Student'}
];

function App() {
const [team,setTeam]=useState(initialTeam)
const [teamInfo,setTeamInfo]=useState({fName:'', email:'', role:''})
const [edited, setEdited] = useState({})

const onInputChange = e => {
  const inputChange = e.target.fName
  const newValue = e.target.newValue
  setTeamInfo({
    ...teamInfo, [inputChange]:newValue,
  })
}
function memToEdit(event){
  setEdited(event.target)
  return console.log(edited)
  }

  const onFSubmit = e => {
    e.preventDefault()
    const newMember ={
      fName: teamInfo.fName,
      email: teamInfo.email,
      role: teamInfo.role,
    }
    setTeam([...team, newMember])
  }
  return (
    <div className="App">
      
      <Form
      onInputChange={onInputChange}
      teamInfo={teamInfo}
      onFSubmit={onFSubmit}
      memToEdit={memToEdit}
      />
  
    <h3>Team Members</h3>
    {team.map(f => <div key={f.id}>Name: {f.name} Role: {f.role} Email: {f.email}<button onClick={memToEdit}>Edit</button></div>)}
    </div>
  );
}

export default App;
