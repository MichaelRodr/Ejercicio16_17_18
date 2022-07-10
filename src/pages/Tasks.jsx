
const tasksList = [
  {
  nombre:'Realizar Protipo proyecto',
  description:'Crear prototipo web y mobile',
  level:'Urgent'
},
  {
  nombre:'Realizar Protipo proyecto',
  description:'Crear prototipo web y mobile',
  level:'Urgent'
},
{
  nombre:'Realizar Protipo proyecto',
  description:'Crear prototipo web y mobile',
  level:'Urgent'
},
{
  nombre:'Realizar Protipo proyecto',
  description:'Crear prototipo web y mobile',
  level:'Urgent'
}
]

function Task(props) {
  return <span>{props.value}</span>
}

const Tasks = () => {
  
  const tasks = [...tasksList];
  const listItems = tasks.map((item)=>{
    <Task key={item.toString()} value={item}/>
  })
  
  return (
    <div>
      <h1>Tasks</h1>
      
     <div>
      {listItems}
     </div>
    </div>
  )
}

export default Tasks