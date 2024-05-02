import { ApolloClient } from "apollo-boost";

const createApolloClient = () => {
    return new ApolloClient({
        uri: "http://192.168.1.36:4000/graphql"
    })
}

export default createApolloClient;