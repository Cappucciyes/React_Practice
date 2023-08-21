function Task ({list}) {
    let task = list.map((element) => <li key={`${element}`}>{element}</li>)
    return <>
        <ul className="list-disc">
            {task}
        </ul>
    </>
}

export default Task;