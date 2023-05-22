const Table = (props)=>{
    return(
        <div>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Age</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Fees</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.displayData.length > 0 ? (
                            props.displayData.map((e, index)=>(
                                <tr key={e._id}>
                                    <td>{index + 1}</td>
                                    <td>{e.name}</td>
                                    <td>{e.course}</td>
                                    <td>{e.age}</td>
                                    <td>{e.contact}</td>
                                    <td>{e.email}</td>
                                    <td>{e.fees}</td>
                                    <td><button className="btn btn-success" onClick={()=>props.getData(e)}>Edit</button></td>
                                    <td><button className="btn btn-danger" onClick={()=>props.deleteData(e)}>Delete</button></td>
                                </tr>
                            ))
                        )
                        :(
                            <tr>
                                <td>No Data</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
 
export default Table;