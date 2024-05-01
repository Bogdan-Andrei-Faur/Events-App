import { useEffect, useState } from "react";

const useRepositories = () => {
    const [repositories, setRepositories] = useState(null)

    const fetchRepositories = async () => {
        const response = await globalThis.fetch("http://172.20.10.3:5001/api/repositories")
        const json = await response.json()
        setRepositories(json)
    }

    useEffect(() => {
        fetchRepositories()
    }, [])

    const repositoriesNodes = repositories 
        ? repositories.edges.map(edge => edge.node) : []

    return {repositories: repositoriesNodes}
}

export default useRepositories;