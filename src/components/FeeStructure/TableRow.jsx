

const TableRow = ({row}) => {
  return (
    <div>
       <tr>
                {row.map((val, rowID) => (
                    <td key={rowID}>{val}</td>
                ))}
            </tr>
    </div>
  )
}

export default TableRow
