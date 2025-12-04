import TableRow from "./TableRow"


const ProgramFee = ({heading ,body}) => {

   
  return (
    <div>
            <div>
              <table >
                  <thead>
                    <tr>
                        {heading.map((head) => (
                            <th>{head}</th>
                        ))}
                    </tr>
                </thead>
                  <div>
                    {body.map((rowContent ,index) => (
                        <TableRow
                            rowContent={rowContent}
                            key={index}
                        />
                    ))}
                    </div>
              </table>
            </div>
     
    </div>
  )
}



export default ProgramFee
