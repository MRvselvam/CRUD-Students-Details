import React,{useState, useEffect} from "react";
const Form = (props) => {
    
    const [name,setName] = useState("")
    const [course,setCourse] = useState("")
    const [age,setAge] = useState("")
    const [contact,setContact] = useState("")
    const [email,setEmail] = useState("")
    const [fees,setFees] = useState("")
    const [isedit,setIsEdit] = useState(false)
    const [id,setId] = useState("")

    const onSubmit =()=>{
      if(isedit){
        const data ={
          name:name,
          course:course,
          age:age,
          contact:contact,
          email:email,
          fees:fees,
          isedit:isedit,
          _id:id
        }
        props.createAndUpdate(data)
      }
      else{
        const data ={
          name:name,
          course:course,
          age:age,
          contact:contact,
          email:email,
          fees:fees,
          isedit:isedit
      }
      props.createAndUpdate(data)
    }
  }

    useEffect(()=>{
        if(props.giveData._id != null){
            setName(props.giveData.name)
            setCourse(props.giveData.course)
            setAge(props.giveData.age)
            setContact(props.giveData.contact)
            setEmail(props.giveData.email)
            setFees(props.giveData.fees)
            setId(props.giveData._id)
            setIsEdit(true)
        }
    },[props])

   

  return (
    <div>
      <form>
        <div className="form-group-dark">
          <label>Name:</label>
          <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
          <label>Course:</label>
          <input type="text" className="form-control" value={course} onChange={(e)=>setCourse(e.target.value)}/>
          <label>Age:</label>
          <input type="text" className="form-control" value={age} onChange={(e)=>setAge(e.target.value)}/>
          <label>Contact:</label>
          <input type="text" className="form-control" value={contact} onChange={(e)=>setContact(e.target.value)}/>
          <label>Email:</label>
          <input type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <label>Fees:</label>
          <input type="text" className="form-control" value={fees}onChange={(e)=>setFees(e.target.value)}/><br/>
          <button className="btn btn-success" onClick={onSubmit}>{isedit ? "Update" : "Create"}</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
