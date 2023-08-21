function Plan ({list}) {
    let task = list.map((element) => <li key={`${element}`}>{element}</li>)
    return <>
        <ul className="list-disc border-black border-solid border-2">
            {task}
        </ul>
    </>
}

export default Plan;