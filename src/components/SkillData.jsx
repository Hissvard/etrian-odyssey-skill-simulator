export default function SkillData(params) {
    const data = params.data;
    const tableData = data.data;

    if (!data.description && !data.data) {
        return <></>;
    }

    let index = 1;
    let headerValues = [
        '',
        ...tableData[0].slice(0, -1).map(() => index++)
    ];

    return (
        <div class='skill-data-container'>
            <p class='skill-data-description'>{data.description}</p>
            <table class='skill-data-table'>
                <tr>{headerValues.map(value => <td>{value}</td>)}</tr>
                {tableData.map(rowData => (
                    <tr>
                        {rowData.map(d => <td>{d}</td>)}
                    </tr>
                ))}
            </table>
        </div>
    );
}
