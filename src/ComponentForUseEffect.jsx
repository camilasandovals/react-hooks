import { useFetch } from "./useFetch"
export default function ComponentForUseEffect({login}){
    const {loading, data, error} = useFetch(
        `https://api.github.com/users/${login}`
    );
    if (loading) return <h1>loading...</h1>
    if (error)
        return (
            <pre>{JSON.stringify(error, null, 2)}</pre>
        );
    return(
        <div>
            <img
                src={data.avatar_url}
                alt={data.login}/>
            <div>
                <h1>{data.login}</h1>
                {data.name && <p>{data.name}</p>}
                {data.location && <p>{data.location}</p>}
            </div>
        </div>
    )
}